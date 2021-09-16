import React from "react";
import classes from "./Navbar.module.scss";
import { NavHashLink } from 'react-router-hash-link';
// import { Link } from 'react-scroll'

function MenuItems({isOpen}) {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    }

        return (
        <div className={isOpen ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
            <span className={classes.nav_links}>
                <NavHashLink smooth to={'/#services'} scroll={el => scrollWithOffset(el, 120)}>
                    {/*<Link to="services" spy={true} smooth={true} offset={-100} duration={500}>*/}
                        Services
                    {/*</Link>*/}
                </NavHashLink>
            </span>
            <span className={classes.nav_links}>
                <NavHashLink smooth to={'/#careers'} scroll={el => scrollWithOffset(el, 150)} >
                    {/*<Link to="careers" spy={true} smooth={true} offset={-100} duration={500}>*/}
                        Careers
                    {/*</Link>*/}
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
