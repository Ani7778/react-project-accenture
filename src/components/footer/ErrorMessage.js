import  {BsFillExclamationTriangleFill} from "react-icons/all";
import classes from "./Footer.module.scss";

function ErrorMessage({message}) {
    return (
        <div className={classes.error_field}>
            <BsFillExclamationTriangleFill className={classes.error_icon}/>
            <span className={classes.error_message}>{message}</span>
        </div>
    )
};

export default ErrorMessage;
