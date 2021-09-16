import classes from "../JobDescription.module.scss";

function ApplyError({message}) {
    return (
        <div className={classes.error_field}>
            <span className={classes.error_message}>{message}</span>
        </div>
    )
};

export default ApplyError;
