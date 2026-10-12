/**
 * Global Analytics & Automatic WhatsApp Link Tracking
 * Supports:
 *  - Meta (Facebook) Pixel: ID 1270731831846532 (fbq('track', 'Lead'))
 *  - TikTok Pixel: ID DB6G513C77UD59ISHM00 (ttq.track('Contact'))
 *
 * Automatic link detection recognizes any link pointing to WhatsApp destinations:
 *  - chat.whatsapp.com
 *  - whatsapp.com / www.whatsapp.com
 *  - api.whatsapp.com
 *  - wa.me
 * Works with any current and future group link dynamically without modifying code.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track?: (eventName: string, params?: Record<string, unknown>) => void;
      page?: () => void;
      [key: string]: unknown;
    };
    __whatsappTrackingInitialized?: boolean;
  }
}

// Allowed WhatsApp hostnames (normalized to lowercase)
const WHATSAPP_HOSTNAMES = new Set([
  'chat.whatsapp.com',
  'whatsapp.com',
  'www.whatsapp.com',
  'api.whatsapp.com',
  'wa.me',
]);

/**
 * Checks whether a given URL or string points to a recognized WhatsApp destination.
 * Uses robust URL and hostname parsing.
 */
export function isWhatsAppUrl(href: string | null | undefined): boolean {
  if (!href || typeof href !== 'string') return false;

  const trimmed = href.trim();
  if (!trimmed) return false;

  try {
    // If it's a relative URL or anchor without protocol, URL constructor needs base
    const parsed = new URL(trimmed, window.location.origin);
    const hostname = parsed.hostname.toLowerCase();

    // Check direct match
    if (WHATSAPP_HOSTNAMES.has(hostname)) {
      return true;
    }

    // Check subdomain of whatsapp.com (e.g. web.whatsapp.com, chat.whatsapp.com)
    if (hostname.endsWith('.whatsapp.com')) {
      return true;
    }
  } catch {
    // Fallback regex in case of malformed URLs that browser might still resolve
    const pattern = /^(https?:\/\/)?([a-z0-9-]+\.)*(whatsapp\.com|wa\.me)(\/.*)?$/i;
    return pattern.test(trimmed);
  }

  return false;
}

// Debounce state to prevent duplicate rapid clicks / event bubbling
let lastFiredTimestamp = 0;
const DEDUP_WINDOW_MS = 600;

/**
 * Dispatches conversion events to Meta and TikTok pixels.
 * Guarantees:
 *  - One Meta 'Lead' event per qualifying click.
 *  - One TikTok 'Contact' event per qualifying click.
 *  - Does not block navigation or crash if pixels are blocked or missing.
 */
export function fireWhatsAppLeadEvents(): void {
  const now = Date.now();
  if (now - lastFiredTimestamp < DEDUP_WINDOW_MS) {
    return;
  }
  lastFiredTimestamp = now;

  // 1. Meta Pixel Lead event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead');
    } catch (err) {
      console.warn('Meta Pixel tracking error:', err);
    }
  }

  // 2. TikTok Pixel Contact event
  if (
    typeof window !== 'undefined' &&
    window.ttq &&
    typeof window.ttq.track === 'function'
  ) {
    try {
      window.ttq.track('Contact');
    } catch (err) {
      console.warn('TikTok Pixel tracking error:', err);
    }
  }
}

/**
 * Legacy explicit click handler for backward compatibility with existing onClick props.
 * Note: Now defers entirely to normal anchor navigation while sending tracking events.
 */
export function trackWhatsAppLead(
  _e?: React.MouseEvent<HTMLAnchorElement>,
  _destinationUrl?: string
): void {
  // Fire both pixels safely
  fireWhatsAppLeadEvents();
  // Do NOT preventDefault! Let native <a> navigation work seamlessly.
}

/**
 * Initializes automatic global event delegation for all WhatsApp links on the page.
 * Uses event delegation on document so it works for:
 *  - Existing buttons and links
 *  - Dynamically rendered links
 *  - Newly added buttons or changed invitation URLs
 *  - Prevents double-firing if both delegator and explicit onClick are present
 */
export function initAutomaticWhatsAppTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  if (window.__whatsappTrackingInitialized) {
    return () => {};
  }
  window.__whatsappTrackingInitialized = true;

  const handleClick = (event: MouseEvent) => {
    // Traverse up to find closest anchor <a> element
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const anchor = target.closest('a') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (isWhatsAppUrl(href)) {
      fireWhatsAppLeadEvents();
    }
  };

  // Capture phase to reliably catch clicks before any component stopPropagation
  document.addEventListener('click', handleClick, { capture: true, passive: true });

  return () => {
    document.removeEventListener('click', handleClick, { capture: true });
    window.__whatsappTrackingInitialized = false;
  };
}
