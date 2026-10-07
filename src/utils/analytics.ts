import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../data/constants';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

let isRedirecting = false;

/**
 * Tracks the Meta Pixel Lead event and redirects the visitor to the WhatsApp group.
 * Prevents duplicate fires from multi-clicks and guarantees the Lead event dispatches.
 */
export function trackWhatsAppLead(
  e?: React.MouseEvent<HTMLAnchorElement>,
  destinationUrl: string = WHATSAPP_GROUP_LINK
) {
  // If already redirecting, prevent duplicate event calls
  if (isRedirecting) {
    if (e) e.preventDefault();
    return;
  }

  // 1. Fire Meta Pixel Lead event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead');
    } catch (err) {
      // Gracefully catch any tracker error so navigation is never blocked
      console.warn('Meta Pixel tracking error:', err);
    }
  }

  // If user used Cmd / Ctrl to explicitly open in a new tab, let default browser behavior handle
  if (e && (e.metaKey || e.ctrlKey)) {
    return;
  }

  if (e) {
    e.preventDefault();
  }

  const url = destinationUrl || WHATSAPP_GROUP_LINK;
  isRedirecting = true;

  // 2. Redirect to the WhatsApp group after a short delay (250ms) to allow the tracking request to dispatch
  setTimeout(() => {
    window.location.href = url;
    // Reset guard after 2 seconds in case user presses back button
    setTimeout(() => {
      isRedirecting = false;
    }, 2000);
  }, 250);
}
