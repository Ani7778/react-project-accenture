import React, {useState} from "react";
import classes from "./Navbar.module.scss";
import InsightsMenu from "./insights/InsightsMenu";
import ServicesMenu from "./services/ServicesMenu";
import IndustriesMenu from "./industries/IndustriesMenu";
import CareersMenu from "./careers/CareersMenu";
import AboutAccentureMenu from "./about-accenture/AboutAccentureMenu";
import {ReactComponent as Logo} from "../../images/logo-with-company-name.svg";

const menuItems = ["Services", "About Us", "Careers", "Contact Us"];
const menuItemContents = {
    [menuItems[0]]:  ServicesMenu,
    [menuItems[1]]: IndustriesMenu,
    [menuItems[2]]:  CareersMenu,
    [menuItems[3]]:  AboutAccentureMenu,
};

let forceClose = null;

function MenuItems({ isOpen }) {
     const outsideClick = () => {
         const navbar = document.getElementById("navbar");
         document.addEventListener('click', function(event) {
              if (!navbar.contains(event.target)) {
                    setSelected();
              }
         });
     };

    const [selected, setSelected] = useState();

    return (
        <div className={isOpen ?  `${classes.nav_menu} ${classes.active}` : classes.nav_menu} onClick={outsideClick} id="navbar">
            <Logo  height={90} className={classes.logo}/>
            {menuItems.map((menuItem)=> {
                return (
                    <span>
                        <a className={classes.nav_links}
                           onClick={()=> {
                               if(selected === menuItem) {
                                        forceClose = null;
                                        setSelected();
                                    }
                                    else if(selected){
                                        forceClose = selected;
                                        setSelected( menuItem );
                                    } else {
                                        forceClose = null;
                                        setSelected( menuItem );
                                    }
                                }
                             }
                        >
                            {menuItem}
                        </a>
                    </span>
                )}
                )}
            {
                menuItems.map((value)=> {
                    return React.createElement(menuItemContents[value], {forceClose: forceClose === value, selected: selected === value});
                })
            }
        </div>
    )
};

export default MenuItems;
