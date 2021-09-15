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

    const animateSection = useAnimation();

    useEffect(()=> {
        if(inView) {
            animateSection.start({
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
        }
        if(!inView) {
            animateSection.start({
                opacity: 0,
            })
        }
    }, [inView]);

    return (
        <div className={classes.container} ref={ref} id="services" >
            <motion.h1 className={classes.heading} animate={animateSection}>Services</motion.h1>
            <div className={classes.border}/>
            <CarouselSlider animate={animateSection}/>
        </div>
    );
}

export default CaseStudies;
