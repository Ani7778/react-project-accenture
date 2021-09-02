import classes from "./Footer.module.scss";
import {FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/all";
import React from "react";
import {ReactComponent as Logo} from "../../images/softshark-logo.svg";

function Footer() {
    return (
        <div className={classes.container} id='footer'>
            <Logo  className={classes.logo}/>
            <div className={classes.info_container}>
                <div className={classes.info_section}>
                    <h1>Get In Touch</h1>
                    <div className={classes.border}></div>
                    <span>Address</span>
                    <p>Azatutyan 24/16 0014 Yerevan, Armenia</p>
                    <span>Email</span>
                    <p>info@softshark.io</p>
                    <span>Phone Number</span>
                    <p>+374 99 25 63 12</p>
                    <div className={classes.social_icons}>
                        <div><FaLinkedinIn /></div>
                        <div><FaFacebookF /></div>
                        <div><FaInstagram /></div>
                    </div>
                </div>
                <div className={classes.form}>
                    <h1>Send Us message</h1>
                    <input placeholder="Name"/>
                    <input placeholder="Phone Number"/>
                    <input placeholder="Email"/>
                    <textarea placeholder="Message"/>
                    <div className={classes.send_btn}>Send Message</div>
                </div>
            </div>
            <div className={classes.privacy_container}>
                <p>Privacy & Policy</p>
                <span>Copyright 2021</span>
            </div>
        </div>
    );
}

export default Footer;
