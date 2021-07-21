import classes from "./SectionContent.module.css";
import { useRef } from "react";

function Cursor() {
    const cursor = useRef(null);
    return (
        <div ref={cursor} className={classes.cursor}>explore</div>
    )
};

export default Cursor;
