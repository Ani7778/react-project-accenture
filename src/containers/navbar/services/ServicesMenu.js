import classes from "./Services.module.scss";
import {motion, AnimatePresence} from "framer-motion";

function ServicesMenu({ selected, forceClose }) {
    if (forceClose) {
        return null;
    }

    return (
        <AnimatePresence>
            {selected && (
                <motion.div className={classes.container}
                    initial={{
                        opacity: 0,
                        marginTop: -5
                    }}
                    animate={{
                        opacity: 1,
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
                    <motion.div className={classes.subjects}
                        initial={{
                            opacity: 0,
                            y: "-180px",
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            y: "-180px",
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
                        <a>Application Services</a>
                        <a>Artificial Intelligence</a>
                        <a>Automation</a>
                        <a>Business Process Outsourcing</a>
                        <a>Business Strategy</a>
                        <a>Change Management</a>
                        <a>Cloud</a>
                        <a>Customer Experience</a>
                        <a>Data & Analytics</a>
                        <a>Digital Commerce</a>
                        <a>Ecosystem Services</a>
                        <a>Finance Consulting</a>
                        <a>Industry X</a>
                        <a>Infrastructure</a>
                        <a>Marketing</a>
                        <a>Mergers & Acquisitions (M&A)</a>
                        <a>Operating Models</a>
                        <a>Security</a>
                        <a>Supply Chain Management</a>
                        <a>Sustainability</a>
                        <a>Technology Consulting</a>
                        <a>Technology Innovation</a>
                        <a>Zero Based Budgeting (ZBB)</a>
                    </motion.div>
                </motion.div>
                )}
            )}
        </AnimatePresence>
    );
};

export default ServicesMenu;
