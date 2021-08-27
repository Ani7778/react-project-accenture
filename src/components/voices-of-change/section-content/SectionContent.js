import classes from "./SectionContent.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import img1 from "../../../images/case-studies-img1.png";
import img2 from "../../../images/case-studies-img2.png";
import img3 from "../../../images/case-studies-img3.png";
import img4 from "../../../images/case-studies-img4.png";
import {HiOutlineArrowNarrowRight} from "react-icons/all";

function SectionContent() {
    // const [cursorX, setCursorX] = useState();
    // const [cursorY, setCursorY] = useState();
    //
    // window.addEventListener('mousemove', (e)=> {
    //     setCursorX(e.pageX);
    //     setCursorY(e.pageY);
    // })

    // const img = useRef();
    // console.log(img);
    //
    // const zoomImg = (width, height) => {
    //     img.current.style.width = `${width}px`;
    //     img.current.style.height = `${height}px`;
    //     img.current.addEventListener('mousemove', handleMouseMove, false);
    // }
    //
    // function handleMouseMove(e) {
    //     const dimensions = this.getBoundingClientRect();
    //     const [x, y] = [
    //         e.clientX - dimensions.left,
    //         e.clientY - dimensions.top
    //     ];
    //     const [percentX, percentY] = [
    //         Math.round(100 / (dimensions.width / x)),
    //         Math.round(100 / (dimensions.height / y))
    //     ];
    //     this.style.setProperty('--mouse-x', percentX);
    //     this.style.setProperty('--mouse-y', percentY);
    // }
    //
    // zoomImg(320, 212);

    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img1}`} duration={3}>
                <div className={classes.img_container}>
                    <img className={`${classes.img} ${classes.img1}`} src={img1} />
                </div>
                <div className={classes.text_container}>
                    <p className={classes.category_title}>Supply Chain</p>
                    <span>Supply chain transformation on the cloud</span>
                    <p className={classes.text}>Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img2}`} duration={3}>
                <div className={classes.img_container}>
                    <img className={`${classes.img} ${classes.img2}`} src={img2} />
                </div>
                <div className={classes.text_container}>
                    <p className={classes.category_title}>Energy</p>
                    <span>Necessity is the mother of (re)invention</span>
                    <p className={classes.text}>It’s make-or-break for oil and gas companies. Reinvention leaders are showing the way.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img3}`} duration={3}>
                <div className={classes.img_container}>
                    <img className={`${classes.img} ${classes.img3}`} src={img3} />
                </div>
                <div className={classes.text_container}>
                    <p className={classes.category_title}>Artificial Intelligence</p>
                    <span>Change how you work with AI</span>
                    <p className={classes.text}>Professionalize your approach to AI to change what’s possible for your business.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={`${classes.section} ${classes.img4}`} duration={3}>
                <div className={classes.img_container}>
                    <img className={`${classes.img} ${classes.img4}`} src={img4} />
                </div>
                <div className={classes.text_container}>
                    <p className={classes.category_title}>Competitive Agility</p>
                    <span>Delivering on the promise of sustainability</span>
                    <p className={classes.text}>Learn how to create value, drive resilience and create positive change through responsible business.</p>
                </div>
                {/*<ScrollAnimation animateIn={classes.button_container}>*/}
                {/*    <ScrollAnimation animateIn={classes.circle}>*/}
                {/*        <ScrollAnimation animateIn={classes.btn_icon}><HiOutlineArrowNarrowRight /></ScrollAnimation>*/}
                {/*        <p>explore latest insights</p>*/}
                {/*    </ScrollAnimation>*/}
                {/*</ScrollAnimation>*/}
            </ScrollAnimation>
            {/*<div className={classes.cursor} style={{*/}
            {/*    left: `${cursorX}px`,*/}
            {/*    top: `${cursorY}px`*/}
            {/*}}>explore</div>*/}
        </div>
    );
}

export default SectionContent;
