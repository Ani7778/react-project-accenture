import React from "react";
import classes from "./Navbar.module.scss";
import { NavHashLink } from 'react-router-hash-link';
import {scrollWithOffset} from "../../utils/scrollWithOffset";

function MenuItems({isOpen}) {
    return (
        <div className={isOpen ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
            <span className={classes.nav_links}>
                <NavHashLink smooth to={'/#services'} scroll={el => scrollWithOffset(el, 120)}>
                        Services
                </NavHashLink>
            </span>
            <span className={classes.nav_links}>
                <NavHashLink smooth to={'/#careers'} scroll={el => scrollWithOffset(el, 150)} >
                        Careers
                </NavHashLink>
            </span>
            <span className={classes.nav_links}>
                <NavHashLink to="/info#about-us">About Us</NavHashLink>
            </span>
            <span className={classes.nav_links}>
                <NavHashLink smooth to={'/info#contact-us'} scroll={el => scrollWithOffset(el, 50)}>Contact Us</NavHashLink>
            </span>
        </div>
    )
}
export default MenuItems;
