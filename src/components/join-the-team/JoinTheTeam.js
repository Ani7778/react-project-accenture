import classes from "./JoinTheTeam.module.scss";
import React, {useEffect, useRef} from 'react'
import {HiArrowDown} from "react-icons/all";
import { Link } from "react-scroll";
import team from "../../images/team.png";
import btn from "../../images/view-jobs-btn.png"
import {HashLink} from "react-router-hash-link";

const JoinTheTeam = () => {
    const ref = useRef();
    const screenHeight = window.innerHeight;

    useEffect(()=> {
        ref.current.style.height = screenHeight + "px";
    })

    return (
        <div className={classes.container} id='main' ref={ref}>
            <img src={team} className={classes.img} alt=""/>
                <div className={classes.text_container}>
                    <h1>Join The Team</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
            <HashLink to="/careers#all-jobs" className={classes.jobs_btn}>
                <img src={btn} alt="" className={classes.jobs_btn}/>
            </HashLink>
                <div className={classes.down_btn}>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                    ><HiArrowDown  className={classes.arrow}/>
                    </Link>
                </div>
        </div>
    )
}

export default JoinTheTeam;
