import { Box, Card } from '@mantine/core';
import cx from 'clsx';

import { Person } from '@ui/person';

import { IconQuote } from './IconQuote';
import styles from './index.module.css';

type TestimonialVariant = 'default' | 'accent' | 'small' | 'inline';

type TestimonialProps = {
  quoteIcon?: React.ReactNode;
  text: string;
  avatar?: string;
  author?: string;
  jobTitle?: string;
  slotAfter?: React.ReactNode;
  slotBefore?: React.ReactNode;
  radius?: string;
  shadow?: string;
  iconBgColor?: string;
  textColor?: string;
  padding?: string;
  variant?: TestimonialVariant;
  alignment?: string;
  hasQuoteIcon?: boolean;
  style?: React.CSSProperties;
  borderColor?: string;
};

export const Testimonial = ({
  quoteIcon,
  text,
  avatar,
  author,
  jobTitle,
  slotAfter,
  slotBefore,
  radius,
  shadow,
  iconBgColor,
  textColor,
  borderColor,
  padding,
  variant = 'default',
  alignment = 'left',
  hasQuoteIcon,
  style,
}: TestimonialProps) => {
  const _quote = hasQuoteIcon ? (
    quoteIcon ? (
      <>{quoteIcon}</>
    ) : (
      <Box className={styles.quoteIcon}>
        <IconQuote />
      </Box>
    )
  ) : null;

  return (
    <Card
      className={cx(styles.card, alignment && styles[alignment], variant && styles[variant])}
      p={padding}
      radius={radius === 'none' ? 0 : radius}
      shadow={shadow}
      style={{
        '--quote-icon-bg-color': iconBgColor,
        '--quote-text-color': textColor,
        '--quote-border-color': borderColor,
        ...style,
      }}
    >
      {_quote}
      <blockquote>
        {slotBefore && <Box className={styles.before}>{slotBefore}</Box>}
        <span className={styles.quote}>{text}</span>
        {slotAfter && <Box className={styles.after}>{slotAfter}</Box>}
      </blockquote>
      {(Boolean(avatar) || author) && (
        <footer className={styles.author}>
          <Person
            centered={alignment === 'center'}
            size={48}
            avatar={avatar}
            name={author}
            jobTitle={jobTitle}
            showImage
          />
        </footer>
      )}
    </Card>
  );
};
