import classes from "./VoicesOfChange.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionContent from "./section-content/SectionContent";

function VoicesOfChange() {
    return (
        <div className={classes.container} id="voices">
            <div className={classes.heading}>
                <h1>Voices of Change</h1>
            </div>
            <div className={classes.text} >
                <span>From insights to action, the path to 360° value starts here.</span>
            </div>
            <ScrollAnimation animateIn={classes.section}>
                <SectionContent />
            </ScrollAnimation>
        </div>
    );
}

export default VoicesOfChange;
