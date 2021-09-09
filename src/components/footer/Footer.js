import classes from "./Footer.module.scss";
import {FaFacebookF, FaLinkedinIn} from "react-icons/all";
import React from "react";
import {ReactComponent as Logo} from "../../images/softshark-logo.svg";

function Footer() {
    return (
        <div className={classes.container} id='footer'>
            <Logo  className={classes.logo}/>
            <div className={classes.info_container}>
                <div className={classes.info_section}>
                    <h1>Get In Touch</h1>
                    <div className={classes.border} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                    <div className={classes.social_icons}>
                        <a href="https://www.linkedin.com/company/75872154/" target="_blank">
                            <FaLinkedinIn className={classes.icon}/>
                        </a>
                        <a href="https://www.facebook.com/SoftShark-109783568013020" target="_blank">
                            <FaFacebookF className={classes.icon}/>
                        </a>
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
