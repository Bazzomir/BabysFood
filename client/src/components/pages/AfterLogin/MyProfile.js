import React, { useState, useEffect } from 'react';
import { api } from "../../../RESTApi/RestApi";
import avatar from "../../assets/avatar.png";

export default function MyProfile() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const getUser = () => {
        fetch(`${api.root}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401) {
                    alert("Loggin first");
                    localStorage.removeItem('token');
                    window.location = "/login";
                }
                return res.json();
            })
            .then(data => {
                setFirstName(data.user.first_name)
                setLastName(data.user.last_name)
                setEmail(data.user.email)
                setBirthday(data.user.birthday)
                // setPassword(data.user.password)
                // setConfirmaPassword(data.user.password)
            })
    }

    useEffect(() => {
        getUser();
    }, []);

    const editUserProfile = (event) => {
        event.preventDefault();

        // const formData = new FormData();

        // formData.append('first_name', FirstName);
        // formData.append('last_name', LastName);
        // formData.append('email', email);
        // formData.append('birthday', birthday);
        // formData.append('password', bcrypt.hashSync(password));
        // formData.append('password', bcrypt.hashSync(confim_password));

        var user = {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            birthday: birthday,
            password: password,
            confirm_password: confirm_password

        }

        if (password === confirm_password) {

            fetch(`${api.root}/users/edit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(user)
            })
                .then(res => {
                    if (res.status === 401) {
                        alert("Token expired");
                        localStorage.removeItem("token");
                        window.location = "/login";
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data.error) {
                        alert(data.message)
                        window.location.reload();
                    } else { getUser();}
                })
                .catch(err => alert(err))
        } else { alert('The password confirmation does not match. Please try again, but CORRECTLY (:') }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <h3 id="h3Title">My Profile<hr className='mt-2' /></h3>
                        </div>
                    </div>
                    <div className="col-sm-3 md-4">
                        <div className="col" >
                            <img id="avatarPics" src={avatar} alt="" />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-secondary"> CHANGE AVATAR </button>
                        </div>
                    </div>
                    <div className="col-sm-5 md-8" >
                        <form onSubmit={editUserProfile}>
                            <div className="row">
                                <div className="form-group mb-3 col">
                                    <label> First Name </label>
                                    <input className="form-control" placeholder="John" onChange={(e) => setFirstName(e.target.value)} value={FirstName} type="text" />
                                </div>
                                <div className="form-group mb-3 col">
                                    <label> Last Name </label>
                                    <input className="form-control" placeholder="Smith" onChange={(e) => setLastName(e.target.value)} value={LastName} type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label> Email address </label>
                                    <input className="form-control" type="email" placeholder="john@smith.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="form-group col" >
                                    <label>Birthday</label><br />
                                    <input className="form-control" type="date" name="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="form-group mt-3 col" >
                                    <label> Password </label>
                                    <input className="form-control" type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                <div className="form-group mt-3 col" >
                                    <label> Repeat Password </label>
                                    <input className="form-control" type="password" placeholder="******" onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password} />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col mt-4" >
                                    <button type="submit" className="btn btn-success" > SAVE </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}