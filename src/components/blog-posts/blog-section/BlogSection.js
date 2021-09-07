import React, {useEffect} from "react";
import classes from "./BlogSection.module.scss";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {CaseStudiesImages} from "./CaseStudiesImages";

function BlogSection() {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const animateImages = useAnimation();

    useEffect(() => {
        if (inView) {
            animateImages.start({
                height: 600,
                transition: {
                    duration: 1.5
                }
            })
        }
        if (!inView) {
            animateImages.start({
                height: 0,
            })
        }
    }, [inView]);

    return (
        <div className={classes.container} ref={ref}>
            {CaseStudiesImages.map((image) => (
                <React.Fragment key={image.title}>
                    <motion.div className={image.container} animate={animateImages}>
                        <div className={classes.img_container}>
                            <img className={classes.img} src={image.src}/>
                        </div>
                        <div className={classes.text_container}>
                            <p className={classes.category_title}>{image.subject}</p>
                            <span>{image.title}</span>
                            <p className={classes.text}>{image.text}</p>
                        </div>
                    </motion.div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default BlogSection;
