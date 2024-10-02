'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
    const background = useRef(null);
    const introImage = useRef(null);
    const introText = useRef(null);
    const joinButton = useRef(null);
    const cards = useRef([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const logoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "200px", 
                scrub: true,
                pin: introImage.current, 
            },
        });

        logoTimeline.to(introImage.current, {
            scale: 0.2,
            y: -5,  
            ease: "power2.out",
            onComplete: () => {
                gsap.to(introImage.current, { className: `${styles.stickyLogo}` });
            }
        });

        const contentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "200px", 
                end: "400px",
                scrub: true,
            },
        });

        contentTimeline.fromTo(introText.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0);
        contentTimeline.fromTo(joinButton.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.5);

        const cardsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: joinButton.current, 
                start: "top+=50px center",
                end: "bottom+=200px center",
                scrub: true,
            },
        });

        cards.current.forEach((card, i) => {
            cardsTimeline.fromTo(card, { opacity: 0, x: i % 2 === 0 ? -200 : 200 }, { opacity: 1, x: 0, duration: 1 }, i * 0.2);
        });

    }, []);

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/background.svg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                <div ref={introImage} className={styles.introImage}>
                    <Image
                        src={'/images/logo.svg'}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </div>
                
                <h1 ref={introText} className={styles.introText}>Unlock Seamless <br /> Efficiency</h1>
                <button ref={joinButton} className={styles.joinButton}>Join Waitlist</button>
            </div>

            <div className={styles.cardsWrapper}>
                {[...Array(4)].map((_, i) => (
                    <div key={i} ref={el => cards.current[i] = el} className={styles.card}>
                        <h2>Card {i + 1}</h2>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
}
