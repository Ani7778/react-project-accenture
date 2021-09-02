import classes from "./AboutAccenture.module.scss"
import {motion, AnimatePresence} from "framer-motion";

function AboutAccentureMenu({ selected, forceClose }) {
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
                        height: 500,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.4
                        }
                    }}
                >
                <motion.div className={classes.about_container}
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
                        opacity: 0,
                        y: "-180px",
                        transition: {
                            duration: 0.2,
                        }
                    }}
                >
                    <h4>WHO WE ARE</h4>
                    <div className={classes.about_items}>
                        <a>About Accenture</a>
                        <a>Leadership</a>
                        <a>How We Work with Clients</a>
                        <a>Case Studies</a>
                        <a>Newsroom</a>
                        <a>Investor Relations</a>
                        <a>Inclusion & Diversity</a>
                        <a>Sustainability</a>
                    </div>
                </motion.div>
                <motion.div className={classes.about_container}
                     initial={{
                         opacity: 0,
                         y: "-180px",
                     }}
                     animate={{
                         opacity: 1,
                         y: 0,
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
                    <h4>HOW WE'RE ORGANIZED</h4>
                    <div className={classes.about_items}>
                        <a>Strategy & Consulting</a>
                        <a>Interactive</a>
                        <a>Technology</a>
                        <a>Operations</a>
                    </div>
                </motion.div>
                <motion.div className={classes.about_container}
                     initial={{
                         opacity: 0,
                         y: "-180px",
                     }}
                     animate={{
                         opacity: 1,
                         y: 0,
                         transition: {
                             duration: 0.4,
                         }
                     }}
                     exit={{
                         opacity: 0,
                         y: "-180px",
                         transition: {
                             duration: 0.2,
                         }
                     }}
                >
                    <h4>IN THE U.S.</h4>
                    <div className={classes.about_items}>
                        <a>About Accenture in the U.S.</a>
                        <a>Inclusion & Diversity in the U.S.</a>
                    </div>
                </motion.div>
            </motion.div>
            )}
            )}
        </AnimatePresence>
    );
};

export default AboutAccentureMenu;
