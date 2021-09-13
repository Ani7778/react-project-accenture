import classes from "./JobPosting.module.scss";
import {HiBookmark} from "react-icons/all";

function JobPosting({className, deadline, description, title, seniority}) {
    return (
        <div className={classes.container + " " + className}>
            <div className={classes.border}></div>
            <div className={classes.position}>
                <h4>{title}</h4>
                <div className={classes.bookmark_icon}><HiBookmark /></div>
            </div>
            <span>Deadline: <b className={classes.job_value}>{deadline}</b></span>
            <span>Employment type: <b className={classes.job_value}>Full time</b></span>
            <span>Seniority: <b className={classes.job_value}>{seniority}</b></span>
        </div>
    );
}

export default JobPosting;
