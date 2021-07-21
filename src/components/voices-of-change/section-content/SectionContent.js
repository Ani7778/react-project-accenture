import classes from "./SectionContent.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
import img1 from "../../../images/section-img1.jpg";
import img2 from "../../../images/section-img2.png";
import img3 from "../../../images/section-img3.jpg";
import img4 from "../../../images/section-img4.jpg";
import {useState} from "react";
import {HiArrowNarrowRight} from "react-icons/all";

function SectionContent() {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e)=> {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img1}`}>
                <img className={`${classes.img} ${classes.img1}`} src={img1} />
                <div className={classes.text_container}>
                    <h5>Supply Chain</h5>
                    <span>Supply chain transformation on the cloud</span>
                    <p>Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img2}`}>
                <img className={`${classes.img} ${classes.img2}`} src={img2} />
                <div className={classes.text_container}>
                    <h5>Energy</h5>
                    <span>Necessity is the mother of (re)invention</span>
                    <p>It’s make-or-break for oil and gas companies. Reinvention leaders are showing the way.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img3}`}>
                <img className={`${classes.img} ${classes.img3}`} src={img3} />
                <div className={classes.text_container}>
                    <h5>Artificial Intelligence</h5>
                    <span>Change how you work with AI</span>
                    <p>Professionalize your approach to AI to change what’s possible for your business.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img4}`}>
                <img className={`${classes.img} ${classes.img4}`} src={img4} />
                <div className={classes.text_container}>
                    <h5>Competitive Agility</h5>
                    <span>Delivering on the promise of sustainability</span>
                    <p>Learn how to create value, drive resilience and create positive change through responsible business.</p>
                </div>
                <ScrollAnimation animateIn={classes.button_container}>
                    <ScrollAnimation animateIn={classes.circle}>
                        <ScrollAnimation animateIn={classes.btn_icon}><HiArrowNarrowRight /></ScrollAnimation>
                        <p>explore latest insights</p>
                    </ScrollAnimation>
                </ScrollAnimation>
            </ScrollAnimation>
            <div className={classes.cursor} style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}>explore</div>
        </div>
    );
}

export default SectionContent;
