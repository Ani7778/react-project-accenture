import classes from "../JobDescription.module.scss";
import ApplyFormField from "./ApplyFormField";
import ApplyError from "./ApplyErrors";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {applyToJobRequest} from "../../../../redux/actions/applyToJobActions";
import UploadFileField from "./UploadFileField";
import { aws }  from "../../../../config";

import S3FileUpload from 'react-s3';
import LoadingMessage from "./LoadingMessage";

const config = {
    bucketName: 'softshark-web-frontend',
    region: 'us-east-1',
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey,
}

function ApplyModal({open, close, subject}) {
    const dispatch = useDispatch();

    const {status} = useSelector((state) => {
        return state.applyToJob;
    });

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };
    console.log(selectedFile, "sel")

    const { register, formState: { errors }, handleSubmit } = useForm();

    const applyForJob = async (data)=> {
        const text = `<div>
            <p>Name: <b>${data.name}</b></p>
            <p>Last Name: <b>${data.lastName}</b></p>
            <p>Email: <b>${data.email}</b></p>
            <p>Portfolio,s Link: <b>${data.portfolioLink}</b></p>
        </div>`
        let key, filename, filetype;
        if(selectedFile) {
            ({key}  = await S3FileUpload.uploadFile(selectedFile, config));
            filename = selectedFile.name;
            filetype = selectedFile.type
        }
        console.log(key, "key")
        console.log(text);
        console.log(filetype, "filename")
        dispatch(applyToJobRequest({ ...data, subject, text, key, filename, filetype }));
    }

    return open ? (
        <div className={classes.apply_modal_container} onClick={() => {
            close();
        }}>
            <form className={classes.form_popup} onSubmit={handleSubmit(applyForJob)}
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                {status === "loading" &&
                <div className={classes.spinner}>
                    <LoadingMessage />
                </div>
                }
                {status === "success" &&
                <div className={classes.feedback}>
                    <AiOutlineCheckCircle className={classes.check_done}/>
                    <h1>Thank You!</h1>
                    <p>Your submission has been received</p>
                </div>
                }
                {status === "initial" &&
                <>
                    <h1>Apply for this job</h1>
                    <ApplyFormField
                        title="Name*"
                        name="name"
                        options={
                            {
                                required: true
                            }
                        }
                        register={register}
                        errors={errors.name}
                    />
                    {errors.name && errors.name.type === "required" &&
                    <ApplyError message="Name is required"/>
                    }
                    <ApplyFormField
                        title="Last Name*"
                        name="lastName"
                        options={
                            {
                                required: true,
                            }
                        }
                        register={register}
                        errors={errors.lastName}
                    />
                    {errors.lastName && errors.lastName.type === "required" &&
                    <ApplyError message="Last Name is required"/>
                    }
                    <ApplyFormField
                        title="Email*"
                        name="email"
                        options={
                            {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                },
                            }
                        }
                        register={register}
                        errors={errors.email}
                    />
                    {errors.email && errors.email.type === "required" &&
                    <ApplyError message="Email is required"/>
                    }
                    {errors.email && errors.email.type === "pattern" &&
                    <ApplyError message="Enter a valid email address"/>
                    }
                    <UploadFileField
                        register={register}
                        name="cv"
                        change={changeHandler}
                        chosen={isFilePicked}
                        selectedFile={selectedFile}
                    />
                    <ApplyFormField
                        title="Portfolio's link"
                        name="portfolioLink"
                        register={register}
                    />
                    <button type="submit"
                        className={classes.apply_modal_btn}
                    >APPLY</button>
                </>
                }
                {status === "failure" &&
                    <div className={classes.feedback}>
                        <AiOutlineCloseCircle className={classes.not_done}/>
                        <h1 className={classes.fail_message}>Failure!</h1>
                        <p>Your submission has not been received. Please go back and try again</p>
                    </div>
                 }
            </form>
        </div>
    ) : null
}

export default ApplyModal;
