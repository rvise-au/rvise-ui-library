import { RadialSpot } from '../../decorations/radialSpot/RadialSpot';
import { SimpleText } from '../core/layouts/SimpleText';
import { SplitMedia } from '../core/layouts/SplitMedia';
import { Section } from '../core/Section';
import { mediaOffsetBlockMock, textBlockMock } from './mock';

export default {
  title: 'CTA Sections',
};
const Svg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      aria-hidden="true"
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fill-opacity="0.7"
      ></circle>
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stop-color="#7775D6"></stop>
          <stop offset="1" stop-color="#E935C1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export const SplitCTABanner = () => (
  <Section
    background={{
      placement: 'container',
      type: 'color',
      color: 'rgb(17, 24, 39)',
    }}
    afterContent={<Svg />}
  >
    <SplitMedia
      isOffset
      textBlock={{
        ...textBlockMock,
        children: <>{textBlockMock.children}</>,
      }}
      mediaBlock={mediaOffsetBlockMock}
    />
  </Section>
);

export const SimpleBanner = () => (
  <Section
    background={{
      placement: 'container',
      type: 'color',
      color: '#f6f6f6',
    }}
    containerProps={{
      radius: 'md',
      padding: {
        base: {
          x: 64,
          y: 82,
        },
      },
    }}
  >
    <SimpleText
      minHeight={{
        base: 520,
        md: 800,
      }}
      alignment="left/center"
      textBlock={{
        ...textBlockMock,
        heading: {
          ...textBlockMock.heading,
          size: 'h3',
        },
      }}
    />
  </Section>
);

export const SplitCenteredDecor = () => (
  <Section
    background={{
      placement: 'container',
      type: 'color',
      color: 'rgb(17, 24, 39)',
    }}
    containerSlotAfter={<RadialSpot />}
    containerProps={{
      radius: 'lg',
      padding: {
        base: {
          x: 64,
          y: 82,
        },
      },
    }}
  >
    <SimpleText
      minHeight={{
        base: 520,
        md: 800,
      }}
      alignment="center/center"
      textBlock={{
        ...textBlockMock,
        heading: {
          ...textBlockMock.heading,
          size: 'h3',
          color: '#fff',
        },
        subheading: {
          ...textBlockMock.subheading,
          color: '#fff',
          size: 'md',
        },
      }}
    />
  </Section>
);
export const SimpleCentered = () => (
  <Section
    containerProps={{
      radius: 'lg',
      padding: {
        base: {
          x: 64,
          y: 82,
        },
      },
    }}
  >
    <SimpleText
      minHeight={{
        base: 520,
        md: 800,
      }}
      alignment="center/center"
      textBlock={{
        ...textBlockMock,
        heading: {
          ...textBlockMock.heading,
          size: 'h3',
        },
        subheading: {
          ...textBlockMock.subheading,
          size: 'md',
        },
      }}
    />
  </Section>
);

export const SimpleCenteredBrand = () => (
  <Section
    background={{
      placement: 'container',
      type: 'color',
      color: 'var(--mantine-color-primary-filled)',
    }}
    containerProps={{
      padding: {
        base: {
          x: 64,
          y: 82,
        },
      },
    }}
  >
    <SimpleText
      minHeight={{
        base: 520,
        md: 800,
      }}
      alignment="center/center"
      textBlock={{
        ...textBlockMock,
        heading: {
          ...textBlockMock.heading,
          size: 'h3',
          color: '#fff',
        },
        subheading: {
          ...textBlockMock.subheading,
          color: '#fff',
          size: 'md',
        },
      }}
    />
  </Section>
);

export const SimpleJustified = () => (
  <Section
    containerProps={{
      radius: 'lg',
      padding: {
        base: {
          x: 64,
          y: 82,
        },
      },
    }}
  >
    <SimpleText
      minHeight={{
        base: 520,
        md: 800,
      }}
      alignment="left/center"
      textBlock={{
        direction: 'justify',
        width: 'sm',
        heading: {
          ...textBlockMock.heading,
          size: 'h3',
        },
        subheading: {
          ...textBlockMock.subheading,
          size: 'md',
        },
        slotAfter: textBlockMock.children,
      }}
    />
  </Section>
);
