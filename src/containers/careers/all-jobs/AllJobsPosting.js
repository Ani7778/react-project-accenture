import classes from "./AllJobs.module.scss";
import {HashLink} from "react-router-hash-link";
import React from "react";

function AllJobsPosting({deadline, title, seniority, id}) {
    return (
        <div className={classes.job_posting}>
            <div className={classes.border} />
            <h4><HashLink to={`/careers/${id}#job`} className={classes.title}>{title}</HashLink></h4>
            <span>Deadline: <b className={classes.job_value}>{deadline}</b></span>
            <span>Employment type: <b className={classes.job_value}>Full time</b></span>
            <span>Seniority: <b className={classes.job_value}>{seniority}</b></span>
        </div>

    );
}

export default AllJobsPosting;
