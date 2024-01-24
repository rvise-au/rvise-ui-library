import { TbCookie, TbGauge, TbLock, TbUser } from 'react-icons/tb';

import { ButtonGroup } from '../../buttons/Group';
import { LeftTopBlurSpot } from '../../decorations/leftTopBlurSpot/LeftTopBlurSpot';
import { RightBottomBlurSpot } from '../../decorations/rightBottomBlurSpot/RightBottomBlurSpot';
import { FeatureBox } from '../../featureBox/Box';
import { FeaturedBoxGroup } from '../../featureBox/Group';
import { SimpleText } from '../core/layouts/SimpleText';
import { Section } from '../core/Section';

const svg =
  '<svg viewBox="0 0 366 729" role="img" class="gx sr ub bed"><title>App screenshot</title><defs><clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332"><rect width="316" height="684" rx="36"></rect></clipPath></defs><path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"></path><path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"></path><foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"><img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png" alt=""></foreignObject></svg>';
export default {
  title: 'Hero Section',
};

const MOCKDATA = [
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

export const SimpleHero = () => (
  <Section>
    <SimpleText
      minHeight={{
        base: 680,
      }}
      alignment="center/center"
      textBlock={textBlock}
    />
  </Section>
);

export const SimpleHeroWithAddon = () => (
  <Section>
    <SimpleText
      minHeight={{
        base: 'min-content',
      }}
      alignment="center/center"
      textBlock={textBlock}
    >
      <FeaturedBoxGroup
        cols={{
          base: 1,
          xs: 2,
        }}
        verticalSpacing={32}
        style={{
          maxWidth: 980,
          margin: '4rem auto 0',
        }}
      >
        {MOCKDATA.map((item, index) => (
          <FeatureBox
            key={index}
            iconSize={28}
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            iconBackgroundColor="green"
            iconVariant="filled"
            iconRadius="sm"
          />
        ))}
      </FeaturedBoxGroup>
    </SimpleText>
  </Section>
);

export const SimpleHeroWithAddonNoContainer = () => (
  <Section
    renderChildren={() => (
      <SimpleText
        minHeight={{
          base: 'min-content',
        }}
        alignment="center/center"
        textBlock={textBlock}
      >
        <FeaturedBoxGroup
          cols={{
            base: 1,
            xs: 2,
          }}
          verticalSpacing={32}
          style={{
            maxWidth: 980,
            margin: '4rem auto 0',
          }}
        >
          {MOCKDATA.map((item, index) => (
            <FeatureBox
              key={index}
              iconSize={28}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
              iconBackgroundColor="green"
              iconVariant="filled"
              iconRadius="sm"
            />
          ))}
        </FeaturedBoxGroup>
      </SimpleText>
    )}
  />
);

export const SimpleHerWithBgLeftAligned = () => (
  <Section
    beforeContent={<LeftTopBlurSpot />}
    afterContent={<RightBottomBlurSpot />}
    marginBottom="xl"
    background={{
      placement: 'section',
      type: 'color',
      color: '#f3f4f6',
    }}
  >
    <SimpleText
      alignment="center/center"
      textBlock={textBlock}
      hasDecoration
      radius="md"
      shadow="lg"
      minHeight={{
        base: 690,
      }}
      background={{
        type: 'color',
        color: 'linear-gradient(90deg, #f3f4f6 0%, #f3f4f6 50%, #ffffff 50%, #ffffff 100%)',
      }}
      styles={{
        border: '1px solid #777',
      }}
    />
  </Section>
);

export const SimpleHeroWithDecorators = () => (
  <Section beforeContent={<LeftTopBlurSpot />} afterContent={<RightBottomBlurSpot />}>
    <SimpleText minHeight="680px" alignment="center/center" textBlock={textBlock} />
  </Section>
);

export const SimpleHeroWithColorBg = () => (
  <Section
    background={{
      placement: 'section',
      type: 'color',
      color: '#fff7c7',
    }}
  >
    <SimpleText minHeight="680px" alignment="center/center" textBlock={textBlock} />
  </Section>
);

export const SimpleHeroWithBackgroundImage = () => (
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
);

export const SimpleHeroWithVideo = () => (
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
);

/* 
export const SplitWithImageDefault = () => (
  <Section>
    <SplitWithImage
      columns={[7, 5]}
      textBlock={textBlock}
      mediaBlock={{
        ...mediaBlock,
        imageProps: {
          ...mediaBlock.imageProps,
          src: 'https://tailwindui.com/img/component-images/mobile-app-screenshot.png',
          objectFit: 'contain',
          fill: true,
        },
      }}
    />
  </Section>
);

export const SplitWithImageFull = () => (
  <Section>
    <SplitWithImage
      isFull
      textBlock={textBlock}
      mediaBlock={{
        ...mediaBlock,
        imageProps: {
          ...mediaBlock.imageProps,
          objectFit: 'cover',
        },
      }}
    />
  </Section>
);
export const SplitWithImageOffset = () => (
  <Section>
    <SplitWithImage isOffset textBlock={textBlock} mediaBlock={mediaOffsetBlock} />
  </Section>
);

export const SplitWithImageAngled = () => (
  <Section>
    <SplitWithImage
      columns={[6, 6]}
      isAngled
      isFull
      textBlock={textBlock}
      mediaBlock={{
        ...mediaBlock,
        imageProps: {
          ...mediaBlock.imageProps,
          objectFit: 'cover',
        },
      }}
    />
  </Section>
);
 */
