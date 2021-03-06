import React, { useState, useCallback, useEffect } from "react";
import classes from "./Navbar.module.scss";
import  MenuItems  from "./MenuItems";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handler = () => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        navbar.classList.add(classes.sticky);
    } else {
        navbar.classList.remove(classes.sticky);
    }
};

function Navbar({click, openComponent}) {
    const [navbar, setHeaderText] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, [navbar]);


    return (
        <div id="navbar" className={classes.navbar_items}>
            <img className={classes.img} alt="logo" src="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.png" />
            <div className={classes.menu_icon} onClick={openComponent} >
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <MenuItems
                isOpen={click}
            />
        </div>
    )
}

export default React.memo(Navbar);

