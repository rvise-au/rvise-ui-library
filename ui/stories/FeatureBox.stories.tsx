import type { Meta, StoryObj } from '@storybook/react';
import { Tb24Hours } from 'react-icons/tb';

import { FeatureBox } from '../components/featureBox';

const SvgIcon = () => (
  <svg className="text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
    <polygon
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      points="29 13 14 29 25 29 23 39 38 23 27 23"
    ></polygon>
  </svg>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/FeatureBox',
  component: FeatureBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FeatureBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    iconProps: {
      icon: <Tb24Hours />,
      shape: 'circle',
      size: 'sm',
      color: 'green',
    },
    title: '24/7 Support',
    align: 'center',
    description: 'We are here to help you 24 hours a day, 7 days a week.',
    link: {
      href: '/support',
      title: 'Learn more',
    },
  },
};
