import React, {useState, useEffect} from "react";
import classes from  "../progress-navbar/ProgressNavbar.module.css";
import { HiArrowNarrowRight } from "react-icons/all";

function ProgressNavbar() {
    const [header, setHeaderText] = useState(false);

    useEffect(() => {
        const fixedText = false;
        const whenNotFixed = true;
        const progressNavbar = document.getElementById("progress-navbar");
        const sticky = progressNavbar.offsetTop;

        const scrollCallBack = window.addEventListener("scroll", () => {
            if ( window.pageYOffset > sticky) {
                progressNavbar.classList.add(classes.sticky)
                if (progressNavbar !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                progressNavbar.classList.remove(classes.sticky);
                if (progressNavbar !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, [header]);

    return (
        <div id="progress-navbar" className={classes.container}>
            <div className={classes.icon}><HiArrowNarrowRight /></div>
            <span>Ideas that make an impact</span>
            <span>Join us and do extraordinary things</span>
            <span>Case studies & stories</span>
            <span>Leading through change</span>
        </div>
    );
}

export default ProgressNavbar;
