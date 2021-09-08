import React, {useEffect} from "react";
import classes from "./BlogSection.module.scss";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import { CaseStudiesImages } from "./CaseStudiesImages";

function BlogSection() {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    const animateImages = useAnimation();
    const animateText = useAnimation();

    useEffect(()=> {
        if(inView) {
            animateImages.start({
                height: 280,
                transition: {
                    duration: 1
                }
            })
            animateText.start({
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
        }
        if(!inView) {
            animateImages.start({
                height: 0,
            })
            animateText.start({
                opacity: 0,
            })
        }
    }, [inView])

    return (
        <div className={classes.container} ref={ref}>
            {CaseStudiesImages.map((image)=>{
                return (
                    <div className={image.container} >
                        <motion.div className={classes.img_container} animate={animateImages}>
                            <img className={classes.img} src={image.src}/>
                        </motion.div>
                        <motion.div className={classes.text_container} animate={animateText}>
                            <p className={classes.category_title}>{image.subject}</p>
                            <span>{image.title}</span>
                            <p className={classes.text}>{image.text}</p>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogSection;
