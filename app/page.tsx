import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { ButtonGroup } from '../ui/buttons/Group';
import { LeftTopBlurSpot } from '../ui/decorations/leftTopBlurSpot/LeftTopBlurSpot';
import { RightBottomBlurSpot } from '../ui/decorations/rightBottomBlurSpot/RightBottomBlurSpot';
import { Section } from '../ui/sections/core/Section';
import { SimpleText } from '../ui/sections/core/simpleText/SimpleText';

const textBlock = {
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

const buttons = [
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

const mediaBlock = {
  type: 'image',
  imageProps: {
    src: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80',
    alt: 'Image alt text',
    quality: 85,
    fill: true,
  },
};

const mediaOffsetBlock = {
  type: 'image',
  imageProps: {
    src: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
    alt: 'Image alt text',
    quality: 85,
    width: 1340,
    height: 820,
  },
};
export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Section>
        <SimpleText
          minHeight="680px"
          alignment="center/center"
          //@ts-ignore
          textBlock={textBlock}
        />
      </Section>
      <Section
        //@ts-ignore
        beforeContent={<LeftTopBlurSpot />}
        //@ts-ignore
        afterContent={<RightBottomBlurSpot />}
      >
        <SimpleText
          minHeight="680px"
          alignment="left/center"
          //@ts-ignore
          textBlock={textBlock}
        />
      </Section>
      <Section //@ts-ignore
        beforeContent={<LeftTopBlurSpot />}
        //@ts-ignore
        afterContent={<RightBottomBlurSpot />}
      >
        <SimpleText
          minHeight="680px"
          alignment="center/center"
          //@ts-ignore
          textBlock={textBlock}
        />
      </Section>
      <Section
        background={{
          //@ts-ignore
          placement: 'section',
          type: 'color',
          color: '#fff7c7',
        }}
      >
        <SimpleText
          minHeight="680px"
          alignment="center/center"
          //@ts-ignore
          textBlock={textBlock}
        />
      </Section>
      <Section
        background={{
          overlay: 'dark',
          placement: 'section',
          type: 'image',
          imageProps: {
            src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
          },
        }}
      >
        <SimpleText
          minHeight="720px"
          alignment="center/center"
          textBlock={{
            ...textBlock,
            heading: {
              ...textBlock.heading,
              color: '#ffffff',
            },
            subheading: {
              ...textBlock.subheading,
              color: '#ddd',
            },
          }}
        />
      </Section>
      <Section
        background={{
          overlay: 'lighter',
          placement: 'section',
          type: 'video',
          videoProps: {
            sourceType: 'mp4',
            videoUrl:
              'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
            loop: true,
            autoplay: true,
            muted: true,
          },
        }}
      >
        <SimpleText minHeight="680px" alignment="center/center" textBlock={textBlock} />
      </Section>
    </>
  );
}
