import { Button } from '@mantine/core';
import cx from 'clsx';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

import classes from './Page.module.css';

export const Page = () => {
  const container = useRef(null);

  /*   const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0]);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); */
  const boxes = gsap.utils.toArray('.item');

  console.log(boxes);
  useGSAP(
    () => {
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: [1.5, 0],
          // this will animate ALL boxes
          scrollTrigger: {
            pin: true,
            trigger: '#paralax', // this will use the first box as the trigger
            scrub: true,
            start: 'top top',
            end: 2000,
            scrub: 3,
          },
        });
      });
    },
    { dependencies: [boxes], scope: container }
  );

  return (
    <div className={classes.root} ref={container}>
      <div className={classes.paralax}>
        <div className={classes.sticky}>
          <section className={classes.section}>
            <h1>
              Make your brand the <span>I’m-in-love-with-this-brand</span> brand
            </h1>
            <Button>Let's build</Button>
          </section>
          <section className={classes.parallaxItem} id="paralax">
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={cx(classes.dynamic, 'item')} />
            <div className={classes.hiddenContent}>
              <h2>About Us</h2>
            </div>
          </section>
        </div>
      </div>
      <section className={classes.section}>
        <div id="stop">Stop</div>
      </section>
    </div>
  );
};
