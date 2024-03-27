import type { Meta, StoryObj } from '@storybook/react';

import { FeatureBox } from '../components/featureBox';

const SvgIcon = () => (
  <svg className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
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
      icon: <SvgIcon />,
      shape: 'circle',
      size: 'lg',
      bgColor: '#f9f9f9',
    },
  },
};
