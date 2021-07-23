import { Images } from "../carousel-slider/Images";
import React from "react";
import classes from "../carousel-slider/CarouselSlider.module.css";
import Slider from "react-slick";


function ImageCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings}>
            {
                 Images.map((image, index) => {
                     return (
                        <div className={classes.container}>
                            <img className={classes.img} src={image.image}/>
                            <div className={classes.text_container}>
                                <h3>{image.title}</h3>
                                <p>{image.text}</p>
                            </div>
                        </div>
                     )})}
        </Slider>
    )
}

export default  ImageCarousel;
