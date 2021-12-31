import React, { useState } from 'react';
import Navbar from '../../Header/Navbar';
import {api} from '../../../RESTApi/RestApi';

export default function Register() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confim_password, setConfirmaPassword] = useState("");

    const handleSubmitClick = () => {
        const register = {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            birthday: birthday,
            password: password,
            confim_password: confim_password
        }
        fetch(`${api.root}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
        .then(alert(`Account is created`))
        .catch(err => alert(err))
    }


    return (
        <div className="container">
            <Navbar />
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
                    <form style={{ width: "80%" }} >
                        <div className="row mb-3">
                            <div className="col">
                                <label>First Name</label>
                                <input className="form-control" placeholder="John" type="text" value={FirstName}
                                    onChange={e => { setFirstName(e.target.value) }} />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input className="form-control" placeholder="Smith" type="text" value={LastName}
                                    onChange={e => { setLastName(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Email</label>
                                <input className="form-control" placeholder="john@smith.com" type="email" value={email}
                                    onChange={e => { setEmail(e.target.value) }} />
                            </div>
                            <div className="col">
                                <label>Birthday</label>
                                <input className="form-control" type="date" value={birthday}
                                    onChange={e => { setBirthday(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label>Password</label>
                                <input className="form-control" type="password" placeholder="*****" value={password}
                                    onChange={e => { setPassword(e.target.value) }} />
                            </div>
                            <div className="col">
                                <label>Repeat password</label>
                                <input className="form-control" type="password" placeholder="*****" value={confim_password}
                                    onChange={e => { setConfirmaPassword(e.target.value) }} />
                            </div>
                        </div>
                        <button variant="success" className="btn btn-success" onClick={handleSubmitClick} >Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
