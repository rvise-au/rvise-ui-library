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
    media: {
      ...demoMediaImage,
      imageProps: {
        src: 'https://images.unsplash.com/photo-1700981293090-f78b500fc92c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        aspectRatio: {
          base: '16/12',
        },
        alt: 'Image placeholder',
      },
      className: 'rounded-lg',
    },
    date: new Date(),
    tags: ['Sales', 'Marketing'],
    title: {
      text: 'How to use search engine optimization to drive sales',
      size: 'h6',
      tag: 'h3',
      weight: 'bold',
    },
    excerpt: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus in ante.',
      size: 'sm',
    },
  },
};

export const BaseNoImage: Story = {
  args: {
    media: {
      ...demoMediaImage,
      className: 'rounded-lg',
    },
    date: new Date(),
    tags: ['Sales', 'Marketing'],
    title: {
      text: 'How to use search engine optimization to drive sales',
      size: 'h6',
      tag: 'h3',
      weight: 'bold',
      color: '#212121',
    },
    excerpt: {
      text: 'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
      size: 'sm',
      color: '#555555',
    },
    hideMedia: true,
  },
};

export const BaseImageOverlay: Story = {
  args: {
    media: {
      ...demoMediaImage,
      className: 'rounded-lg',
    },
    date: new Date(),
    tags: ['Sales', 'Marketing'],
    title: {
      text: 'How to use search engine optimization to drive sales',
      size: 'h6',
      tag: 'h3',
      weight: 'bold',
      color: '#212121',
    },
    excerpt: {
      text: 'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
      size: 'sm',
      color: '#555555',
    },
    overlayMedia: true,
  },
};

export const BaseInline: Story = {
  args: {
    media: {
      ...demoMediaImage,
      imageProps: {
        src: 'https://images.unsplash.com/photo-1700981293090-f78b500fc92c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        aspectRatio: {
          base: '1/1',
        },
        alt: 'Image placeholder',
      },
      className: 'rounded-lg',
    },
    date: new Date(),
    tags: ['Sales', 'Marketing'],
    title: {
      text: 'How to use search engine optimization to drive sales',
      size: 'h6',
      tag: 'h3',
      weight: 'bold',
      color: '#212121',
    },
    excerpt: {
      text: 'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
      size: 'sm',
      color: '#555555',
    },
    align: 'start',
    justify: 'center',
    layout: 'row',
  },
};
