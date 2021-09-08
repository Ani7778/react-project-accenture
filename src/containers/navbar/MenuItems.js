import React from "react";
import classes from "./Navbar.module.scss";
import {Link} from "react-scroll";

function MenuItems({isOpen}) {
    return (
        <div className={isOpen ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
                <span className={classes.nav_links}>
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
                </span>
            <span className={classes.nav_links}>
                    <Link to="voices" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
                </span>
            <span className={classes.nav_links}>
                    <Link to="careers" spy={true} smooth={true} offset={-70} duration={500}>Careers</Link>
                </span>
            <span className={classes.nav_links}>
                    <Link to="footer" spy={true} smooth={true} offset={-10} duration={500}>Contact Us</Link>
                </span>
        </div>
    )
}
export default MenuItems;
