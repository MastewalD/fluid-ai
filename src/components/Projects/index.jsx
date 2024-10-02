import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Fluid AI: Simplify, Organize, and Achieve More",
        description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Fluid AI: Simplify, Organize, and Achieve More",
        description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Fluid AI: Simplify, Organize, and Achieve More",
        description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.",
        src: "miscani_lake.jpeg"
    },
    {
        title: "Fluid AI: Simplify, Organize, and Achieve More",
        description: " In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.",
        src: "miscani_lake.jpeg"
    },
];

export default function Index() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const sections = gsap.utils.toArray('.text-section');
        
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%",
                end: "bottom 20%",
                onEnter: () => setSelectedProject(index),
            });
        });

        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        });
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div ref={imageContainer} className={styles.imageContainer}>
                <Image 
                    src='/images/iPhone.svg'
                    fill={true}
                    alt="project image"
                    priority={true}
                />
            </div>
            <div className={styles.textContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.textSection} text-section`} style={{ position: 'relative', height: '80vh' }}>
                        <div className={`${styles.text} ${index % 2 === 0 ? styles.right : styles.left}`}>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}