import { TbCookie, TbGauge, TbLock, TbUser } from 'react-icons/tb';

import { ButtonGroup } from '../../buttons/Group';

export const featuresMock = [
  {
    icon: TbGauge,
    heading: {
      text: 'Extreme performance',
      size: 'lg',
      weight: 600,
    },
    text: {
      text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
      size: 'sm',
      color: 'dimmed',
    },
  },
  {
    icon: TbUser,
    heading: {
      text: 'Privacy focused',
      size: 'lg',
      weight: 600,
    },
    text: {
      text: 'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
      size: 'sm',
      color: 'dimmed',
    },
  },
  {
    icon: TbCookie,
    heading: {
      text: 'No third parties',
      size: 'lg',
      weight: 600,
    },
    text: {
      text: 'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
      size: 'sm',
      color: 'dimmed',
    },
  },
  {
    icon: TbLock,
    heading: {
      text: 'Secure by default',
      size: 'lg',
      weight: 600,
    },
    text: {
      text: 'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
      size: 'sm',
      color: 'dimmed',
    },
  },
];

export const textBlockMock = {
  heading: {
    text: 'Data to enrich your online business',
    size: 'h1',
    order: 1,
  },
  subheading: {
    text: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    size: 'lg',
  },
  children: <ButtonGroup />,
  width: 'sm',
};

export const buttonsMock = [
  {
    label: 'Get Started',
    href: '#',
    variant: 'filled',
    color: 'primary',
  },
  {
    label: 'Learn More',
    href: '#',
    variant: 'transparent',
    color: 'black',
  },
];

export const mediaBlockMock = {
  type: 'image',
  imageProps: {
    src: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80',
    alt: 'Image alt text',
    quality: 85,
    fill: true,
  },
};

export const mediaOffsetBlockMock = {
  type: 'image',
  mediaStyles: {
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  imageProps: {
    fill: true,
    src: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
    alt: 'Image alt text',
    quality: 85,
    width: 1340,
    height: 820,
  },
};
