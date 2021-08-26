import React, {useState, useCallback, useEffect, useRef} from "react";
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
    const [header, setHeader] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, [header]);

    const [scrolled, setScrolled] = useState(false);
    const ref = useRef();

    const pageHeight = 3500;
    console.log(pageHeight);

    const scrollProgressNavbar = () => {
        ref.current.style.width = window.pageYOffset / pageHeight * 100 + "%";
        setScrolled(true)
    }

    window.addEventListener("scroll", scrollProgressNavbar);

    const [navbar, setHeaderText] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, [navbar]);


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

