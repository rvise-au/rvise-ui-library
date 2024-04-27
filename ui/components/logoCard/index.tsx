import { Card } from '@/ui/components/card';
import { Image } from '@/ui/components/media/Image';
import { ImageProps, LinkType, StyledBoxInterface } from '@/ui/types';

interface LogoCardProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify' | 'align'
  > {
  link?: LinkType;
  image: ImageProps;
}

export const LogoCard = ({ image, ...rest }: LogoCardProps) => {
  if (!image?.src) return null;

  return (
    <Card {...rest}>
      <Image {...image} />
    </Card>
  );
};
