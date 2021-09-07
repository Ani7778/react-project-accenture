import React, {useEffect} from "react";
import classes from "./BlogPosts.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import BlogSection from "./blog-section/BlogSection";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

function BlogPosts() {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const animateHeading = useAnimation();
    const animateText = useAnimation();
    const animateBorder = useAnimation();
    const animateSection = useAnimation();

    useEffect(()=> {
        if(inView) {
            animateHeading.start({
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            })
            animateText.start({
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            })
            animateBorder.start({
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            })
            animateSection.start({
                opacity: 1,
                transition: {
                    duration: 1.5
                }
            })
        }
        if(!inView) {
            animateHeading.start({
                opacity: 0,
            })
            animateText.start({
                opacity: 0,
            })
            animateBorder.start({
                opacity: 0,
            })
            animateSection.start({
                opacity: 0,
            })
        }
    })
    return (
        <div className={classes.container} id="voices" ref={ref}>
            <motion.h1 className={classes.heading} animate={animateHeading}>Case studies</motion.h1>
            <motion.div className={classes.border} animate={animateBorder}></motion.div>
            <div className={classes.text} >
                <motion.span animate={animateText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</motion.span>
            </div>
            <motion.div animate={animateSection}>
                <BlogSection />
            </motion.div>
        </div>
    );
}

export default BlogPosts;
