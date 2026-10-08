export const WHATSAPP_GROUP_LINK =
  'https://chat.whatsapp.com/BnwneJ7MhU8E9i6HoZEIw5?s=cl&p=i&ilr=4&iam=2';

export const EVENT_DETAILS = {
  name: 'YOUR FIRST DESIGN!',
  tagline: "Come, Let’s Create Your First Photoshop Design.",
  host: 'Franklin Etinosa Ighile',
  dateFormatted: '18TH – 20TH OCTOBER 2026',
  dateFull: 'Sunday 18th – Tuesday 20th October 2026',
  duration: '3-DAY CLASS',
  time: '8:00 PM WAT DAILY',
  platform: 'LIVE ON WHATSAPP',
  cost: 'COMPLETELY FREE',
  targetIsoDate: '2026-10-18T20:00:00+01:00', // Start date of 3-day class
};

// Generates Google Calendar link
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("YOUR FIRST DESIGN! - 3-Day Free WhatsApp Photoshop Class");
  const details = encodeURIComponent(
    "Come, Let’s Create Your First Photoshop Design with Franklin Etinosa Ighile.\n\n3-Day Class: 18th – 20th October 2026 at 8:00 PM WAT daily.\n\nJoin the WhatsApp group here: " +
      WHATSAPP_GROUP_LINK +
      "\n\nPlease have your laptop ready if possible!"
  );
  const location = encodeURIComponent("Live on WhatsApp");
  // 2026-10-18 to 2026-10-20
  const dates = "20261018T190000Z/20261020T210000Z";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
