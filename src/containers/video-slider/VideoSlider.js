import classes from "./VideoSlider.module.css";
import React, { useEffect } from 'react'
import { HiArrowNarrowRight, HiChevronRight, HiChevronLeft, HiChevronDown } from "react-icons/all";
import { Slides } from "../video-slider/Videos";

const VideoSlider = ({slides}) => {
    const [current, setCurrent] = React.useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const chooseSlide = index => {
        setCurrent(index);
    }

   useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                return prev + 1 === slides.length ? 0 : prev + 1;
            });
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.left_btn} onClick={prevSlide}><HiChevronLeft /></div>
            <div className={classes.right_btn} onClick={nextSlide}><span><HiChevronRight /></span></div>
            <div className={classes.down_btn} ><span><HiChevronDown /></span></div>
            {Slides.map((slide, index)=> {
                return (
                    <div className={index === current ? `${classes.active} ${classes.slide}` : classes.slide}
                         key={index}>
                        {index === current && (
                            <>
                                <video width="100%" height="100%" autoPlay controls={false} loop muted>
                                    <source  src={slide.video} />
                                </video>
                                {/*<ReactPlayer url={slide.video} width="100%" height="100%"*/}
                                {/*             loop muted interval={4000} autoPlay controls={false}*/}
                                {/*             playing*/}
                                {/*/>*/}
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
                            <div onClick={() => chooseSlide(index)}
                                 className={index === current ? `${classes.active} ${classes.dot}` : classes.dot}></div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default VideoSlider;
