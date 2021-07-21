import React, {useState} from "react";
import classes from "./Navbar.module.css";
import Insights from "./insights/Insights";
import Services from "./services/Services";
import Industries from "./industries/Industries";
import Careers from "./careers/Careers";
import AboutAccenture from "./about-accenture/AboutAccenture";

function MenuItems({isOpen}) {
    const [insightsComponent, setInsightsComponent] = useState(false);
    const openInsightsComponent = ()=> {
        setInsightsComponent(!insightsComponent);
    }

    const [servicesComponent, setServicesComponent] = useState(false);
    const openServicesComponent = ()=> {
        setServicesComponent(!servicesComponent);
    }

    const [industriesComponent, setIndustriesComponent] = useState(false);
    const openIndustriesComponent = ()=> {
        setIndustriesComponent(!industriesComponent);
    }

    const [careersComponent, setCareersComponent] = useState(false);
    const openCareersComponent = ()=> {
        setCareersComponent(!careersComponent);
    }

    const [aboutComponent, setAboutComponent] = useState(false);
    const openAboutComponent = ()=> {
        setAboutComponent(!aboutComponent);
    }

    return (
        <>
            <ul className={isOpen ?  `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
                <li>
                    <a className={classes.nav_links} onClick={openInsightsComponent}>Insights</a>
                </li>
                <li>
                    <a className={classes.nav_links} onClick={openServicesComponent}>Services</a>
                </li>
                <li>
                    <a className={classes.nav_links} onClick={openIndustriesComponent}>Industries</a>
                </li>
                <li>
                    <a className={classes.nav_links} onClick={openCareersComponent}>Careers</a>
                </li>
                <li>
                    <a className={classes.nav_links} onClick={openAboutComponent}>About Accenture</a>
                </li>
            </ul>
            <Insights isOpen={insightsComponent}/>
            <Services  isOpen={servicesComponent}/>
            <Industries  isOpen={industriesComponent}/>
            <Careers isOpen={careersComponent}/>
            <AboutAccenture  isOpen={aboutComponent}/>
        </>
    )
}

export default React.memo(MenuItems);
