import React from "react";
import classes from "../JobDescription.module.scss";

function ApplyFormField({ title, name, register, options, errors, value }) {
    return (
        <input
            className={`${classes.input_field} ${errors ? classes.invalid : ''}`}
            type="text"
            placeholder={title}
            {...register(name, options) } value={value}/>
    )
};

export default ApplyFormField;
