import classes from "./CarouselSlider.module.scss";
import {HiArrowNarrowLeft} from "react-icons/all";
import React from "react";

function PrevArrow({prev}) {
    return (
        <div
            className={classes.prev_btn}
            onClick={prev}
        >
            <HiArrowNarrowLeft />
        </div>
    );
}

export default PrevArrow;
