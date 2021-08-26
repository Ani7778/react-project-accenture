import classes from "./CarouselSlider.module.scss";
import {HiArrowRight} from "react-icons/all";
import React from "react";

function NextArrow({next}) {
    return (
        <div
            className={classes.next_btn }
            onClick={next}
        >
            <HiArrowRight className={classes.arrow}/>
        </div>
    );
};

export default NextArrow;
