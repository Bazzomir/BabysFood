import React, { useState, useEffect } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png';
import TitleWithLine from '../../component/TitleWithLine';
import ariaLabelText from '../../component/ariaLabelText';
import { ButtonAuth, ButtonLink } from '../../component/Buttons';
// import { NavLink } from 'react-router-dom';

const bcrypt = require("bcryptjs");

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const logIn = (event) => {
        event.preventDefault();

        const user = { email: email, password: password }

        fetch(`${api.root}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json()
                .then(data => {
                    let compareData = bcrypt.compareSync(password, `${data.password}`);
                    if (compareData === true || data.error === false) {
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("token", data.token);
                        window.location = "/myprofile"
                    } else { alert("Invalid credentials") }
                }))
            .catch(err => alert(err));
    }

    // (() => {

    //     const forms = document.querySelectorAll('.needs-validation')

    //     Array.prototype.slice.call(forms)
    //         .forEach((form) => {
    //             form.addEventListener('submit', (e) => {
    //                 if (!form.checkValidity()) {
    //                     e.preventDefault()
    //                     e.stopPropagation()
    //                 }
    //                 form.classList.add('was-validated')
    //             }, false)
    //         })
    // })()

    return (
        // <section className="login">
        <div className="container">
            <div className="row pt-5 pb-6">
                {/* <div className="row">
                    <h2 className="title">Sigh In<hr className="mt-2" /></h2>
                </div> */}
                <TitleWithLine title="Sigh In" />
                <div className="row pt-3 pb-6">
                    <h2 className="col-12"><span className="orangeText">Welcome to</span><span className="greyText"> Baby's</span></h2>
                    <div className="row flex-sm-row-reverse p-0 m-0 w-100">
                        <div className="col-md-6 col-sm-12">
                            <div className="row d-flex justify-content-center align-items-center">
                                <form className="needs-validation col-12" onSubmit={logIn} noValidate>
                                    <div className="form-group pb-4 col">
                                        <label htmlFor="validationCustom01" className="form-label m-0">Email address</label>
                                        <input className="form-control" type="email" placeholder="user@domain.com" id="validationCustom01" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        <div className="invalid-feedback">
                                            Please enter your email address.
                                        </div>
                                    </div>
                                    <div className="form-group pb-4 col">
                                        <label htmlFor="validationCustom02" className="form-label m-0">Password</label>
                                        <input className="form-control" type="password" placeholder="********" id="validationCustom02" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                        <div className="invalid-feedback">
                                            Please enter your password.
                                        </div>
                                    </div>
                                    <div className="form-group pb-4 col-12 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberMe" aria-label={ariaLabelText.loginAriaLabel.rememberMeAriaLabel} />
                                            <label className="form-check-label" htmlFor="rememberMe" >
                                                Remember Me
                                            </label>
                                        </div>
                                        {/* <h6 aria-label={ariaLabelText.loginAriaLabel.forgotPasswordAriaLabel}>Forgot Password</h6> */}
                                        <ButtonLink aria-label="loginAriaLabel.forgotPasswordAriaLabel" className="haveAnAcc" divClassName="pt-0" linkName="I forgot my password" />
                                    </div>
                                    {/* <div className="form-group pb-4 col-12">
                                <button variant="success" className="btn btn-green" type="submit" aria-label={ariaLabelText.loginAriaLabel.logInBtnAriaLabel}>Log In</button>
                            </div> */}
                                    <ButtonAuth classNameBtn="btn-green" ariaLabel={ariaLabelText.loginAriaLabel.logInBtnAriaLabel} buttonName="Log In" />
                                </form>
                                {/* <div> */}
                                <ButtonLink to="/register" ariaLabel={ariaLabelText.loginAriaLabel.dontHaveAnAcc} className="haveAnAcc" divClassName="pt-4" linkName="Have an account?" />
                                {/* <h6 aria-label={ariaLabelText.loginAriaLabel.dontHaveAnAcc}>Have an account?</h6> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex col-12 gap-5 pt-3">
                                {/* <p className="greyText"><img className="logo" src={logo} alt="Logo" />
                            Join other Baby's Food Place users and get access to thousands of recipes, cooking tips and hacks.
                            Browse easy recipes for breakfast, lunch, brunch, dinner and more.
                            Find thousands of popular recipes approved by our test kitchen and cooked by our community.
                        </p> */}
                                <p className="greyText"><img className="logo" src={logo} alt="Main Logo" />
                                    Join other Baby's Food Place users and gain exclusive access to a treasure trove of culinary delights! Explore our extensive collection of recipes, cooking tips, and clever kitchen hacks that cater to every palate and dietary preference. Whether you're in search of a quick breakfast fix, a satisfying lunch, a delightful brunch spread, or a sumptuous dinner feast, we've got you covered. Our platform features thousands of easy-to-follow recipes that have been meticulously curated and tested by our dedicated team of chefs in our test kitchen, ensuring that each dish meets the highest standards of taste and quality. Plus, with contributions from our vibrant community of home cooks, you'll discover a wealth of popular recipes that have been tried, tested, and loved by fellow food enthusiasts. Join us today and embark on a culinary journey filled with flavor, creativity, and endless inspiration!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </section>
    )
}
