import React, {useEffect} from "react";
import classes from "./BlogSection.module.scss";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {CaseStudiesImages} from "./CaseStudiesImages";

function BlogSection() {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    });

    const animateImages = useAnimation();
    const animateText = useAnimation();

    useEffect(() => {
        if (inView) {
            animateImages.start({
                height: '100%',
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
        if (!inView) {
            animateImages.start({
                height: 0,
            })
            animateText.start({
                opacity: 0,
            })
        }
    }, [inView]);

    return (
        <div className={classes.container} ref={ref}>
            {CaseStudiesImages.map((image) => (
                 <React.Fragment key={image.title}>
                    <motion.div className={image.container} animate={animateImages}>
                        <div className={classes.img_container}>
<<<<<<< HEAD
                            <img className={classes.img} src={image.src} alt=''/>
=======
                            <img className={classes.img} src={image.src}/>
>>>>>>> c95813dac96ed76e845e2be2e971f67a356dc53c
                        </div>
                        <div className={classes.text_container}>
                            <p className={classes.category_title}>{image.subject}</p>
                            <span>{image.title}</span>
                            <p className={classes.text}>{image.text}</p>
                        </div>
                    </motion.div>
                </React.Fragment>
<<<<<<< HEAD
            ))}
=======
            })}
>>>>>>> c95813dac96ed76e845e2be2e971f67a356dc53c
        </div>
    );
}

export default BlogSection;
