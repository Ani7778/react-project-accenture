import classes from "./Footer.module.scss";
import {FaFacebookF, FaLinkedinIn} from "react-icons/all";
import React, {useState} from "react";
import {ReactComponent as Logo} from "../../images/softshark-logo.svg";
import {useForm, Controller} from "react-hook-form";
import FormField from "./FormField";
import ErrorMessage from "./ErrorMessage";
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import {useDispatch, useSelector} from "react-redux";
import {sendMessageRequest} from "../../redux/actions/sendMessageActions";
import Loading from "./Loader";


function Footer() {
    const dispatch = useDispatch();

    const {loading} = useSelector((state) => {
        return state.sendMessage;
    });

    const { register, formState: { errors }, handleSubmit,control } = useForm();

    const sendMessage = (data)=> {
        dispatch(sendMessageRequest());
        console.log(data);
    }

    const [value, setValue] = useState();

    return (
        <div className={classes.container} id='footer'>
            <Logo  className={classes.logo}/>
            <div className={classes.info_container}>
                <div className={classes.info_section}>
                    <h1>Get In Touch</h1>
                    <div className={classes.border} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                    <div className={classes.social_icons}>
                        <a href="https://www.linkedin.com/company/75872154/" target="_blank">
                            <FaLinkedinIn className={classes.icon}/>
                        </a>
                        <a href="https://www.facebook.com/SoftShark-109783568013020" target="_blank">
                            <FaFacebookF className={classes.icon}/>
                        </a>
                    </div>
                </div>
                <form className={classes.form} onSubmit={handleSubmit(sendMessage)}>
                    {loading &&
                        <div className={classes.spinner}>
                            <Loading />
                        </div>
                    }
                    {!loading &&
                        <>
                            <h1>Send Us message</h1>
                            <FormField
                                title="Name"
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
                            <ErrorMessage message="Name is required" />
                            }
                            <PhoneInput
                                name="phone"
                                {...register("phone", { required: true })}
                                className={`${classes.input_field} ${errors.phone ? classes.invalid : ''}`}
                                placeholder="Phone Number"
                                international
                                countryCallingCodeEditable={false}
                                control={control}
                                rules={{ required: true }}
                                value={value}
                                onChange={setValue}/>
                            {/*{errors.phone && errors.phone.type === "required" &&*/}
                            {/*<ErrorMessage message="Phone Number is required"/>*/}
                            {/*}*/}
                            <FormField
                                title="Email"
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
                            <ErrorMessage message="Email is required"/>
                            }
                            {errors.email && errors.email.type === "pattern" &&
                            <ErrorMessage message="Enter a valid email address"/>
                            }
                            <textarea
                                name="message"
                                placeholder="Message"
                                {...register("message", { required: true })}
                            />
                            {errors.message && errors.message.type === "required" &&
                            <ErrorMessage message="Message is required"/>
                            }
                            <button type="submit" className={classes.send_btn}>Send Message</button>
                        </>
                    }
                </form>
            </div>
            <div className={classes.privacy_container}>
                <p>Privacy & Policy</p>
                <span>Copyright 2021</span>
            </div>
        </div>
    );
}

export default Footer;
