import React, { useState, useEffect } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png';

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
            <div className="row pt-5">
                <h2 className="title">Sing Up<hr className="mt-2" /></h2>
            </div>
            <div className="row pt-3 pb-6" >
                <div className="col-7">
                    <h2><span className="orangeText">Create Your</span> <span className="greyText"> Account</span></h2>
                    <p className="greyText"><img className="logo" src={logo} alt="Logo" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <div className="row d-flex justify-content-center align-items-center w-100">
                        <form name="registerForm" className="needs-validation col-12" onSubmit={singUp} noValidate>
                            <div className="row pb-4">
                                <div className="col-xl-6 col-xs-12">
                                    <label htmlFor="first_name" className="form-label m-0">First Name</label>
                                    <input className="form-control" type="text" placeholder="John" id="first_name" required value={FirstName}
                                        onChange={e => { setFirstName(e.target.value) }} />
                                    {/* {Object.keys(firstNameError).map((key) => {
                                        return <div className="text-danger">{firstNameError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your first name.
                                    </div>
                                </div>
                                <div className="col-xl-6 col-xs">
                                    <label htmlFor="last_name" className="form-label m-0">Last Name</label>
                                    <input className="form-control" type="text" placeholder="Doe" id="last_name" required value={LastName}
                                        onChange={e => { setLastName(e.target.value) }} />
                                    {/* {Object.keys(lastNameError).map((key) => {
                                        return <div className="text-danger">{lastNameError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your last name.
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-xl-6 col-xs">
                                    <label htmlFor="email" className="form-label m-0">Email</label>
                                    <input className="form-control" placeholder="user@domain.com" type="email" id="email" value={email} required
                                        onChange={e => { setEmail(e.target.value) }} />
                                    {/* {Object.keys(emailError).map((key) => {
                                        return <div className="text-danger">{emailError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your email address.
                                    </div>
                                </div>
                                <div className="form-group col-xl-6 col-xs">
                                    <label htmlFor="birthday" className="form-label m-0">Birthday</label>
                                    <input className="form-control" type="date" value={birthday} id="birthday" required
                                        onChange={e => { setBirthday(e.target.value) }} />
                                    {/* {Object.keys(birthdayError).map((key) => {
                                        return <div className="text-danger">{birthdayError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your birthday.
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="form-group col-xl-6 col-xs">
                                    <label htmlFor="password" className="form-label m-0">Password</label>
                                    <input className="form-control" placeholder="********" type="password" id="password" value={password} required
                                        onChange={e => { setPassword(e.target.value) }} />
                                    {/* {Object.keys(passwordError).map((key) => {
                                        return <div className="text-danger">{passwordError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your password.
                                    </div>
                                </div>
                                <div className="form-group col-xl-6 col-xs">
                                    <label htmlFor="confim_password" className="form-label m-0">Repeat password</label>
                                    <input className="form-control" placeholder="********" type="password" id="confim_password" value={confim_password} required
                                        onChange={e => { setConfirmPassword(e.target.value) }} />
                                    {/* {Object.keys(confirmPasswordError).map((key) => {
                                        return <div className="text-danger">{confirmPasswordError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter your password.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group pb-4 col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={agree} id="invalidCheck" required onChange={e => { setAgree(e.target.value) }} />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    {/* {Object.keys(checkBoxError).map((key) => {
                                        return <div className="text-danger">{checkBoxError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group pb-4 col-12">
                                <button variant="success" type="submit" className="btn btn-green">Create Account</button>
                            </div>
                        </form>
                        <h6>Have an account?</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}