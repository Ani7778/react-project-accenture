import React from "react";
import classes from "./Footer.module.scss";

function FormField({ title, name, register, options, errors }) {
    return (
        <input
            className={`${classes.input_field} ${errors ? classes.invalid : ''}`}
            type="text"
            placeholder={title}
            {...register(name, options) } />
    )
};

export default FormField;
