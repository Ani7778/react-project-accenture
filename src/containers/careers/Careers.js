import React, {useEffect} from "react";
import logo from "../../images/softshark-logo.svg";
import classes from "./Careers.module.scss";
import JobPosting from "./job-posting/JobPosting";
import {HiArrowRight} from "react-icons/all";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useDispatch, useSelector} from "react-redux";
import {fetchJobPostingsDataRequest} from "../../redux/actions/jobPostingsActions";
import {HashLink} from "react-router-hash-link";

function Careers() {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.jobPostings;
    });

    const {ref, inView} = useInView({
        threshold: 0.6,
        triggerOnce: true
    });

    const animateLogo = useAnimation();
    const animateAppearingContainer = useAnimation();
    const animateTextContainer = useAnimation();
    const animatedLogo = useAnimation();

    useEffect(() => {
        dispatch(fetchJobPostingsDataRequest());
    }, []);

    useEffect(() => {
        if (inView) {
            animateLogo.start({
                opacity: 0,
                scale: 30,
                rotate: -5,
                width: 200,
                height: 200,
                top: "405%",
                transition: {
                    ease: [0.1, 0, 0.5, 0.1],
                    duration: 1
                }
            });
            animateAppearingContainer.start({
                opacity: 1,
                height: 515,
                width: "100%",
                backgroundColor: "#03cffd",
                zIndex: -1,
                rotateY: 16,
                transformPerspective: 800,
                left: 0,
                skewY: 6,
                scale: 1.08,
                translateY: "3.5%",
                transition: {
                    ease: [0.5, 0, 0.5, 0.5],
                    duration: 1.5,
                    delay: 0.3
                }
            });
            animateTextContainer.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0
                }
            });
            animatedLogo.start({
                opacity: 1,
                width: '100%',
                height: 600,
                backgroundImage: 'linear-gradient(to right bottom, #0b95ff, #987bff)',
                transition: {
                    duration: 1,
                    delay: 0.4
                }
            })
        }
        if (!inView) {
            animateLogo.start({
                opacity: 1,
                scale: 0,
                rotate: -30,
                left: '40%',
                width: 200,
                height: 200,
            });
            animateAppearingContainer.start({
                opacity: 0,
                height: 0,
                backgroundColor: '#18deec',
                zIndex: -1
            });
            animateTextContainer.start({
                opacity: 0
            });
            animatedLogo.start({
                opacity: 0,
            })
        }
    }, [inView]);

    return (
        <div className={classes.container} id='careers' ref={ref}
        >
            <div className={classes.logo_container}>
                <motion.img src={logo} className={classes.logo}
                            animate={animateLogo}
                />
            </div>
            <motion.div className={classes.animated} animate={animatedLogo} />
            <motion.div className={classes.container_from_img} animate={animateAppearingContainer} />
            <motion.div className={classes.text_container} animate={animateTextContainer}>
                <div className={classes.text}>
                    <h1>Careers</h1>
                    <div className={classes.border} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt </p>
                </div>
                <div className={classes.job_posting_container}>
                    {data.map((job, index) => (
                        <JobPosting seniority={job.seniority} deadline={job.deadline} title={job.title} description={job.description} key={job.id}
                                    className={index === 4 ? classes.removedInSmallScreen : index === 5 ? classes.removedInSmallScreen : ''}/>
                    ))}
                </div>
                <HashLink to="/careers#all-jobs" className={classes.button_container}>
                    <div className={classes.circle}>
                        <div className={classes.btn_icon}><HiArrowRight/></div>
                    </div>
                    <p>View All</p>
                </HashLink>
            </motion.div>
        </div>
    );
}

export default Careers;
