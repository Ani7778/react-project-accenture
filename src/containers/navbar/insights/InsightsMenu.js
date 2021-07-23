import React from "react";
import classes from "./Insights.module.css";

let inState = true;

function InsightsMenu({ selected }) {
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
            <div className={classes.first_row}>
                <h4>FEATURED CONTENT</h4>
                <h3>Voices of Change</h3>
                <p>The path to 360° value starts here—featuring our most provocative thinking, extensive research
                    and compelling stories of shared success.</p>
            </div>
            <a>Artificial Intelligence</a>
            <a>Blockchain</a>
            <a>Cloud</a>
            <a>Competitive Agility</a>
            <a>COVID-19</a>
            <a>Customer Experience</a>
            <a>Cybersecurity</a>
            <a>Future Systems</a>
            <a>Future Workforce</a>
            <a>Industry X</a>
            <a>Podcasts</a>
            <a>Blogs</a>
        </div>
    );
};

export default InsightsMenu;