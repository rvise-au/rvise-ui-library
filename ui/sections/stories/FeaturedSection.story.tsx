import { FeatureBox } from '../../featureBox/Box';
import { FeaturedBoxGroup } from '../../featureBox/Group';
import { Section } from '../core/Section';
import { SplitWithImage } from '../page/split/SplitWithImage';
import { featuresMock, mediaOffsetBlockMock, textBlockMock } from './mock';

export default {
  title: 'Featured Section',
};

export const SplitFeaturedOffsetImage = () => (
  <Section>
    <SplitWithImage
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
