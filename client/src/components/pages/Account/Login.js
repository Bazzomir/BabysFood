import React, { useState } from 'react';
import Navbar from '../../Header/Navbar';
import { api } from '../../../RESTApi/RestApi';
import { useNavigate  } from "react-router-dom"

export default function Login(props) {
    let navigate  = useNavigate ();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const logIn = (event) => {
        event.preventDefault();
        
        const loginInfo = {
            email: email,
            password: password
        }

        fetch(`${api.root}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (!data.error) {
                    alert(`Successfully logged in`)
                    navigate("/home");
                }
                else
                    throw new Error(data.message);
            })
            .catch(err => alert(err))
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
                        <button variant="success" className="btn btn-success" onClick={logIn}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
