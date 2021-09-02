import classes from "./CarouselSlider.module.scss";
import {HiArrowLeft} from "react-icons/all";
import React from "react";

function PrevArrow({prev}) {
    return (
        <div
            className={classes.prev_btn}
            onClick={prev}
        >
            <HiArrowLeft className={classes.arrow}/>
        </div>
    );
}

export default PrevArrow;
