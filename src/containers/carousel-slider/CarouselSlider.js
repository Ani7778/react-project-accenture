import React, {useCallback, useRef, useState} from 'react';
import classes from "./CarouselSlider.module.scss";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import 'keen-slider/keen-slider.min.css';
import {Images} from "./Images";
import useMediaQuery from "use-mediaquery";
import {useKeenSlider} from "keen-slider/react";

function ImageCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carousel = document.getElementsByClassName(classes.images);
    let currentDegree = useRef(0);
    const imagesArr = useRef(Images);
    const slides = imagesArr.current;
    const length = imagesArr.current.length;

    let screenIsSmall = useMediaQuery('(max-width: 720px)');
    const [sliderRef, slider] = useKeenSlider({slidesPerView: 3, loop: true, centered: true});

    const nextSlide = useCallback(() => {
        if (!screenIsSmall) {
            currentDegree.current += 20;
            carousel[0].style.transform = "translateZ(972px)";
            carousel[0].style.transform += "rotateY(" + currentDegree.current + "deg)";
        }
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
        slider.next();
    }, [slider, currentSlide]);

    const prevSlide = useCallback(() => {
        if (!screenIsSmall) {
            currentDegree.current -= 20;
            carousel[0].style.transform = "translateZ(972px)";
            carousel[0].style.transform += "rotateY(" + currentDegree.current + "deg)";
        }
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
        slider.prev();
    }, [slider, currentSlide]);

    return (
        <>
            {!screenIsSmall && (
                <div className={classes.section_container}>
                    <div className={classes.row}>
                        <div className={classes.carousel}>
                            <div className={classes.zoom}>
                                <div className={classes.container}>
                                    <div className={classes.images}>
                                        {slides.map((image, index) => (
                                            <div className={image.container} key={image.title + image.container}>
                                                <img src={image.src} onMouseOver={() => setCurrentSlide(index)} alt=""/>
                                            </div>
                                        ))}
                                    </div>
                                    <PreviousButton prev={prevSlide}/>
                                    <NextButton next={nextSlide}/>
                                    {slides.map((image, index) => (
                                        <div className={index === currentSlide ? `${classes.text} ` : classes.hidden}
                                             key={image.title + image.container}>
                                            <h3>{image.title}</h3>
                                            <p>{image.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {screenIsSmall && (
                <>
                    <div ref={sliderRef} className="keen-slider">
                        {slides.slice(0, slides.length / 2).map((image, index) => (
                            <img src={image.src} className="keen-slider__slide" key={image.title + image.container}
                                 onMouseOver={() => setCurrentSlide(index)} alt=""/>
                        ))}
                    </div>
                    {slides.map((image, index) => (
                        <div className={index === currentSlide ? `${classes.text} ` : classes.hidden}
                             key={image.title + image.container}>
                            <h3>{image.title}</h3>
                            <p>{image.text}</p>
                        </div>
                    ))}
                    <PreviousButton prev={prevSlide}/>
                    <NextButton next={nextSlide}/>
                </>
            )}
        </>
    )
}

export default ImageCarousel;
