import classes from "./CarouselSlider.module.scss";
import {HiOutlineArrowNarrowLeft} from "react-icons/all";
import React from "react";

function PrevArrow({prev}) {
    return (
        <div
            className={classes.prev_btn}
            onClick={prev}
        >
            <HiOutlineArrowNarrowLeft />
        </div>
    );
}

export default PrevArrow;
