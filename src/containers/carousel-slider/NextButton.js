import classes from "./CarouselSlider.module.scss";
import {HiOutlineArrowNarrowRight} from "react-icons/all";
import React from "react";

function NextArrow({next}) {
    return (
        <div
            className={classes.next_btn }
            onClick={next}
        >
            <HiOutlineArrowNarrowRight />
        </div>
    );
};

export default NextArrow;
