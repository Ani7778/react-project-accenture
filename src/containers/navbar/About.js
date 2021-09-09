import classes from "./About.module.scss";
import {ReactComponent as Logo} from "../../images/softshark-logo.svg";
import React from "react";
import {MdLocationOn, MdEmail, FaPhoneAlt} from "react-icons/all";
import {ReactComponent as Scheme} from "../../images/scheme.svg";

function About() {
    return (
        <>
            <div className={classes.about_container} id="about-us">
                <Logo  className={classes.logo}/>
                <div className={classes.text_container}>
                    <h1>About Us</h1>
                    <div className={classes.border} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                </div>
            </div>
            <div className={classes.our_team}>
                <div className={classes.text_container}>
                    <h1>Our Team</h1>
                    <div className={classes.border} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
                <div className={classes.scheme_container}>
                    <Scheme className={classes.scheme}/>
                </div>
            </div>
            <div className={`${classes.our_team} ${classes.contact_us}`} id="contact-us">
                <div className={classes.text_container}>
                        <h1>Contact Us</h1>
                    <div className={classes.border} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
                <div className={classes.info_container}>
                    <div>
                        <MdLocationOn className={classes.icon}/>
                        <h4>Address</h4>
                        <p>Azatutyan 24/16 0014 Yerevan, Armenia</p>
                    </div>
                    <div>
                        <MdEmail className={classes.icon}/>
                        <h4>Email</h4>
                        <p>info@softshark.io</p>
                    </div>
                    <div>
                        <FaPhoneAlt className={classes.icon}/>
                        <h4>Phone Number</h4>
                        <p>+374 99 25 63 12</p>
                     </div>
                </div>
            </div>

        </>
    );
}

export default About;
