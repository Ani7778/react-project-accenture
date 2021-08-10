import React, {useState, useRef, Component} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Navigation, Pagination, Controller, Lazy} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import classes from "./CarouselSlider.module.scss";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Slider from "react-slick";
import NextArrow from "./NextButton";
import PrevArrow from "./PreviousButton";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";
import images from "../carousel-slider/Images";
import {HiArrowNarrowLeft, HiArrowNarrowRight} from "react-icons/all";
import $ from 'jquery';

function ImageCarousel({ slides }) {
    const sliderRef = useRef();
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        sliderRef.current.slickNext();
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        sliderRef.current.slickPrev();
    }

    const chooseSlide = index => {
        setCurrent(index);
    }

    const settingsImg = {
        centerMode: true,
        className: "center",
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow next={nextSlide}/>,
        prevArrow: <PrevArrow prev={prevSlide}/>,
    }

    return (
        <>
            <Slider {...settingsImg} ref={sliderRef} translate={true}>
                {
                    slides.map((image, index) => {
                            return (
                                <div className={classes.container}>
                                    <div className={classes.carousel}>
                                        <div className={classes.img_container}>
                                            <img className={classes.img} src={image.image}
                                                 onMouseOver={() => chooseSlide(index)}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
            <div>
                {slides.map((image, index) => {
                    return (
                        <div className={index === current ? `${classes.text} ` : classes.hidden}
                             onMouseOver={() => chooseSlide(index)}>
                            <h4>{image.subject}</h4>
                            <h3>{image.title}</h3>
                            <p>{image.text}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default  ImageCarousel;
