import React, { useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png';

const bcrypt = require("bcryptjs");

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    (() => {

        const forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach((form) => {
                form.addEventListener('submit', (e) => {
                    if (!form.checkValidity()) {
                        e.preventDefault()
                        e.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()

    return (
        // <section className="login">
        <div className="container">
            <div className="row pt-5">
                <h2 className="title">Sigh In<hr className="mt-2" /></h2>
            </div>
            <div className="row pt-3 pb-6">
                <div className="col-7">
                    <h2><span className="orangeText">Welcome to</span><span className="greyText"> Baby's</span></h2>
                    <div className="d-flex col gap-5 pt-3">
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
                <div className="col-5 d-flex justify-content-end">
                    <div className="row d-flex justify-content-center align-items-center w-100">
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
                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                </div>
                                <h6>Forgot Password</h6>
                            </div>
                            <div className="form-group pb-4 col-12">
                                <button variant="success" className="btn btn-green" type="submit">Log In</button>
                            </div>
                        </form>
                        <h6>Have an account?</h6>
                    </div>
                </div>
            </div>
        </div>
        // </section>
    )
}
