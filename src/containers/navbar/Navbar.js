import React, {useRef} from "react";
import classes from "./Navbar.module.scss";
import  MenuItems  from "./MenuItems";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({click, openComponent}) {
    const ref = useRef();

    const scrollProgressNavbar = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        ref.current.style.width = scrollPercentRounded + "%";
    }

    window.addEventListener("scroll", scrollProgressNavbar);

    return (
        <div id="navbar" className={classes.navbar_items}>
            <div className={classes.scrolled} ref={ref}></div>
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

