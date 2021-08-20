import classes from "./CaseStudies.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import CarouselSlider from "./CarouselSlider";
import { Images } from "../carousel-slider/Images";
import {HiOutlineArrowNarrowRight} from "react-icons/all";

function CaseStudies() {
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <h1>Case studies & stories</h1>
            </div>
            <div className={classes.text}>
                <span>We work together across the globe to make a world of difference.</span>
            </div>
            <CarouselSlider slides={Images}/>
            <ScrollAnimation animateIn={classes.button_container}>
                <ScrollAnimation animateIn={classes.circle}>
                    <ScrollAnimation animateIn={classes.btn_icon}><HiOutlineArrowNarrowRight /></ScrollAnimation>
                </ScrollAnimation>
                <p>see all stories</p>
            </ScrollAnimation>
        </div>
    );
};

export default CaseStudies;
