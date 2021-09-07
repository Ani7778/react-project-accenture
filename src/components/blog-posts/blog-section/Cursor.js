import classes from "./BlogSection.module.scss";
import { useRef } from "react";

function Cursor() {
    const cursor = useRef(null);
    return (
        <div ref={cursor} className={classes.cursor}>explore</div>
    )
};

export default Cursor;
