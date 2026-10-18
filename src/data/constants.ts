export const WHATSAPP_GROUP_LINK =
  'https://chat.whatsapp.com/DfMD6hzurfuF7CZKCxjcvE?s=cl&p=i&mlu=4&ilr=4&iam=2';

export const EVENT_DETAILS = {
  name: 'YOUR FIRST DESIGN!',
  tagline: "Come, Let’s Create Your First Photoshop Design.",
  host: 'Franklin Etinosa Ighile',
  dateFormatted: '27TH – 29TH NOVEMBER 2026',
  dateFull: 'Friday 27th – Sunday 29th November 2026',
  duration: '3-DAY CLASS',
  time: '8:00 PM WAT DAILY',
  platform: 'LIVE ON WHATSAPP & YOUTUBE',
  cost: 'COMPLETELY FREE',
  targetIsoDate: '2026-11-27T20:00:00+01:00', // Start date of 3-day class
};

// Generates Google Calendar link
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("YOUR FIRST DESIGN! - 3-Day Free WhatsApp & YouTube Photoshop Class");
  const details = encodeURIComponent(
    "Come, Let’s Create Your First Photoshop Design with Franklin Etinosa Ighile.\n\n3-Day Class: 27th – 29th November 2026 at 8:00 PM WAT daily.\n\nJoin the WhatsApp group here: " +
      WHATSAPP_GROUP_LINK +
      "\n\nPlease have your laptop ready if possible!"
  );
  const location = encodeURIComponent("Live on WhatsApp & YouTube");
  // 2026-11-27 to 2026-11-29
  const dates = "20261127T190000Z/20261129T210000Z";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
