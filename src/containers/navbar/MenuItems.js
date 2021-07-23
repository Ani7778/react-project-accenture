import React, {useEffect, useRef, useState} from "react";
import classes from "./Navbar.module.css";
import InsightsMenu from "./insights/InsightsMenu";
import ServicesMenu from "./services/ServicesMenu";
import IndustriesMenu from "./industries/IndustriesMenu";
import CareersMenu from "./careers/CareersMenu";
import AboutAccentureMenu from "./about-accenture/AboutAccentureMenu";

const menuItems = ["Insights", "Services", "Industries", "Careers", "About Accenture"];
const menuItemContents = {
    "Insights": InsightsMenu,
    "Services":  ServicesMenu,
    "Industries": IndustriesMenu,
    "Careers":  CareersMenu,
    "About Accenture":  AboutAccentureMenu,
};

function MenuItems({isOpen}) {
    const [selected, setSelected] = useState();

    return (
        <div>
            <div className={isOpen ?  `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
                {menuItems.map((menuItem)=> {
                    return (
                        <span>
                            <a className={classes.nav_links}
                               onClick={()=> {
                                        if(selected === menuItem) {
                                            setSelected();
                                        } else {
                                            setSelected( menuItem );
                                        }
                                    }
                                 }
                            >
                                {menuItem}
                            </a>
                        </span>
                    )
                    }
                )}
            </div>
            {
                Object.entries(menuItemContents).map(([prop, value])=> {
                    return React.createElement(value, {selected: selected === prop});
                })
            }
        </div>
    )
};

export default MenuItems

