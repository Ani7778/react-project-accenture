import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-scroll";

function MenuItems({ isOpen }) {
    return (
        <div className={isOpen ?  `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
            <span>
                <a className={classes.nav_links}>
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
                </a>
            </span>
            <span>
                <a className={classes.nav_links}>
                    <Link to="voices" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
                </a>
            </span>
            <span>
                <a className={classes.nav_links}>
                    <Link to="careers" spy={true} smooth={true} offset={-70} duration={500}>Careers</Link>
                </a>
            </span><span>
                <a className={classes.nav_links}>
                    <Link to="footer" spy={true} smooth={true} offset={-10} duration={500}>Contact Us</Link>
                </a>
            </span>
        </div>
    )
};

export default MenuItems;
