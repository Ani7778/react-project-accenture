import classes from "./Insights.module.scss";
import {motion, AnimatePresence} from "framer-motion";

const InsightsMenu = ({ selected, forceClose })=> {
    if (forceClose) {
        return null;
    }

    return (
        <AnimatePresence>
            {selected && (
                <motion.div className={classes.container}
                    initial={{
                        opacity: 0,
                        marginTop: -5,
                        height: 0
                    }}
                    animate={{
                        opacity: 1,
                        height: 350,
                        marginTop: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    exit={{
                        opacity: 0,
                        marginTop: -5,
                        height: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                >
                    <motion.div className={classes.first_row}
                        initial={{
                            y: "-40px",
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            y: "-40px",
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
                        <h4>FEATURED CONTENT</h4>
                        <h3>Voices of Change</h3>
                        <p>The path to 360° value starts here—featuring our most provocative thinking, extensive research
                            and compelling stories of shared success.</p>
                    </motion.div>
                    <motion.div className={classes.subjects}
                        initial={{
                            y: "-40px",
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            y: "-40px",
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
                        <a>Artificial Intelligence</a>
                        <a>Blockchain</a>
                        <a>Cloud</a>
                        <a>Competitive Agility</a>
                        <a>COVID-19</a>
                        <a>Customer Experience</a>
                        <a>Cybersecurity</a>
                        <a>Future Systems</a>
                        <a>Future Workforce</a>
                        <a>Industry X</a>
                        <a>Podcasts</a>
                        <a>Blogs</a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InsightsMenu;
