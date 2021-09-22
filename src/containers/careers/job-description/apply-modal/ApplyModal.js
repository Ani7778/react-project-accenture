import classes from "../JobDescription.module.scss";
import ApplyFormField from "./ApplyFormField";
import ApplyError from "./ApplyErrors";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {ImAttachment} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {applyToJobRequest} from "../../../../redux/actions/applyToJobActions";
import UploadFileField from "./UploadFileField";

function ApplyModal({open, close, subject}) {
    const dispatch = useDispatch();

    // const data = useSelector((state) => {
    //     return state.applyToJob;
    // });

    // useEffect(()=> {
    //     console.log(data, "data from ")
    // })

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    const applyForJob = (data)=> {
        const text = "Name:" + " " + data.name + " \r\n" +
            "Last Name:" + " " + data.lastName + " \r\n" +
            "Email:" + " " + data.email + " \r\n" +
            "Portfolio,s Link:" + " " + data.portfolioLink + " \r\n" ;
            // "cv:" + " " + data.cv[0].name;
        const filename = data.cv[0].name;
        console.log(filename, "name")
        console.log(text);
        dispatch(applyToJobRequest({ ...data, subject, text, filename }));
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
                <ApplyError message="Name is required" />
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
                    errors={errors.email}
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
                    title="Attach Portfolio/CV"
                    name="cv"
                    register={register}
                    errors={errors.cv}
                    onChange={changeHandler}
                />
                {/*<div className={classes.attach_file}>*/}
                {/*    {isFilePicked ? (*/}
                {/*        <>*/}
                {/*            <ApplyFormField*/}
                {/*                value={selectedFile.name}*/}
                {/*                name="cv"*/}
                {/*                register={register}*/}
                {/*            />*/}
                {/*            <label><ImAttachment />*/}
                {/*                <input type="file" onChange={changeHandler}/>*/}
                {/*            </label>*/}
                {/*        </>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            <ApplyFormField*/}
                {/*                title="Attach Portfolio/CV"*/}
                {/*                name="cv"*/}
                {/*                // options={*/}
                {/*                //     {*/}
                {/*                //         required: true,*/}
                {/*                //     }*/}
                {/*                // }*/}
                {/*                register={register}*/}
                {/*                // value={`${fileRef.current.files[0].name}`}*/}
                {/*            />*/}
                {/*            /!*{errors.cv && errors.cv.type === "required" &&*!/*/}
                {/*            /!*<ApplyError message="Upload your CV"/>*!/*/}
                {/*            /!*}*!/*/}
                {/*            <label><ImAttachment />*/}
                {/*                <input type="file" onChange={changeHandler}  />*/}
                {/*            </label>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</div>*/}
                <ApplyFormField
                    title="Portfolio's link"
                    name="portfolioLink"
                    register={register}
                />
                <button type="submit" className={classes.apply_modal_btn}>APPLY</button>
            </form>
        </div>
    ) : null
}

export default ApplyModal;
