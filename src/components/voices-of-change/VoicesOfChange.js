import classes from "../voices-of-change/VoicesOfChange.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionContent from "./section-content/SectionContent";

function VoicesOfChange() {
    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn={classes.heading}>
                <h1>Voices of Change</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn={classes.text}>
                <span>From insights to action, the path to 360° value starts here.</span>
            </ScrollAnimation>
            <SectionContent />
        </div>
    );
}

export default VoicesOfChange;
