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
                        height: 0
                    }}
                    animate={{
                        opacity: 1,
                        height: 350,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                >
                    <motion.div className={classes.first_row}
                        initial={{
                            opacity: 0,
                            y: -70,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -70,
                            transition: {
                                duration: 0.5,
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
                            opacity: 0,
                            y: -100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -100,
                            transition: {
                                duration: 0.5,
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
