import { cva } from 'class-variance-authority';
import { isValidElement, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/src/utils/classname';
import { StyledBox } from '@/ui/shared/styledBox';
import { LinkType, StyledBoxInterface } from '@/ui/types';

interface TestimonialBoxProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify'
  > {
  iconProps: {
    icon: ReactNode;
    size: 'sm' | 'md' | 'lg' | 'xl';
  };
  borderColor?: string;
  variant: 'stacked' | 'inline';
  quote: string | ReactNode;
  link?: LinkType;
  author?: string;
}
