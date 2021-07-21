import React, {useState, useEffect} from "react";
import Navbar from "./navbar/Navbar";
import ProgressNavbar from "../components/progress-navbar/ProgressNavbar";
import VideoSlider from "./video-slider/VideoSlider";
import { Slides } from "./video-slider/Videos";
import BuiltForChange from "../components/built-for-change/BuiltForChange";
import VoicesOfChange from "../components/voices-of-change/VoicesOfChange";
import Footer from "../components/footer/Footer";
import CaseStudies from "./carousel-slider/CaseStudies";
import classes from "../containers/navbar/Navbar.module.css";

function MainPage() {
    return (
        <div className="App">
            <Navbar />
            <ProgressNavbar />
            <VideoSlider slides={Slides}/>
            <BuiltForChange />
            <VoicesOfChange id="voicesOfChange"/>
            <CaseStudies />
            <Footer />
        </div>
    );
}

export default MainPage;
