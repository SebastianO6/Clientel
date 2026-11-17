import eventPoster from '../assets/You are Invited To.png'

export type CampaignEvent = {
  id: string
  title: string
  date: string
  time: string
  venue: string
  description: string
  poster: string | null
  posterAlt: string
  actionLabel?: string
  actionHref?: string
}

// Add upcoming events here. Import each poster from src/assets and set its event details below.
export const upcomingEvents: CampaignEvent[] = [
  {
    id: 'goat-eating-fundraiser',
    title: 'Goat Eating Fundraiser',
    date: '21 November 2026',
    time: '12 noon–5 pm',
    venue: 'Ranger Park Binyanya Gardens, Rongai',
    description: 'Join Francis O. Odhiambo (Pope) for an afternoon of food and conversation. KSh 10,000 per plate. M-PESA Till: 1858189.',
    poster: eventPoster,
    posterAlt: 'Invitation to Francis O. Odhiambo’s Goat Eating Fundraiser on 21 November 2026 at Ranger Park Binyanya Gardens, Rongai',
    actionLabel: 'View M-PESA payment steps',
    actionHref: '/mpesa',
  },
]
