import React, {useRef, useState, useCallback} from "react";
import classes from "./Navbar.module.scss";
import  MenuItems  from "./MenuItems";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ReactComponent as Logo} from "../../images/logo-with-company-name.svg";
import {Link} from "react-scroll";

function Navbar() {
    const [clicked, setClick] = useState(false);

    const toggleNavbar = useCallback(()=> {
        setClick(!clicked);
    },[clicked]);
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
            <Link to="joinTeam" spy={true} duration={500}>
                <Logo className={classes.logo}/>
            </Link>
            <div className={classes.menu_icon} onClick={toggleNavbar}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <MenuItems
                isOpen={clicked}
            />
        </div>
    )
}

export default Navbar;
