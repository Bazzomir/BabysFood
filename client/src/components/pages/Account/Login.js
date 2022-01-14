import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../Header/Navbar';
import { useNavigate } from "react-router-dom"
import { logIn } from '../../../redux/ducks/auth';

export default function Login(props) {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (event) => {
        event.preventDefault();

        logIn(email, password)(dispatch);

        // fetch(`${api.root}/users/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(loginInfo)
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         if (!data.error) {
        //             alert(data.message)
        //             navigate("/home");
        //         }
        //         else {
        //             throw new Error(data.message);
        //         }
        //     })
        //     .catch(err => alert(err))
    }
    return (
        <div className="container">
            <Navbar />
            <div className="row"><h3 id="h3Title">Log In<hr /></h3></div>
            <div className="row" >
                <div className="col" id="textHeader">
                    <h1><span id="colorText" >Welcome to</span> Baby's</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col" xs={4}>
                    <form style={{ width: "70%" }} >
                        <div className="form-group mb-3">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="user@domain.com" value={email} onChange={e => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group mb-4">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="*****" value={password} onChange={e => { setPassword(e.target.value) }} />
                        </div>
                        <button variant="success" className="btn btn-success" onClick={handleLogin}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
