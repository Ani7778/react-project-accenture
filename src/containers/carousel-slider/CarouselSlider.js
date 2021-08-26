import React, {useRef, useState} from 'react';
import classes from "./CarouselSlider.module.scss";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";
import slide5 from "../../images/slide5.png";
import slide6 from "../../images/slide6.png";
import slide7 from "../../images/slide7.png";
import slide8 from "../../images/slide8.png";
import slide9 from "../../images/slide9.png";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";


const images = [
    {
        src: slide1,
        container: classes.img_container_1 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide2,
        container: classes.img_container_2 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide3,
        container: classes.img_container_3 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide4,
        container: classes.img_container_4 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide5,
        container: classes.img_container_5 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide6,
        container: classes.img_container_6 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide7,
        container: classes.img_container_7 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide8,
        container: classes.img_container_8 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide9,
        container: classes.img_container_9 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide1,
        container: classes.img_container_10 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide2,
        container: classes.img_container_11 + " " + classes.img_container,
        image: classes.carousel_img
    },
    {
        src: slide3,
        container: classes.img_container_12 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide4,
        container: classes.img_container_13 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide5,
        container: classes.img_container_14 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide6,
        container: classes.img_container_15 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide7,
        container: classes.img_container_16 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide8,
        container: classes.img_container_17 + " " + classes.img_container,
        image: classes.carousel_img
    },{
        src: slide9,
        container: classes.img_container_18 + " " + classes.img_container,
        image: classes.carousel_img
    }
]

function ImageCarousel({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const carousel = document.getElementsByClassName(classes.images);
    let currentDegree = useRef(0);

    const nextSlide = ()=> {
        currentDegree.current += 20;
        carousel[0].style.transform = "translateZ(972px)";
        carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = ()=> {
        currentDegree.current += -20;
        carousel[0].style.transform = "translateZ(972px)";
        carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const chooseSlide = index => {
        setCurrent(index);
    }

    return (
        <>
        <div className={`${classes.section_container} ${classes.section_container_8}`}>
            <div className={classes.row}>
                <div className={classes.carousel}>
                    <div className={classes.zoom}>
                        <div className={classes.container}>
                            <div className={classes.images}>
                                {images.map((image,index) => {
                                    return (
                                        <div className={image.container}>
                                            <img src={image.src} className={image.image} onMouseOver={() => chooseSlide(index)}/>
                                        </div>
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
                            <PreviousButton prev={prevSlide}/>
                            <NextButton next={nextSlide}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

 export default ImageCarousel;
