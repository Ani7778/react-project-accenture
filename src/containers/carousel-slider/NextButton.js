import classes from "./CarouselSlider.module.scss";
import {HiArrowNarrowRight} from "react-icons/all";
import React from "react";

function NextArrow({next}) {
    return (
        <div
            className={classes.next_btn}
            onClick={next}
        >
            <HiArrowNarrowRight />
        </div>
    );
}

export default NextArrow;
