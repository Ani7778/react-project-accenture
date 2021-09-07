import classes from "../job-posting/JobPosting.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import {HiBookmark} from "react-icons/all";

function JobPosting({className, deadline, description, title}) {
    return (
        <div className={classes.container + " " + className}>
            <div className={classes.border}></div>
            <div className={classes.position}>
                <h4>JS Developer</h4>
                <div className={classes.bookmark_icon}><HiBookmark /></div>
            </div>
            <span>Seniority: <b className={classes.job_value}>Mid Level</b></span>
            <span>Employment type: <b className={classes.job_value}>Full time</b></span>
            <span>Salary: <b className={classes.job_value}>$400-$500</b></span>
        </div>
    );
}

export default JobPosting;
