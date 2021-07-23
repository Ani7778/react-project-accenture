import React, {useState, useEffect, useRef} from "react";
import classes from  "../progress-navbar/ProgressNavbar.module.css";
import { HiArrowNarrowRight } from "react-icons/all";

function ProgressNavbar() {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const progressNavbar = document.getElementById("progress-navbar");
        const sticky = progressNavbar.offsetTop;

        const scrollCallBack = window.addEventListener("scroll", () => {
            if ( window.pageYOffset > sticky) {
                progressNavbar.classList.add(classes.sticky)
            } else {
                progressNavbar.classList.remove(classes.sticky);
            }
        });

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, [header]);

    const [scrolled, setScrolled] = useState(false);
    const ref = useRef();

    const pageHeight = 2850;

    const scrollProgressNavbar = () => {
        console.log(window.pageYOffset);
        ref.current.style.width = window.pageYOffset / pageHeight * 100 + "%";

        if(window.pageYOffset >= 60) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

    window.addEventListener("scroll", scrollProgressNavbar);

    return (
        <div id="progress-navbar" className={classes.container}>
            <div className={classes.scrolled} ref={ref}></div>
            <div className={scrolled ? classes.animatedIcon: classes.icon}><HiArrowNarrowRight /></div>
            <span>Ideas that make an impact</span>
            <span>Join us and do extraordinary things</span>
            <span>Case studies & stories</span>
            <span>Leading through change</span>
        </div>
    );
}

export default ProgressNavbar;
