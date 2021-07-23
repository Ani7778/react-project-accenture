import classes from "./Careers.module.css";
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let inState = true;

function CareersMenu({ selected }) {
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
           <div className={classes.careers_container}>
               <a>Careers Home<FontAwesomeIcon className={classes.icon} icon={faLongArrowAltRight} /></a>
               <a>Search Jobs<FontAwesomeIcon className={classes.icon} icon={faLongArrowAltRight} /></a>
           </div>
            <div className={classes.join_us_container}>
                <h3>JOIN US</h3>
                <div className={classes.join_us_items}>
                    <a>Search and Apply</a>
                    <a>Experienced Professionals</a>
                    <a>Entry Level Jobs</a>
                    <a>Students</a>
                    <a>Training & Development</a>
                    <a>Recruiting Process</a>
                    <a>Military and Veterans</a>
                    <a>Rewards & Benefits</a>
                </div>
            </div>
            <div className={classes.join_us_container}>
                <h3>EXPLORE JOBS</h3>
                <a>Search Jobs by Areas of Expertise</a>
                <div className={classes.join_us_items}>
                    <a>Consulting Jobs</a>
                    <a>Corporate Jobs</a>
                    <a>Digital Jobs</a>
                    <a>Operations Jobs</a>
                    <a>Strategy Jobs</a>
                    <a>Technology Jobs</a>
                    <a>AI Jobs</a>
                    <a>Cloud Jobs</a>
                    <a>Cybersecurity Jobs</a>
                    <a>Federal Jobs</a>
                    <a>SAP Jobs</a>
                    <a>Salesforce Jobs</a>
                </div>
            </div>
        </div>
    );
};

export default CareersMenu;
