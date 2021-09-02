import React, {useCallback, useRef, useState} from "react";
import useMediaQuery from "use-mediaquery";
import Navbar from "./navbar/Navbar";
import { Images } from "./carousel-slider/Images";
import { CaseStudiesImages } from "../components/voices-of-change/section-content/CaseStudiesImages";
import VoicesOfChange from "../components/voices-of-change/VoicesOfChange";
import Footer from "../components/footer/Footer";
import CaseStudies from "./carousel-slider/CaseStudies";
import ZoomImage from "../components/zoom-image-1/ZoomImage";
import JoinTheTeam from "./video-slider/VideoSlider";
import classes from "./carousel-slider/CarouselSlider.module.scss";
import {useKeenSlider} from "keen-slider/react";

function MainPage() {
    const [clickNavbar, setClickNavbar] = useState(false);

    const openNavbar = useCallback(()=> {
        setClickNavbar(!clickNavbar);
    },[clickNavbar]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const carousel = document.getElementsByClassName(classes.images);
    let currentDegree = useRef(0);
    const imagesArr = useRef(Images);
    const length = imagesArr.current.length;

    let screenIsSmall = useMediaQuery('(max-width: 720px)');
    const [sliderRef, slider] = useKeenSlider({ slidesPerView: 3, loop: true, centered: true });

    const nextSlide = ()=> {

        if(!screenIsSmall) {
            currentDegree.current +=20;
            carousel[0].style.transform = "translateZ(972px)";
            carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        }
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
        slider.next();
    }

    const prevSlide = ()=> {
        if(!screenIsSmall) {
            currentDegree.current -=20;
            carousel[0].style.transform = "translateZ(972px)";
            carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        }
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
        slider.prev();
    }

    const chooseSlide = index => {
        setCurrentSlide(index);
    }

    return (
        <>
            <Navbar click={clickNavbar} openComponent={openNavbar}/>
            <JoinTheTeam />
            <CaseStudies
                slides={imagesArr.current}
                next={nextSlide}
                prev={prevSlide}
                choose={chooseSlide}
                current={currentSlide}
                smallScreen={screenIsSmall}
                keenRef={sliderRef}
            />
            <ZoomImage />
            <VoicesOfChange images={CaseStudiesImages}/>
            <Footer />
        </>
    );
}

export default MainPage;
