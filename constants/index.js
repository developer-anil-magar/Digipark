import {
  Tick,
  FourDots,
  MapIcon,
  SmartCar,
  Eren,
  Mikasa,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@/public';

import { cities } from './cities';

export const navLinks = [
  {
    title: 'How it works',
    href: '/home',
  },
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

export const features = [
  {
    title: 'No spam email',
    img: Tick,
  },
  {
    title: '22/7 support system',
    img: Tick,
  },
  {
    title: 'Free trial 13 days',
    img: Tick,
  },
];

export const featureCards = [
  {
    id: 1,
    img: FourDots,
    description: 'Well organized information',
  },
  {
    id: 2,
    img: MapIcon,
    description: 'Google maps integration',
  },
  {
    id: 3,
    img: SmartCar,
    description: 'Integrate with car sensor',
  },
];

export const initialDetails = {
  city: '',
  lat: '',
  lng: '',
  country: '',
  parking: '',
};

export const testimonials = [
  {
    id: 1,
    name: 'Eden Yeager',
    profileImg: Eren,
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus morbi ultrices sit hac condimentum adipiscing. Risus auctor.',
    rating: 4.5,
    ratingFrom: 'from App store',
  },
  {
    id: 2,
    name: 'Mikasa Ackerman',
    profileImg: Mikasa,
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam semper odio consectetur faucibus tristique nec vitae volutpat volutpat.',
    rating: 4.8,
    ratingFrom: 'from Play store',
  },
  {
    id: 3,
    name: 'Eden Yeager',
    profileImg: Eren,
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus morbi ultrices sit hac condimentum adipiscing. Risus auctor.',
    rating: 4.5,
    ratingFrom: 'from App store',
  },
  {
    id: 4,
    name: 'Mikasa Ackerman',
    profileImg: Mikasa,
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam semper odio consectetur faucibus tristique nec vitae volutpat volutpat.',
    rating: 4.8,
    ratingFrom: 'from Play store',
  },
  {
    id: 5,
    name: 'Eden Yeager',
    profileImg: Eren,
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus morbi ultrices sit hac condimentum adipiscing. Risus auctor.',
    rating: 4.5,
    ratingFrom: 'from App store',
  },
  {
    id: 6,
    name: 'Mikasa Ackerman',
    profileImg: Mikasa,
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam semper odio consectetur faucibus tristique nec vitae volutpat volutpat.',
    rating: 4.8,
    ratingFrom: 'from Play store',
  },
  {
    id: 7,
    name: 'Eden Yeager',
    profileImg: Eren,
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus morbi ultrices sit hac condimentum adipiscing. Risus auctor.',
    rating: 4.5,
    ratingFrom: 'from App store',
  },
  {
    id: 8,
    name: 'Mikasa Ackerman',
    profileImg: Mikasa,
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam semper odio consectetur faucibus tristique nec vitae volutpat volutpat.',
    rating: 4.8,
    ratingFrom: 'from Play store',
  },
];

export const socialIcons = [
  {
    id: 1,
    img: Facebook,
  },
  {
    id: 2,
    img: Instagram,
  },
  {
    id: 3,
    img: LinkedIn,
  },
  {
    id: 4,
    img: Twitter,
  },
];

export const footerLinks = [
  {
    title: 'address',
    links: [
      {
        name: '8769 Streets 31 1st floor,Semarang, Indonesia',
        link: 'street: 8769 Streets 31 1st floor,Semarang,Indonesia',
      },
    ],
  },
  {
    title: 'contact us on',
    links: [
      {
        name: '+62453539287',
        link: 'tel:+62453539287',
      },
      {
        name: '+62453540258',
        link: 'tel:+62453540258',
      },
      {
        name: 'Hello@Tasktion.com',
        link: 'email:Hello@Tasktion.com',
      },
    ],
  },
  {
    title: 'our policies',
    links: [
      {
        name: 'Privacy Policy',
        link: '/',
      },
      {
        name: 'Term of Use',
        link: '/',
      },
      {
        name: 'Term of Order',
        link: '/',
      },
    ],
  },
];

export { cities };
