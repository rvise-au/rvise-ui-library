import { Button, Group } from '@mantine/core';

export const ButtonGroup = () => (
  <Group className="buttonGroup">
    <Button variant="filled" color="primary">
      Get in touch
    </Button>
    <Button variant="transparent" color="dark">
      Second
    </Button>
  </Group>
);
