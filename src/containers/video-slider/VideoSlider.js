import classes from "./VideoSlider.module.scss";
import React from 'react'
import { HiArrowNarrowRight, HiChevronRight, HiChevronLeft, HiChevronDown } from "react-icons/all";
import { Link } from "react-scroll";

const VideoSlider = ({ slides, currentSlide, next, prev, choose }) => {
    return (
        <div className={classes.container} >
            <div className={classes.left_btn} onClick={prev}><HiChevronLeft /></div>
            <div className={classes.right_btn} onClick={next}><span><HiChevronRight /></span></div>
            <div className={classes.down_btn} >
                <Link
                    to="voices"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    ><HiChevronDown />
                </Link>
            </div>
            {slides.map((slide, index)=> {
                return (
                    <div className={index === currentSlide ? `${classes.active} ${classes.slide}` : classes.slide}
                         key={index}>
                        {index === currentSlide && (
                            <>
                                <video width="100%" height="100%" autoPlay controls={false} loop muted>
                                    <source  src={slide.video} />
                                </video>
                                <div className={classes.text_container}>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.text}</p>
                                </div>
                                <div className={classes.button_container}>
                                    <div className={classes.circle}>
                                        <div className={classes.icon}><HiArrowNarrowRight/></div>
                                    </div>
                                    <p>{slide.message}</p>
                                </div>
                            </>
                        )}
                        {Array.from({length: 4}).map((item, index) => (
                            <div onClick={() => choose(index)}
                                 className={index === currentSlide ? `${classes.active} ${classes.dot}` : classes.dot}></div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default VideoSlider;
