import React, {useState} from "react";
import classes from "./Navbar.module.scss";
import InsightsMenu from "./insights/InsightsMenu";
import ServicesMenu from "./services/ServicesMenu";
import IndustriesMenu from "./industries/IndustriesMenu";
import CareersMenu from "./careers/CareersMenu";
import AboutAccentureMenu from "./about-accenture/AboutAccentureMenu";

const menuItems = ["Insights", "Services", "Industries", "Careers", "About Accenture"];
const menuItemContents = {
    [menuItems[0]]: InsightsMenu,
    [menuItems[1]]:  ServicesMenu,
    [menuItems[2]]: IndustriesMenu,
    [menuItems[3]]:  CareersMenu,
    [menuItems[4]]:  AboutAccentureMenu,
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
