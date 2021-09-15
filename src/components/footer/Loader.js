import Loader from "react-loader-spinner";
import {useEffect, useState} from "react";
import classes from "./Footer.module.scss";
import { AiOutlineCheckCircle } from "react-icons/all";

export default  function Loading() {
    const [show, setShow] = useState(false);

    useEffect(()=> {
        setShow(true);
        setTimeout(()=> {
            setShow(false)
        }, 2000)
    }, [])

    return (
        <>
            {show &&
                <Loader
                    type="Oval"
                    color="#0477e8"
                    height={200}
                    width={200}
                />
            }
            {!show &&
                <div className={classes.feedback}>
                    <AiOutlineCheckCircle className={classes.check_done}/>
                    <h1>Thank You!</h1>
                    <p>Your submission has been received</p>
                </div>
            }
        </>
    );
}
