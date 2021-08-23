import classes from "./CaseStudies.module.scss";
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
            <div className={classes.button_container}>
                <div className={classes.circle}>
                    <div className={classes.btn_icon}><HiOutlineArrowNarrowRight /></div>
                </div>
                <p>see all stories</p>
            </div>
        </div>
    );
};

export default CaseStudies;
