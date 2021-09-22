import React from "react";
import classes from "../JobDescription.module.scss";

function UploadFileField({ title, name, register, options, errors, value }) {
    return (
        <input
            className={`${classes.input_field} ${errors ? classes.invalid : ''}`}
            type="file"
            placeholder={title}
            {...register(name, options) } value={value}/>
    )
};

export default UploadFileField;
