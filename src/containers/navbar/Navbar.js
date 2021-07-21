import React, { useState, useCallback, useEffect } from "react";
import classes from "./Navbar.module.css";
import  MenuItems  from "./MenuItems";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    const [navbar, setHeaderText] = useState(false);

    useEffect(() => {
        const fixedText = false;
        const whenNotFixed = true;
        const header = document.getElementById("navbar");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add(classes.sticky);
                if (navbar !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                header.classList.remove(classes.sticky);
                if (navbar !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, [navbar]);

    const [clicked, setClicked] = useState(false);

    const openNavbar = useCallback(()=> {
        clicked ? setClicked(false) : setClicked(true);
    },[clicked]);

    return (
        <nav id="navbar" className={classes.navbar_items}>
            <img alt="logo" src="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.png" />
            <div className={classes.menu_icon} onClick={openNavbar} >
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <MenuItems
                isOpen={clicked}
            />
        </nav>
    )
}

export default React.memo(Navbar);

