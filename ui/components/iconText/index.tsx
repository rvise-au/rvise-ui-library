import { cn } from '@/utils/classname';

export const IconText = ({ component, icon, text, textClassName, iconClassName, className }) => {
  const Component = component || 'span';
  return (
    <Component className={cn('flex flex-row items-start gap-2', className)}>
      <span className={cn('text-green-500', iconClassName)}>{icon}</span>
      <span className={cn('text-gray-600', textClassName)}>{text}</span>
    </Component>
  );
};
