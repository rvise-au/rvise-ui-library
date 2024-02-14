import { StatGroup } from '../StatGroup';
import { StatItem } from '../StatItem';

export default {
  title: 'Stats Box',
};

const mockStat = {
  align: 'left',
  size: 'sm',
  title: '1,248 Orders',
  text: 'Last 30 days',
};

const groupMock = [
  {
    align: 'center',
    size: 'lg',
    title: '1,248 Orders',
    text: 'Last 30 days',
  },
  {
    align: 'center',
    size: 'lg',
    title: '1,248 Orders',
    text: 'Last 30 days',
  },
  {
    align: 'center',
    size: 'lg',
    title: '1,248 Orders',
    text: 'Last 30 days',
  },
];

export const Default = () => {
  return <StatItem {...mockStat} radius={0} />;
};

export const Group = () => {
  return (
    <StatGroup
      gridProps={{
        cols: 12,
        gutter: 24,
      }}
      colProps={{
        span: 4,
      }}
      items={groupMock}
    />
  );
};
