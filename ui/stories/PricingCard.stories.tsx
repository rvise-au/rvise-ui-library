import type { Meta, StoryObj } from '@storybook/react';

import { RiCheckLine } from 'react-icons/ri';

import { PricingCard } from '../components/pricingCard';

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
  title: 'Components/PricingCard',
  component: PricingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  render: ({ ...args }) => (
    <div
      style={{
        maxWidth: 460,
        margin: '0 auto',
        padding: '40px',
      }}
    >
      <PricingCard {...args} />
    </div>
  ),
} satisfies Meta<typeof PricingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    title: 'Startup',
    price: 19,
    description: 'A plan that scales with your rapidly growing business.',
    featureListIcon: <RiCheckLine size={24} />,
    featuredListTitle: 'What you get:',
    border: 'md',
    borderColor: '#f7f7f7',
    radius: '2xl',
    isPopular: true,
    featureList: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
    ],
  },
};
