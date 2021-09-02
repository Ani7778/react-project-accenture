import classes from "./Industries.module.scss";
import {motion, AnimatePresence} from "framer-motion";

function IndustriesMenu({ selected, forceClose }) {
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
                        height: 400,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.3,
                        }
                    }}
                >
                    <motion.div className={classes.subjects}
                        initial={{
                            y: "-180px",
                            opacity: 0,
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
                        <a>Aerospace and Defense</a>
                        <a>Automotive</a>
                        <a>Banking</a>
                        <a>Capital Markets</a>
                        <a>Chemicals</a>
                        <a>Communications and Media</a>
                        <a>Consumer Goods and Services</a>
                        <a>Energy</a>
                        <a>Health</a>
                        <a>High Tech</a>
                        <a>Industrial</a>
                        <a>Insurance</a>
                        <a>Life Sciences</a>
                        <a>Natural Resources</a>
                        <a>Public Service</a>
                        <a>Retail</a>
                        <a>Software and Platforms</a>
                        <a>Travel</a>
                        <a>US Federal Government</a>
                        <a>Utilities</a>
                    </motion.div>
                </motion.div>
                )}
            )}
        </AnimatePresence>
    );
};

export default IndustriesMenu;
