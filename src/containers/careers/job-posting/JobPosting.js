import classes from "./JobPosting.module.scss";
import {HiBookmark} from "react-icons/all";
import {scrollWithOffset} from "../../../utils/scrollWithOffset";
import {HashLink} from "react-router-hash-link";

function JobPosting({className, deadline, title, seniority, id}) {
    return (
        <div className={classes.container + " " + className}>
            <div className={classes.border} />
            <div className={classes.position}>
                <h4><HashLink
                    to={`/careers/${id}#job`}
                    scroll={el => scrollWithOffset(el, 10)}
                >
                    {title}
                </HashLink></h4>
                <div className={classes.bookmark_icon}><HiBookmark /></div>
            </div>
            <span>Deadline: <b className={classes.job_value}>{deadline}</b></span>
            <span>Employment type: <b className={classes.job_value}>Full time</b></span>
            <span>Seniority: <b className={classes.job_value}>{seniority}</b></span>
        </div>
    );
}

export default JobPosting;
