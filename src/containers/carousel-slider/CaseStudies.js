import React, {useEffect} from "react";
import classes from "./CaseStudies.module.scss";
import CarouselSlider from "./CarouselSlider";
import { Images } from "../carousel-slider/Images";
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
    })

    return (
        <div className={classes.container} ref={ref}>
            <motion.h1 className={classes.heading} animate={animateHeading}>Services</motion.h1>
            <div className={classes.border}></div>
            <CarouselSlider slides={Images}/>
        </div>
    );
};

export default CaseStudies;
