import classes from "./JobDescription.module.scss";
import { withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllJobsDataRequest} from "../../../redux/actions/allJobsActions";
import {BsFillBookmarkFill} from "react-icons/all";
import parseHTML from 'html-react-parser';

function JobDescription({match}) {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.allJobs;
    });

    useEffect(() => {
        dispatch(fetchAllJobsDataRequest());
        // history.push(`/careers/${match.params.id}`);
    }, []);

    const chosenJob = data.find(elem => match.params.id === elem.id);

    if(typeof chosenJob === "undefined") {
        console.log("null");
        return null;
    }

    console.log(chosenJob)

    const { title, description, deadline } = chosenJob;

    const tagToText = parseHTML(description);

    return (
        <div className={classes.container} id="job">
            <div className={classes.title_container}>
                <h1 className={classes.title}>JS Developer</h1>
                <BsFillBookmarkFill className={classes.bookmark}/>
            </div>
            <div className={classes.apply_container}>
                <span>Deadline: <b className={classes.job_value}>2022.17.01</b></span>
                <span>Employment type: <b className={classes.job_value}>Full time</b></span>
                <span>Seniority: <b className={classes.job_value}>Mid Level</b></span>
                <div className={classes.apply_btn}>Apply Now</div>
            </div>
            <div className={classes.description}>{tagToText}</div>
        </div>
    );
}

export default withRouter(JobDescription);
