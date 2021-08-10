import React from "react";
import {HiArrowNarrowRight, HiBell} from "react-icons/all";
import classes from "./BuiltForChange.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

function BuiltForChange() {
    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn={classes.icon}>
                <HiBell />
            </ScrollAnimation>
            <ScrollAnimation animateIn={classes.heading}>
                <h1>Built for Change</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn={classes.text}>
                <span>Discover how businesses embrace change to drive value in our new podcast.</span>
            </ScrollAnimation>
            <ScrollAnimation animateIn={classes.button_container}>
                <ScrollAnimation animateIn={classes.circle}>
                    <ScrollAnimation animateIn={classes.btn_icon}><HiArrowNarrowRight /></ScrollAnimation>
                </ScrollAnimation>
                <p>Listen here</p>
            </ScrollAnimation>
        </div>
    );
}

export default BuiltForChange;
