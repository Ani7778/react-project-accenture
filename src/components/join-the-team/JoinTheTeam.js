import classes from "./JoinTheTeam.module.scss";
import React from 'react'
import {HiArrowDown} from "react-icons/all";
import { Link } from "react-scroll";
import team from "../../images/team.png";
import btn from "../../images/view-jobs-btn.png"
import {HashLink} from "react-router-hash-link";

const JoinTheTeam = () => {
    return (
        <div className={classes.container} id='main'>
            <img src={team} className={classes.img} alt=""/>
                <div className={classes.text_container}>
                    <h1>Join The Team</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
            <HashLink to="/careers#all-jobs" className={classes.jobs_btn}>
                <img src={btn} alt="" />
            </HashLink>
                <div className={classes.down_btn}>
                    <Link
                        to="voices"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    ><HiArrowDown  className={classes.arrow}/>
                    </Link>
                </div>
        </div>
    )
}

export default JoinTheTeam;
