import React, {useEffect} from "react";
import classes from "./CaseStudies.module.scss";
import CarouselSlider from "./CarouselSlider";
import { useInView } from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

function CaseStudies() {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const animateHeading = useAnimation();

    useEffect(()=> {
        if(inView) {
            animateHeading.start({
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
        }
    }, [inView]);

    return (
        <div className={classes.container} ref={ref} id="services">
            <motion.h1 className={classes.heading} animate={animateHeading}>Services</motion.h1>
            <div className={classes.border}/>
            <CarouselSlider />
        </div>
    );
}

export default CaseStudies;
