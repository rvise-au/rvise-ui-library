import { TbCookie, TbGauge, TbLock, TbMessage2, TbUser } from 'react-icons/tb';

import { FeatureBox } from '../Box';
import { FeaturedBoxGroup } from '../Group';

export default {
  title: 'Feature Box',
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
  {
    icon: TbMessage2,
    heading: {
      text: '24/7 Support',
      size: 'lg',
      weight: 600,
    },
    text: {
      text: 'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
      size: 'sm',
      color: 'dimmed',
    },
  },
];

export const Basic = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      iconSize={32}
      icon={TbGauge}
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const BasicWithIconBackground = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      iconSize={42}
      iconRadius="sm"
      icon={TbGauge}
      iconColor="white"
      iconBackgroundColor="green"
      iconVariant="filled"
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const BasicWithIconStacked = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      iconSize={38}
      iconRadius="sm"
      icon={TbGauge}
      iconColor="white"
      iconBackgroundColor="green"
      iconVariant="filled"
      layout="stacked"
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const BasicWithIconBeforeHeading = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      iconSize={28}
      iconRadius="sm"
      icon={TbGauge}
      iconColor="green"
      layout="beforeTitle"
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const BasicWithIconWithBackground = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      backgroundColor="#f1f1f1"
      iconSize={38}
      iconRadius="sm"
      icon={TbGauge}
      iconColor="white"
      boxShadow="sm"
      iconBackgroundColor="green"
      iconVariant="filled"
      variant="filled"
      layout="stacked"
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const BasicWithIconWithBackgroundInline = () => (
  <div
    style={{
      maxWidth: '480px',
      margin: '0 auto',
    }}
  >
    <FeatureBox
      backgroundColor="#f1f1f1"
      iconSize={28}
      iconRadius="sm"
      icon={TbGauge}
      boxShadow="sm"
      variant="filled"
      layout="inline"
      heading={{
        text: 'Extreme performance',
        size: 'lg',
        weight: 600,
      }}
      text={{
        text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
        size: 'sm',
        color: 'dimmed',
      }}
    />
  </div>
);

export const FeaturedBoxGroupBasic = () => (
  <div
    style={{
      maxWidth: '1240px',
      margin: '0 auto',
    }}
  >
    <FeaturedBoxGroup
      cols={{
        base: 1,
        xs: 2,
      }}
      verticalSpacing={32}
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
  </div>
);
