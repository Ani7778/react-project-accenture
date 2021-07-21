import classes from "../carousel-slider/CaseStudies.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
import CarouselSlider from "./CarouselSlider";

function CaseStudies() {
    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn={classes.heading}>
                <h1>Case studies & stories</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn={classes.text}>
                <span>We work together across the globe to make a world of difference.</span>
            </ScrollAnimation>
            <CarouselSlider />
        </div>
    );
}

export default CaseStudies;
