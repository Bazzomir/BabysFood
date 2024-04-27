import React, { useState, useEffect } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png';
import ariaLabelText from '../../component/ariaLabelText';
import { ButtonAuth, ButtonLink } from '../../component/Buttons';
import TitleWithLine from '../../component/TitleWithLine';
import { InputCheck, InputUser } from '../../component/Inputs';

// const bcrypt = require("bcryptjs");

export default function Register() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confim_password, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [birthdayError, setBirthdayError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPasswordError, setConfirmPasswordError] = useState("");
    // const [checkBoxError, setCheckBoxError] = useState("");

    // const formValidation = () => {
    //     const firstNameError = {};
    //     const lastNameError = {};
    //     const emailError = {};
    //     const birthdayError = {};
    //     const passwordError = {};
    //     const confirmPasswordError = {};
    //     const checkBoxError = {};

    //     let isValid = true;

    //     if (FirstName.trim().length === 0) {
    //         firstNameError.FirstNameRequired = "Please enter your first name.";
    //         isValid = false;
    //     }

    //     if (LastName.trim().length === 0) {
    //         lastNameError.LastNameRequired = "Please enter your last name.";
    //         isValid = false;
    //     }

    //     if (email.trim().length === 0) {
    //         emailError.EmailRequired = "Please enter your email address.";
    //         isValid = false;
    //     }

    //     if (birthday.trim().length === 0) {
    //         birthdayError.BirthdayRequired = "Please enter your birthday.";
    //         isValid = false;
    //     }

    //     if (password.trim().length === 0) {
    //         passwordError.PasswordRequired = "Please enter your password.";
    //         isValid = false;
    //     }

    //     if (password.trim().length === 0) {
    //         confirmPasswordError.ComfirmPasswordRequired = "Please enter your password.";
    //         isValid = false;
    //     }

    //     if (agree.trim().length === 0) {
    //         checkBoxError.CheckBoxRequired = "You must agree before submitting.";
    //         isValid = false;
    //     }

    //     setFirstNameError(firstNameError);
    //     setLastNameError(lastNameError);
    //     setEmailError(emailError);
    //     setBirthdayError(birthdayError);
    //     setPasswordError(passwordError);
    //     setConfirmPasswordError(confirmPasswordError);
    //     setCheckBoxError(checkBoxError);
    //     return isValid;

    // }

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');

        const handleSubmit = (e) => {
            const form = e.target;

            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }

            form.classList.add('was-validated');
        };

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', handleSubmit);
        });

        return () => {
            Array.from(forms).forEach(form => {
                form.removeEventListener('submit', handleSubmit);
            });
        };
    }, []);

    const singUp = (event) => {
        event.preventDefault();
        // const isValid = formValidation();

        // if (!isValid)
        //     return

        const register = {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            birthday: birthday,
            // password: bcrypt.hashSync(password),
            password: password,
            confim_password: confim_password
        }

        if (password === confim_password) {
            fetch(`${api.root}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(register)
            })
                .then(res => res.json())
                .then((data) => {
                    if (!data.error) {
                        alert(data.message)
                        window.location = "/login"
                    } else { alert(data.message) }
                })
                .catch(err => alert(err))
        } else { alert('The password confirmation does not match. Please try again, but CORRECTLY (:') }
    }

    return (
        <div className="container">
            <div className="row pt-5 pb-6">
                {/* <div className="row pt-5">
                    <h2 className="title">Sing Up<hr className="mt-2" /></h2>
                </div> */}
                <TitleWithLine title="Sing Up" />
                <div className="row pt-3 pb-6" >
                    <h2 className="col-12" ><span className="orangeText">Create Your</span><span className="greyText"> Account</span></h2>
                    <div className="row flex-sm-row-reverse p-0 m-0 w-100">
                        <div className="col-md-6 col-sm-12">
                            <div className="row d-flex justify-content-center align-items-center">
                                <form name="registerForm" className="needs-validation col-12" onSubmit={singUp} noValidate>
                                    <div className="form-group">
                                        <div className="row pb-4">
                                            {/* <div className="col-xl-6 col-xs-12">
                                            <label htmlFor="first_name" className="form-label m-0">First Name</label>
                                            <input className="form-control" type="text" placeholder="John" id="first_name" required value={FirstName}
                                                onChange={e => { setFirstName(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your first name.
                                            </div>
                                        </div>  */}
                                            <InputUser htmlFor="first_name" labelName="First Name" type="text" placeholder="John" classNameDiv="col-xl-6 col-xs-12" id="first_name" value={FirstName} onChange={e => { setFirstName(e.target.value) }} feedback="Please enter your first name." />
                                            {/* <div className="col-xl-6 col-xs">
                                            <label htmlFor="last_name"sssssssssssssssssssssssssss className="form-label m-0">Last Name</label>
                                            <input className="form-control" type="text" placeholder="Doe" id="last_name" required value={LastName}
                                                onChange={e => { setLastName(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your last name.
                                            </div>
                                        </div> */}
                                            <InputUser htmlFor="last_name" labelName="Last Name" type="text" placeholder="Doe" classNameDiv="col-xl-6 col-xs-12" id="last_name" value={LastName} onChange={e => { setLastName(e.target.value) }} feedback="Please enter your last name." />
                                        </div>
                                        <div className="row pb-4">
                                            {/* <div className="col-xl-6 col-xs">
                                            <label htmlFor="email" className="form-label m-0">Email</label>
                                            <input className="form-control" placeholder="user@domain.com" type="email" id="email" value={email} required
                                                onChange={e => { setEmail(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your email address.
                                            </div>
                                        </div> */}
                                            <InputUser htmlFor="email" labelName="Email" type="email" placeholder="user@domain.com" classNameDiv="col-xl-6 col-xs-12" id="email" value={email} onChange={e => { setEmail(e.target.value) }} feedback="Please enter your email address." />
                                            {/* <div className="form-group col-xl-6 col-xs">
                                            <label htmlFor="birthday" className="form-label m-0">Birthday</label>
                                            <input className="form-control" type="date" value={birthday} id="birthday" required
                                                onChange={e => { setBirthday(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your birthday.
                                            </div>
                                        </div> */}
                                            <InputUser htmlFor="birthday" labelName="Birthday" type="date" classNameDiv="col-xl-6 col-xs-12" id="birthday" value={birthday} onChange={e => { setBirthday(e.target.value) }} feedback="Please enter your birthday." />
                                        </div>
                                        <div className="row pb-4">
                                            {/* <div className="form-group col-xl-6 col-xs">
                                            <label htmlFor="password" className="form-label m-0">Password</label>
                                            <input className="form-control" placeholder="********" type="password" id="password" value={password} required
                                                onChange={e => { setPassword(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your password.
                                            </div>
                                        </div> */}
                                            <InputUser htmlFor="password" labelName="Password" type="password" classNameDiv="col-xl-6 col-xs-12" id="password" value={password} placeholder="********" onChange={e => { setPassword(e.target.value) }} feedback="Please enter your password." />
                                            {/* <div className="form-group col-xl-6 col-xs">
                                            <label htmlFor="confim_password" className="form-label m-0">Repeat password</label>
                                            <input className="form-control" placeholder="********" type="password" id="confim_password" value={confim_password} required
                                                onChange={e => { setConfirmPassword(e.target.value) }} />
                                            <div className="invalid-feedback">
                                                Please enter your password.
                                            </div>
                                        </div> */}
                                            <InputUser htmlFor="confim_password" labelName="Repeat password" type="password" classNameDiv="col-xl-6 col-xs-12" id="confim_password" value={confim_password} placeholder="********" onChange={e => { setConfirmPassword(e.target.value) }} feedback="Please enter your password." />
                                        </div>
                                        <div className="form-group pb-4 col-12">
                                            {/* <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={agree} id="invalidCheck" required onChange={e => { setAgree(e.target.value) }} aria-label={ariaLabelText.createAccAriaLabel.AgreeTC} />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div> */}
                                            <InputCheck value={agree} required onChange={e => { setAgree(e.target.value) }} ariaLabel={ariaLabelText.createAccAriaLabel.AgreeTC} id="invalidCheck" htmlFor="invalidCheck" labelName="Agree to terms and conditions" feedback="You must agree before submitting." />
                                        </div>
                                        {/* <div className="form-group pb-4 col-12">
                                            <button variant="success" type="submit" className="btn btn-green" aria-label={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel}>Create Account</button>
                                        </div> */}
                                        <ButtonAuth classNameBtn="btn-green" ariaLabel={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel} buttonName="Create Account" />
                                    </div>
                                </form>
                                {/* <h6 aria-label={ariaLabelText.createAccAriaLabel.haveAnAcc}>Have an account?</h6> */}
                                <ButtonLink to="/login" ariaLabel={ariaLabelText.createAccAriaLabel.haveAnAcc} className="haveAnAcc" divClassName="pt-4" linkName="Have an account?" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            {/* <p className="greyText"><img className="logo" src={logo} alt="Logo" />
                                Wondering what to make for dinner tonight?
                                Baby's Food Place is here to help you cook delicious meals with less stress and more joy.
                                We offer recipes and cooking advice for home cooks, by home cooks.
                            </p> */}
                            <p className="greyText"><img className="logo" src={logo} alt="Main Logo" />
                                Feeling indecisive about tonight's dinner? <br />Let Baby's Food Place take the guesswork out of mealtime and bring joy back into your kitchen!<br />Our platform is designed to inspire and empower home cooks like you to create delicious meals with ease and enjoyment. Say goodbye to mealtime stress and hello to culinary bliss as we provide you with a wide array of recipes, cooking tips, and guidance tailored specifically for home cooks, by home cooks. Whether you're a seasoned chef or just starting out on your culinary journey, our collection of tried-and-true recipes and expert advice will equip you with the tools and confidence you need to whip up memorable meals that will delight your family and friends. <br /> Join our community of passionate food enthusiasts and let's make cooking dinner a delightful experience together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}