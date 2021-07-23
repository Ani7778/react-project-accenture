import classes from "./AboutAccenture.module.css"

let inState = true;

function AboutAccentureMenu({ selected }) {
    let className = classes.container;

    if(selected) {
        className += " " + classes.openContainer;
    } else if (!inState) {
        className +=  " " + classes.closeContainer;
    } else if(inState) {
        inState = false;
    }

    return (
        <div className={className}>
            <div className={classes.about_container}>
                <h4>WHO WE ARE</h4>
                <div className={classes.about_items}>
                    <a>About Accenture</a>
                    <a>Leadership</a>
                    <a>How We Work with Clients</a>
                    <a>Case Studies</a>
                    <a>Newsroom</a>
                    <a>Investor Relations</a>
                    <a>Inclusion & Diversity</a>
                    <a>Sustainability</a>
                </div>
            </div>
            <div className={classes.about_container}>
                <h4>HOW WE'RE ORGANIZED</h4>
                <div className={classes.about_items}>
                    <a>Strategy & Consulting</a>
                    <a>Interactive</a>
                    <a>Technology</a>
                    <a>Operations</a>
                </div>
            </div>
            <div className={classes.about_container}>
                <h4>IN THE U.S.</h4>
                <div className={classes.about_items}>
                    <a>About Accenture in the U.S.</a>
                    <a>Inclusion & Diversity in the U.S.</a>
                </div>
            </div>
        </div>
    );
};

export default AboutAccentureMenu;
