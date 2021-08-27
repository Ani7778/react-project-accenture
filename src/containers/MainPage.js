import React, {useCallback, useRef, useState} from "react";
import Navbar from "./navbar/Navbar";
import { Images } from "./carousel-slider/Images";
import VoicesOfChange from "../components/voices-of-change/VoicesOfChange";
import Footer from "../components/footer/Footer";
import CaseStudies from "./carousel-slider/CaseStudies";
import ZoomImage from "../components/zoom-image-1/ZoomImage";
import JoinTheTeam from "./video-slider/VideoSlider";
import classes from "./carousel-slider/CarouselSlider.module.scss";

function MainPage() {
    const [clickNavbar, setClickNavbar] = useState(false);

    const openNavbar = useCallback(()=> {
        clickNavbar ? setClickNavbar(false) : setClickNavbar(true);
    },[clickNavbar]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const length = Images.length;

    const carousel = document.getElementsByClassName(classes.images);
    let currentDegree = useRef(0);
    const media1100 = window.matchMedia('(max-width: 1100px)');

    const nextSlide = ()=> {
        if (media1100.matches) {
            currentDegree.current += 17;
        } else {
            currentDegree.current += 20;
        }
        carousel[0].style.transform = "translateZ(972px)";
        carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = ()=> {
        if (media1100.matches) {
            currentDegree.current += -17;
            console.log("17");
        } else {
            currentDegree.current += -20;
            console.log("20");
        }
        carousel[0].style.transform = "translateZ(972px)";
        carousel[0].style.transform += "rotateY("+ currentDegree.current +"deg)";
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    const chooseSlide = index => {
        setCurrentSlide(index);
    }

    return (
        <>
            <Navbar click={clickNavbar} openComponent={openNavbar}/>
            <JoinTheTeam />
            <CaseStudies slides={Images} next={nextSlide} prev={prevSlide} choose={chooseSlide} current={currentSlide}/>
            <ZoomImage />
            <VoicesOfChange />
            <Footer />
        </>
    );
}

export default MainPage;
