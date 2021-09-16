import classes from "./AllJobs.module.scss";
import {ReactComponent as Logo} from "../../../images/softshark-logo.svg";
import React, {useEffect, useState} from "react";
import {AiOutlineSearch} from "react-icons/all";
import AllJobsPosting from "./AllJobsPosting";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllJobsDataRequest} from "../../../redux/actions/allJobsActions";

function AllJobs() {
    const  [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.allJobs;
    });

    useEffect(() => {
        dispatch(fetchAllJobsDataRequest());
    }, []);

    return (
        <div id="all-jobs">
            <div className={classes.find_job_container}>
                <Logo  className={classes.logo}/>
                <div className={classes.text_container}>
                    <h1>Find Your Job</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
            </div>
            <div className={classes.search_job_container}>
                <AiOutlineSearch className={classes.search_icon}/>
                <input placeholder="Search..." onChange={event => setSearchTerm(event.target.value)}/>
                <button>Search</button>
            </div>
            <div className={classes.all_jobs_container}>
                {data.filter((job) => {
                    if(searchTerm === "") {
                        return job
                    } else if (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.deadline.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return job
                    }
                }).map((job) => (
                    <AllJobsPosting seniority={job.seniority} deadline={job.deadline} title={job.title} key={job.id} id={job.id}/>
                ))}
            </div>
        </div>
    )
}

export default AllJobs;
