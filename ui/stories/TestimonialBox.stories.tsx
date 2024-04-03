import type { Meta, StoryObj } from '@storybook/react';

import { TestimonialBox } from '../components/testimonialBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TestimonialBox',
  component: TestimonialBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TestimonialBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    quoteIconProps: {
      shape: 'rounded',
      size: 'lg',
      color: 'green',
      showIcon: true,
      bgColor: '#6366f1',
    },
    shadow: 'md',
    quote:
      'Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non.',
    link: {
      href: '/support',
      title: 'Learn more',
    },
  },
};
