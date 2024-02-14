import { Testimonial } from '../index';

export default {
  title: 'Testimonial Box',
};

const MOCK_TESTIMONIALS = {
  text: 'It is said to be able to seize any prey in the ocean, this Pokémon is known as the bully of the sea',
  avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
  author: 'John Doe',
  jobTitle: 'CEO',
  slotBefore: <img src="https://tailwindui.com/img/logos/workcation-logo-white.svg" />,
};

export const Basic = () => (
  <div
    style={{
      maxWidth: '680px',
      margin: '0 auto',
      background: '#ccc',
      padding: '20px',
    }}
  >
    <Testimonial
      {...MOCK_TESTIMONIALS}
      padding="lg"
      radius="none"
      alignment="left"
      variant="inline"
      borderColor="red"
    />
  </div>
);
