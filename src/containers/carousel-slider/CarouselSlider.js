import React from 'react';
import classes from "./CarouselSlider.module.scss";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import 'keen-slider/keen-slider.min.css';

function ImageCarousel({slides, prev, next, choose, current, smallScreen, keenRef}) {
    return (
        <>
            {!smallScreen &&
            <div className={classes.section_container}>
                <div className={classes.row}>
                    <div className={classes.carousel}>
                        <div className={classes.zoom}>
                            <div className={classes.container}>
                                <div className={classes.images}>
                                    {slides.map((image,index) => {
                                        return (
                                            <>
                                                <div className={image.container}>
                                                    <img src={image.src} onMouseOver={() => choose(index)}/>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <PreviousButton prev={prev}/>
                                <NextButton next={next}/>
                                {slides.map((image, index) => {
                                    return (
                                        <div className={index === current ? `${classes.text} ` : classes.hidden}>
                                            <h3>{image.title}</h3>
                                            <p>{image.text}</p>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {smallScreen &&
                <>
                    <div ref={keenRef} className="keen-slider">
                        {slides.slice(0, slides.length / 2).map((image, index)=>{
                            return (
                                    <img src={image.src} className="keen-slider__slide" onMouseOver={() => choose(index)}/>
                                )
                        })}
                    </div>
                    {slides.map((image, index) => {
                        return (
                            <div className={index === current ? `${classes.text} ` : classes.hidden}>
                                <h3>{image.title}</h3>
                                <p>{image.text}</p>
                            </div>
                        )
                    })}
                    <PreviousButton prev={prev}/>
                    <NextButton next={next}/>
                </>
            }
        </>
    )
}

 export default ImageCarousel;
