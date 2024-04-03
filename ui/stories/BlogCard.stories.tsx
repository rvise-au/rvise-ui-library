import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from '../components/blogCard';
import { mediaDataImage } from '../global.data';

const demoMediaImage = mediaDataImage;
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BlogCard',
  component: BlogCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    media: demoMediaImage,
    date: new Date(),
    tags: ['tag1', 'tag2'],
    title: {
      text: 'How to use search engine optimization to drive sales',
      size: 'h5',
      weight: 'bold',
    },
    excerpt: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus in ante.',
      size: 'sm',
    },
  },
};
