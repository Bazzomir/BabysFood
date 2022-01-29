import React, { useState } from 'react';
import { api } from '../../../RESTApi/RestApi';

// const bcrypt = require("bcryptjs");

export default function Register() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confim_password, setConfirmaPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [birthdayError, setBirthdayError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm_passwordError, setconfirm_passwordError] = useState("");

    const formValidation = () => {
        const firstNameError = {};
        const lastNameError = {};
        const emailError = {};
        const birthdayError = {};
        const passwordError = {};
        const confirm_passwordError = {};

        let isValid = true;

        if (FirstName.trim().length === 0) {
            firstNameError.FirstNameRequired = "First name is required";
            isValid = false;
        }

        if (LastName.trim().length === 0) {
            lastNameError.LastNameRequired = "Last name is required";
            isValid = false;
        }

        if (email.trim().length === 0) {
            emailError.EmailRequired = "Email is required";
            isValid = false;
        }

        if (birthday.trim().length === 0) {
            birthdayError.BirthdayRequired = "Birthday is required";
            isValid = false;
        }

        if (password.trim().length === 0) {
            passwordError.PasswordRequired = "Password is required";
            isValid = false;
        }

        if (password.trim().length === 0) {
            confirm_passwordError.ComfirmPasswordRequired = "Repeat Password is required";
            isValid = false;
        }

        setFirstNameError(firstNameError)
        setLastNameError(lastNameError)
        setEmailError(emailError)
        setBirthdayError(birthdayError)
        setPasswordError(passwordError)
        setconfirm_passwordError(confirm_passwordError)
        return isValid;
    }

    const singUp = (event) => {
        event.preventDefault();
        const isValid = formValidation();

        if (!isValid)
            return

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
            <div className="row"><h3 id="h3Title">Create Account<hr /></h3></div>
            <div className="row" >
                <div className="col" id="textHeader" xs={5}>
                    <h1><span id="colorText">Create Your</span> Account</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col">
                    <form style={{ width: "80%" }} name="registerForm" className='form' onSubmit={singUp}>
                        <div className="row mb-3">
                            <div className="col">
                                <label>First Name</label>
                                <input className="form-control" placeholder="John" type="text" value={FirstName} required
                                    onChange={e => { setFirstName(e.target.value) }} />
                                {Object.keys(firstNameError).map((key) => {
                                    return <div className='text-danger'>{firstNameError[key]}</div>
                                })}
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input className="form-control" placeholder="Smith" type="text" value={LastName} required
                                    onChange={e => { setLastName(e.target.value) }} />
                                {Object.keys(lastNameError).map((key) => {
                                    return <div className='text-danger'>{lastNameError[key]}</div>
                                })}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Email</label>
                                <input className="form-control" placeholder="john@smith.com" type="email" value={email} required
                                    onChange={e => { setEmail(e.target.value) }} />
                                {Object.keys(emailError).map((key) => {
                                    return <div className='text-danger'>{emailError[key]}</div>
                                })}
                            </div>
                            <div className="col">
                                <label>Birthday</label>
                                <input className="form-control" type="date" value={birthday} required
                                    onChange={e => { setBirthday(e.target.value) }} />
                                {Object.keys(birthdayError).map((key) => {
                                    return <div className='text-danger'>{birthdayError[key]}</div>
                                })}
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label>Password</label>
                                <input className="form-control" type="password" placeholder="*****" value={password} required
                                    onChange={e => { setPassword(e.target.value) }} />
                                {Object.keys(passwordError).map((key) => {
                                    return <div className='text-danger'>{passwordError[key]}</div>
                                })}

                            </div>
                            <div className="col">
                                <label>Repeat password</label>
                                <input className="form-control" type="password" placeholder="*****" value={confim_password} required
                                    onChange={e => { setConfirmaPassword(e.target.value) }} />
                                {Object.keys(confirm_passwordError).map((key) => {
                                    return <div className='text-danger'>{confirm_passwordError[key]}</div>
                                })}
                            </div>
                        </div>
                        <button variant="success" type='submit' className="btn btn-success" onClick={singUp} >Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}