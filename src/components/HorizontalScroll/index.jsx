import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styles from './style.module.css';

const images = [
  {
    src: '/images/image-1.png',
    alt: 'Image 1',
    description: {
      top: 'Fluid has Internet access, so you can get up-to-date information from it.',
      bottom: 'Time for work',
    }
  },
  {
    src: '/images/image-2.png',
    alt: 'Image 2',
    description: {
      top: 'You can use Fluid as an assistant to save time - and save your sanity.',
      bottom: 'Time for family',
    }
  },
  {
    src: '/images/image-3.png',
    alt: 'Image 3',
    description: {
      top: 'Fluid easily integrates with your friends calendars',
      bottom: 'Time for friends',
    }
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${images.length * 100}vw`, 
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${images.length * 1000} top`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.scrollSectionOuter}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          {images.map((image, index) => (
            <div key={index} className={styles.scrollSection}>
              <Image 
                src={image.src}
                fill={true}
                alt={image.alt}
                priority={true}
                className={styles.image}
              />
              <div className={styles.description}>
                <p>{image.description.top}</p>
                <h2>{image.description.bottom}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;