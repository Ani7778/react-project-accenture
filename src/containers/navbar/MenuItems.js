import React from "react";
import classes from "./Navbar.module.scss";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll'

function MenuItems({isOpen}) {
    return (
        <div className={isOpen ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
            <span className={classes.nav_links}>
                <HashLink smooth to={'/#services'}>
                    {/*<Link to="services" spy={true} smooth={true} offset={-100} duration={500}>*/}
                        Services
                    {/*</Link>*/}
                </HashLink>
            </span>
            <span className={classes.nav_links}>
                <HashLink smooth to={'/#careers'}>
                    {/*<Link to="careers" spy={true} smooth={true} offset={-100} duration={500}>*/}
                        Careers
                    {/*</Link>*/}
                </HashLink>
            </span>
            <span className={classes.nav_links}>
                <HashLink to="/info#about-us">About Us</HashLink>
            </span>
            <span className={classes.nav_links}>
                <HashLink smooth to={'/info#contact-us'}
                >Contact Us</HashLink>
            </span>
        </div>
    )
}
export default MenuItems;
