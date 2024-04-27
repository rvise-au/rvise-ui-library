import type { Meta, StoryObj } from '@storybook/react';

import { Author } from '../components/author';

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
  title: 'Components/Author',
  component: Author,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Author>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    layout: 'row',
    name: 'Lindsay Walton',
    variant: 'default',
    position: 'Front-end Developer',
    image:
      'https://images.unsplash.com/photo-1504904488824-dbeda3cb530b?q=80&w=2519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};

export const BaseWithCompany: Story = {
  args: {
    layout: 'row',
    name: 'Lindsay Walton',
    position: 'Front-end Developer',
    company: 'Acme Inc.',
    socialHandle: 'lindsaywalton',
    image:
      'https://images.unsplash.com/photo-1504904488824-dbeda3cb530b?q=80&w=2519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};
