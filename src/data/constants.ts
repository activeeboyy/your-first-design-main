export const WHATSAPP_GROUP_LINK =
  'https://chat.whatsapp.com/BnwneJ7MhU8E9i6HoZEIw5?s=cl&p=i&ilr=4&iam=2';

export const EVENT_DETAILS = {
  name: 'YOUR FIRST DESIGN!',
  tagline: "Come, Let’s Create Your First Photoshop Design.",
  host: 'Franklin Etinosa Ighile',
  dateFormatted: '18TH OCTOBER 2026',
  dateFull: 'Sunday, 18th October 2026',
  time: '8:00 PM WAT',
  platform: 'LIVE ON WHATSAPP',
  cost: 'COMPLETELY FREE',
  targetIsoDate: '2026-10-17T20:00:00+01:00', // 10 days countdown target
};

// Generates Google Calendar link
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("YOUR FIRST DESIGN! - Free WhatsApp Photoshop Class");
  const details = encodeURIComponent(
    "Come, Let’s Create Your First Photoshop Design with Franklin Etinosa Ighile.\n\nJoin the WhatsApp group here: " +
      WHATSAPP_GROUP_LINK +
      "\n\nPlease have your laptop ready if possible!"
  );
  const location = encodeURIComponent("Live on WhatsApp");
  // 2026-10-18 20:00 WAT (19:00 UTC) to 22:00 WAT (21:00 UTC)
  const dates = "20261018T190000Z/20261018T210000Z";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
