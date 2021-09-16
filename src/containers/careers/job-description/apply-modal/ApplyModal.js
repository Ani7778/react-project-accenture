import classes from "../JobDescription.module.scss";
import ApplyFormField from "./ApplyFormField";
import ApplyError from "./ApplyErrors";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {ImAttachment} from "react-icons/all";

function ApplyModal({open, close}) {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const { register, formState: { errors }, handleSubmit } = useForm();

    const applyForJob = (data)=> {
        console.log(data);
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
                <div className={classes.attach_file}>
                    {isFilePicked ? (
                        <>
                            <ApplyFormField
                                value={selectedFile.name}
                                name="cv"
                                register={register}
                            />
                            <label><ImAttachment />
                                <input type="file" onChange={changeHandler}/>
                            </label>
                        </>
                    ) : (
                        <>
                            <ApplyFormField
                                title="Attach Portfolio/CV"
                                name="cv"
                                register={register}
                                // value={`${fileRef.current.files[0].name}`}
                            />
                            <label><ImAttachment />
                                <input type="file" onChange={changeHandler}/>
                            </label>
                        </>
                    )}
                </div>
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
