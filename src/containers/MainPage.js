import React, {useCallback, useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
import ProgressNavbar from "../components/progress-navbar/ProgressNavbar";
import VideoSlider from "./video-slider/VideoSlider";
import { Slides } from "./video-slider/Videos";
import { Images } from "./carousel-slider/Images";
import BuiltForChange from "../components/built-for-change/BuiltForChange";
import VoicesOfChange from "../components/voices-of-change/VoicesOfChange";
import Footer from "../components/footer/Footer";
import CaseStudies from "./carousel-slider/CaseStudies";
import ZoomImage from "../components/zoom-image-1/ZoomImage";

function MainPage() {
    const [clickNavbar, setClickNavbar] = useState(false);

    const openNavbar = useCallback(()=> {
        clickNavbar ? setClickNavbar(false) : setClickNavbar(true);
    },[clickNavbar]);


    const [current, setCurrent] = useState(0);
    const length = Slides.length;

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
                return prev + 1 === Slides.length ? 0 : prev + 1;
            });
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="App">
            <Navbar click={clickNavbar} openComponent={openNavbar}/>
            {/*<ProgressNavbar />*/}
            <VideoSlider slides={Slides} currentSlide={current} next={nextSlide} prev={prevSlide} choose={chooseSlide}/>
            <BuiltForChange />
            <VoicesOfChange />
            <ZoomImage />
            <CaseStudies slides={Images}/>
            <Footer />
        </div>
    );
}

export default MainPage;
