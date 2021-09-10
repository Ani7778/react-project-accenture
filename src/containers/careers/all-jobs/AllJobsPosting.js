import classes from "./AllJobs.module.scss";

function JobPosting({deadline, title, seniority}) {
    return (
        <div className={classes.job_posting}>
            <div className={classes.border} />
            <h4>{title}</h4>
            <span>Deadline: <b className={classes.job_value}>{deadline}</b></span>
            <span>Employment type: <b className={classes.job_value}>Full time</b></span>
            <span>Seniority: <b className={classes.job_value}>{seniority}</b></span>
        </div>
    );
}

export default JobPosting;
