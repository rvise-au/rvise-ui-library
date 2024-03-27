import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';

import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass }: WrapperTagProps) => (
  <section className="relative not-prose scroll-mt-[72px]" id={id}>
    <Background hasBackground={hasBackground} />
    <div className={twMerge('relative container')}>{children}</div>
  </section>
);

export default WidgetWrapper;
