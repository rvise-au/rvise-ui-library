import { Avatar, Group, Text } from '@mantine/core';
import cx from 'clsx';

import classes from './index.module.css';

export const Person = ({ avatar, name, email, jobTitle, size, showImage, centered }) => (
  <Group gap="sm" className={cx(classes.root, centered && classes.centered)}>
    {avatar && <Avatar size={40} src={avatar} radius={40} className={classes.img} />}
    <span className={classes.meta}>
      {name && (
        <Text component="span" className={classes.name}>
          {name}
        </Text>
      )}
      {email && (
        <Text c="dimmed" component="span" className={classes.email}>
          {email}
        </Text>
      )}
      {jobTitle && (
        <Text c="dimmed" component="span" className={classes.job}>
          {jobTitle}
        </Text>
      )}
    </span>
  </Group>
);

Person.displayName = 'Person';
