import type { Metadata } from 'next';

import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import Features from '~/components/widgets/Features';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Steps from '~/components/widgets/Steps';
import Team from '~/components/widgets/Team';
import Testimonials from '~/components/widgets/Testimonials';
import { SITE } from '~/config.js';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

import { ButtonGroup } from '@/ui/components/buttons/Group';
import { Headline } from '@/ui/components/headline';
import { Media } from '@/ui/components/media/Media';
import { SectionWrapper } from '@/ui/shared/SectionWrapper';
import { Split } from '@/ui/shared/Split';
import { StyledBox } from '@/ui/shared/styledBox';

import SocialProof from '../src/components/widgets/SocialProof';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
      <SectionWrapper
        sectionProps={{
          minHeight: '60vh',
          background: {
            type: 'image',
            imageProps: {
              src: 'https://preline.co/assets/svg/examples/squared-bg-element.svg',
              objectFit: 'none',
            },
          },
        }}
      >
        <StyledBox
          className="gap-16"
          align="center"
          justify="center"
          border="sm"
          padding={{
            base: 10,
          }}
          paddingDirection="xy"
        >
          <Headline
            align="center"
            justify="center"
            label={{
              size: 'sm',
              tag: 'span',
              weight: 'light',
              text: 'Welcome to our website',
            }}
            heading={{
              size: 'h1',
              tag: 'h1',
              weight: 'bold',
              text: 'Your digital transformation begins here',
            }}
            subheading={{
              tag: 'p',
              weight: 'light',
              text: 'Over the years, numerous theories and speculations have arisen regarding the existence and fate of Atlantis.',
            }}
            slotAfter={
              <ButtonGroup
                className="mt-6"
                settings={{
                  layout: 'inline',
                }}
                buttons={[
                  {
                    _key: '1',
                    link: {
                      href: '/about',
                      title: 'Learn more',
                    },
                    size: 'default',
                    variant: 'default',
                    radius: 'lg',
                  },
                  {
                    _key: '2',
                    link: {
                      href: '/contact',
                      title: 'Contact us',
                    },
                    size: 'default',
                    variant: 'secondary',
                    radius: 'lg',
                  },
                ]}
              />
            }
          />
          <Media
            fade
            radius="lg"
            type="image"
            imageProps={{
              desktopSrc:
                'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              src: 'https://images.unsplash.com/photo-1654375415172-c3dc85b946f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              alt: 'Hero image',

              aspectRatio: {
                base: '16/9',
              },
            }}
          />
        </StyledBox>
      </SectionWrapper>
      <SectionWrapper
        sectionProps={{
          minHeight: '60vh',
          background: {
            type: 'image',
            imageProps: {
              src: 'https://preline.co/assets/svg/examples/squared-bg-element.svg',
              objectFit: 'none',
            },
          },
        }}
      >
        <Split
          left={
            <Headline
              align="start"
              justify="center"
              padding={{
                md: 20,
              }}
              paddingDirection="x"
              label={{
                size: 'sm',
                tag: 'span',
                weight: 'light',
                text: 'Welcome to our website',
              }}
              heading={{
                size: 'h1',
                tag: 'h1',
                weight: 'bold',
                text: 'Your digital transformation begins here',
              }}
              subheading={{
                tag: 'p',
                weight: 'light',
                text: 'Over the years, numerous theories and speculations have arisen regarding the existence and fate of Atlantis.',
              }}
              slotAfter={
                <ButtonGroup
                  className="mt-6"
                  settings={{
                    layout: 'inline',
                  }}
                  buttons={[
                    {
                      _key: '1',
                      link: {
                        href: '/about',
                        title: 'Learn more',
                      },
                      size: 'default',
                      variant: 'default',
                      radius: 'lg',
                    },
                    {
                      _key: '2',
                      link: {
                        href: '/contact',
                        title: 'Contact us',
                      },
                      size: 'default',
                      variant: 'secondary',
                      radius: 'lg',
                    },
                  ]}
                />
              }
            />
          }
          right={
            <Media
              radius="lg"
              type="image"
              imageProps={{
                desktopSrc:
                  'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                src: 'https://images.unsplash.com/photo-1654375415172-c3dc85b946f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'Hero image',

                aspectRatio: {
                  base: '1/1',
                },
              }}
            />
          }
        />
      </SectionWrapper>
    </>
  );
}
