import React from 'react';
import classes from "./CarouselSlider.module.scss";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

function ImageCarousel({slides, prev, next, choose, current}) {
    return (
        <>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

 export default ImageCarousel;
