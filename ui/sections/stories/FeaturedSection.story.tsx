import { Media } from '@ui/media/Media';

import { FeatureBox } from '../../featureBox/Box';
import { FeaturedBoxGroup } from '../../featureBox/Group';
import { Testimonial } from '../../testimonial';
import { SimpleText } from '../core/layouts/SimpleText';
import { Split } from '../core/layouts/Split';
import { SplitMedia } from '../core/layouts/SplitMedia';
import { Section } from '../core/Section';
import { featuresMock, mediaOffsetBlockMock, textBlockMock } from './mock';

export default {
  title: 'Featured Section',
};

export const SplitFeaturedWithOffsetImage = () => (
  <Section>
    <SplitMedia
      isOffset
      textBlock={{
        ...textBlockMock,
        children: (
          <>
            <FeaturedBoxGroup
              cols={{
                base: 1,
                xs: 1,
              }}
              margins={{
                lg: '35px 0',
                md: '24px 0',
                sm: '20px 0',
              }}
              verticalSpacing={32}
              style={{
                maxWidth: 980,
              }}
            >
              {featuresMock.map((item, index) => (
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
            {textBlockMock.children}
          </>
        ),
      }}
      mediaBlock={mediaOffsetBlockMock}
    />
  </Section>
);

export const FeaturedOffset = () => (
  <Section>
    <Split
      columns={[4, 7]}
      textBlock={{
        ...textBlockMock,
      }}
    >
      <FeaturedBoxGroup
        cols={{
          base: 2,
          xs: 2,
        }}
        margins={{
          lg: '35px 0',
          md: '24px 0',
          sm: '20px 0',
        }}
        verticalSpacing={32}
        style={{
          maxWidth: 980,
        }}
      >
        {featuresMock.map((item, index) => (
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
    </Split>
  </Section>
);

export const StackedCenteredWith2x2Grid = () => (
  <Section>
    <SimpleText
      isOffset
      textBlock={{
        label: {
          text: 'Data to enrich your online business',
          size: 'lg',
          weight: 600,
          color: 'cyan',
        },
        ...textBlockMock,
      }}
    >
      <FeaturedBoxGroup
        cols={{
          base: 2,
          xs: 2,
        }}
        margins={{
          lg: '6rem 0 0',
          md: '4rem 0',
          sm: '2rem 0',
        }}
        verticalSpacing={32}
        style={{
          maxWidth: 980,
        }}
      >
        {featuresMock.map((item, index) => (
          <FeatureBox
            key={index}
            iconSize={38}
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

export const StackedWithImageAnd3x3Grid = () => (
  <Section>
    <SimpleText
      isOffset
      textBlock={{
        label: {
          text: 'Data to enrich your online business',
          size: 'lg',
          weight: 600,
          color: 'cyan',
        },
        ...textBlockMock,
      }}
    >
      <Media radius="20px" {...mediaOffsetBlockMock} fade fill />
      <FeaturedBoxGroup
        cols={{
          base: 3,
          xs: 3,
        }}
        margins={{
          lg: '1rem 0 0',
          md: '1rem 0 0',
          sm: '1rem 0 0',
        }}
        verticalSpacing={32}
        spacing={48}
      >
        {featuresMock.map((item, index) => (
          <FeatureBox
            key={index}
            iconSize={38}
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

export const StackedSimple3ColumnsSmallIcons = () => (
  <Section>
    <SimpleText
      isOffset
      textBlock={{
        label: {
          text: 'Data to enrich your online business',
          size: 'lg',
          weight: 600,
          color: 'cyan',
        },
        ...textBlockMock,
      }}
    >
      <FeaturedBoxGroup
        cols={{
          base: 3,
          xs: 3,
        }}
        margins={{
          lg: '1rem 0 0',
          md: '1rem 0 0',
          sm: '1rem 0 0',
        }}
        verticalSpacing={32}
        spacing={48}
      >
        {featuresMock.map((item, index) => (
          <FeatureBox
            key={index}
            iconSize={38}
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            iconBackgroundColor="green"
            iconVariant="filled"
            iconRadius="sm"
            linkProps={{
              href: '#',
              variant: 'transparent',
            }}
          />
        ))}
      </FeaturedBoxGroup>
    </SimpleText>
  </Section>
);

export const StackedSimple3ColumnsTopIcons = () => (
  <Section>
    <SplitMedia
      isOffset
      columns={[7, 5]}
      textBlock={{
        ...textBlockMock,
        children: (
          <>
            <FeaturedBoxGroup
              cols={{
                base: 1,
                xs: 2,
              }}
              margins={{
                lg: '35px 0',
                md: '24px 0',
                sm: '20px 0',
              }}
              verticalSpacing={32}
              style={{
                maxWidth: 980,
              }}
            >
              {featuresMock.map((item, index) => (
                <FeatureBox
                  key={index}
                  iconSize={44}
                  icon={item.icon}
                  heading={item.heading}
                  text={item.text}
                  layout="stacked"
                  iconBackgroundColor="green"
                  iconVariant="filled"
                  iconRadius="sm"
                />
              ))}
            </FeaturedBoxGroup>
            {textBlockMock.children}
          </>
        ),
      }}
      mediaBlock={mediaOffsetBlockMock}
    />
  </Section>
);

export const SplitAsBannerWithOffsetImage = () => (
  <Section
    background={{
      placement: 'container',
      type: 'color',
      color: '#f5f5f5',
    }}
    containerProps={{
      radius: 'xl',
      hasDecoration: true,
      padding: {
        base: '20px 0',
        md: '60px',
        lg: {
          x: 60,
          y: 80,
        },
      },
    }}
  >
    <SplitMedia
      isOffset
      textBlockProps={{
        hasDecoration: true,
        padding: {
          base: {
            x: 20,
            y: 20,
          },
        },
      }}
      textBlock={{
        ...textBlockMock,
        children: (
          <>
            <FeaturedBoxGroup
              cols={{
                base: 1,
                xs: 1,
              }}
              margins={{
                lg: '35px 0',
                md: '24px 0',
                sm: '20px 0',
              }}
              verticalSpacing={32}
              style={{
                maxWidth: 980,
              }}
            >
              {featuresMock.map((item, index) => (
                <FeatureBox
                  key={index}
                  iconSize={28}
                  icon={item.icon}
                  heading={item.heading}
                  text={item.text}
                  iconBackgroundColor="green"
                  iconVariant="filled"
                  iconRadius="sm"
                  variant="transparent"
                />
              ))}
            </FeaturedBoxGroup>
            {textBlockMock.children}
          </>
        ),
      }}
      mediaBlock={mediaOffsetBlockMock}
    />
  </Section>
);

export const SplitWithImage = () => (
  <Section>
    <SplitMedia
      textBlock={{
        ...textBlockMock,
        children: (
          <>
            <FeaturedBoxGroup
              cols={{
                base: 1,
                xs: 1,
              }}
              margins={{
                lg: '35px 0',
                md: '24px 0',
                sm: '20px 0',
              }}
              verticalSpacing={32}
              style={{
                maxWidth: 980,
              }}
            >
              {featuresMock.map((item, index) => (
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
            {textBlockMock.children}
          </>
        ),
      }}
      mediaBlock={{
        ...mediaOffsetBlockMock,
        imageProps: {
          ...mediaOffsetBlockMock.imageProps,
          objectFit: 'contain',
          fill: false,
          src: 'https://usesmash.com/images/full-preview/group-38.png',
        },
      }}
    />
  </Section>
);

const MOCK_TESTIMONIALS = {
  text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
  avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
  author: 'John Doe',
  jobTitle: 'CEO',
};

export const SplitWithImageAndTestimonial = () => (
  <Section>
    <SplitMedia
      isOffset
      textBlock={{
        ...textBlockMock,
        children: (
          <>
            {textBlockMock.children}
            <Testimonial
              {...MOCK_TESTIMONIALS}
              variant="inline"
              style={{
                marginTop: '2rem',
              }}
              radius="none"
              borderColor="#cdcdcd"
            />
          </>
        ),
      }}
      mediaBlock={mediaOffsetBlockMock}
    />
  </Section>
);
