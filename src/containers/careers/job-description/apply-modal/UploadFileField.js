import React, {useRef, useState} from "react";
import classes from "../JobDescription.module.scss";
import {ImAttachment} from "react-icons/all";

function UploadFileField({ title, name, register, options, errors, value, change, chosen, selectedFile }) {
    return (
        <>
            <input
                className={`${classes.input_field} ${classes.upload_field}`}
                type="text"
                placeholder="Attach Portfolio/CV"
                value={chosen ? selectedFile.name : ""}
            />
            <label><ImAttachment />
                <input type="file" onChange={change} hidden="hidden" />
            </label>
        </>
    )
}

export default UploadFileField;
