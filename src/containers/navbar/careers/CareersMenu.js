import classes from "./Careers.module.scss";
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion, AnimatePresence} from "framer-motion";


function CareersMenu({ selected, forceClose }) {
    if (forceClose) {
        return null;
    }

    return (
        <AnimatePresence>
            {selected && (
                <motion.div className={classes.container}
                    initial={{
                        opacity: 0,
                        height  : 0
                    }}
                    animate={{
                        opacity: 1,
                        height: 580,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.4,
                        }
                    }}
                >
                   <motion.div className={classes.careers_container}
                        initial={{
                            opacity: 0,
                            y: "-180px",
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                            }
                        }}
                        exit={{
                            y: "-180px",
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                   >
                       <a>Careers Home<FontAwesomeIcon className={classes.icon} icon={faLongArrowAltRight} /></a>
                       <a>Search Jobs<FontAwesomeIcon className={classes.icon} icon={faLongArrowAltRight} /></a>
                   </motion.div>
                    <motion.div className={classes.join_us_container}
                         initial={{
                             opacity: 0,
                             y: "-180px",
                         }}
                         animate={{
                             y: 0,
                             opacity: 1,
                             transition: {
                                 duration: 0.4,
                             }
                         }}
                         exit={{
                             y: "-180px",
                             opacity: 0,
                             transition: {
                                 duration: 0.2,
                             }
                        }}
                    >
                        <h3>JOIN US</h3>
                        <div className={classes.join_us_items}>
                            <a>Search and Apply</a>
                            <a>Experienced Professionals</a>
                            <a>Entry Level Jobs</a>
                            <a>Students</a>
                            <a>Training & Development</a>
                            <a>Recruiting Process</a>
                            <a>Military and Veterans</a>
                            <a>Rewards & Benefits</a>
                        </div>
                    </motion.div>
                    <motion.div className={classes.join_us_container}
                        initial={{
                            opacity: 0,
                            y: "-180px",
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                            }
                        }}
                        exit={{
                            y: "-180px",
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                    >
                        <h3>EXPLORE JOBS</h3>
                        <a>Search Jobs by Areas of Expertise</a>
                        <div className={classes.join_us_items}>
                            <a>Consulting Jobs</a>
                            <a>Corporate Jobs</a>
                            <a>Digital Jobs</a>
                            <a>Operations Jobs</a>
                            <a>Strategy Jobs</a>
                            <a>Technology Jobs</a>
                            <a>AI Jobs</a>
                            <a>Cloud Jobs</a>
                            <a>Cybersecurity Jobs</a>
                            <a>Federal Jobs</a>
                            <a>SAP Jobs</a>
                            <a>Salesforce Jobs</a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            )}
        </AnimatePresence>
    );
};

export default CareersMenu;
