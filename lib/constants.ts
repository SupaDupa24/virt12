export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'birthday';
export const BRAND_NAME = 'birthday';
export const SITE_NAME_MULTILINE = ['b1', 'b2'];
export const SITE_NAME = 'birthday';
export const META_DESCRIPTION =
  'Happy Birthday';
export const SITE_DESCRIPTION =
  'Happy Birthday2';
export const DATE = 'May 29, 2021';
export const SHORT_DATE = 'May 29 - Time is TBA';
export const FULL_DATE = 'May 29 2:00 Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/sanity-io/sanity-template-nextjs-event';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Stage A',
    route: '/stage/a'
  },
  {
    name: 'Stage C',
    route: '/stage/c'
  },
  {
    name: 'Stage M',
    route: '/stage/m'
  },
  {
    name: 'Stage E',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
