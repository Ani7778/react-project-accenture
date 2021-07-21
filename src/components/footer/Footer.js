import classes from "../footer/Footer.module.css";
import {HiArrowNarrowRight, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube} from "react-icons/all";
import logo from "../../images/logo.svg";

function Footer() {
    return (
        <div className={classes.container}>
            <div className={classes.section1}>
                <h6>Stay in the know with our newsletter</h6>
                <div className={classes.button_container}>
                    <div className={classes.circle}>
                        <div className={classes.btn_icon}><HiArrowNarrowRight /></div>
                        <p>Subscribe</p>
                    </div>
                </div>
            </div>
            <div className={classes.section2}>
                <img src={logo}/>
                <span>ABOUT US</span>
                <span>CONTACT US</span>
                <span>CAREERS</span>
                <span>LOCATIONS</span>
                <div className={classes.social_icons}>
                    <div><FaLinkedin /></div>
                    <div><FaTwitter /></div>
                    <div><FaFacebook /></div>
                    <div><FaInstagram /></div>
                    <div><FaYoutube /></div>
                </div>
            </div>
            <div className={classes.section3}>
                <span>Privacy Statement</span>
                <span>Terms & Conditions</span>
                <span>Cookie Policy</span>
                <span>Accessibility Statement</span>
                <span>Sitemap</span>
                <span>Do Not Sell My Personal Information (for CA)</span>
                <p>© 2021 Accenture. All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;
