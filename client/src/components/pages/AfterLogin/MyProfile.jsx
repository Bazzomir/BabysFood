import React, { useState, useEffect } from 'react';
import { api } from "../../../RESTApi/RestApi";
import avatar from "../../../assets/avatar.png";
import ariaLabelText from '../../component/ariaLabelText';
import TitleWithLine from '../../component/TitleWithLine';
import { ButtonAuth } from '../../component/Buttons';

export default function MyProfile() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const getUser = () => {
        fetch(`${api.root}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 500) {
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

                if (data.user.image === `${avatar}` || data.user.image === undefined) {
                    setImage(avatar)
                } else {
                    setImage(`${api.root}/${data.user.image}`)
                }
            })
    }

    useEffect(() => {
        getUser();
    }, []);

    const editUserProfile = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const imageUpload = document.querySelector('input[type="file"]');

        formData.append('first_name', FirstName);
        formData.append('last_name', LastName);
        formData.append('email', email);
        formData.append('birthday', birthday);
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);
        formData.append('image', imageUpload.files[0]);

        if (password === confirmPassword) {

            fetch(`${api.root}/users/edit`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            })
                .then(res => {
                    if (res.status === 401 || res.status === 500) {
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
                    } else { getUser(); }
                })
                .catch(err => alert(err))
        } else { alert('The password confirmation does not match. Please try again, but CORRECTLY (:') }
    }

    return (
        // <div>
        <div className="container">
            <div className="row pt-5 pb-6">
                <TitleWithLine title="My Profile" />
                <div className="row px-0 mx-auto mt-4">
                    <div className="col-sm-12 col-lg-2">
                        <div className="col-12 text-center" >
                            <img className="avatarImg mx-auto" src={image} alt="Avatar Image" />
                        </div>
                        <div className="col mt-4 text-center">
                            <button onClick={() => document.getElementById("fileinput").click()} type="submit" className="btn btn-grey" area-label={ariaLabelText.myProfileAriaLabel.uploadAvatarAriaLabel}> CHANGE AVATAR </button>
                            <input id="fileinput" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="col-lg-10 col-sm-12 justify-content-end" >
                        <div className="row mx-auto px-0 d-flex justify-content-center align-items-center">
                            <form onSubmit={editUserProfile}>
                                <div className="row row-cols-md-2">
                                    <div className="col-md-8">
                                        <div className="row row-cols-md-2">
                                            <div className="form-group p-2 col-sm-12 col-md-6">
                                                <label>First Name</label>
                                                <input className="form-control" placeholder="John" onChange={(e) => setFirstName(e.target.value)} value={FirstName} type="text" />
                                            </div>
                                            <div className="form-group p-2 col-sm-12 col-md-6">
                                                <label>Last Name</label>
                                                <input className="form-control" placeholder="Smith" onChange={(e) => setLastName(e.target.value)} value={LastName} type="text" />
                                            </div>
                                            <div className="form-group p-2 col-sm-12 col-md-6">
                                                <label>Email address</label>
                                                <input className="form-control" type="email" placeholder="john@smith.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                                            </div>
                                            <div className="form-group p-2 col-sm-12 col-md-6" >
                                                <label>Birthday</label><br />
                                                <input className="form-control" type="date" name="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                                            </div>
                                            <div className="form-group p-2 col-sm-12 col-md-6" >
                                                <label>Password</label>
                                                <input className="form-control" type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} value={password} />
                                            </div>
                                            <div className="form-group p-2 col-sm-12 col-md-6" >
                                                <label>Repeat Password</label>
                                                <input className="form-control" type="password" placeholder="******" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <div className="form-group col-12 p-2" >
                                            <label htmlFor="aboutMe">About Me</label>
                                            <textarea className="form-control h-100 overflow-hidden" rows="8" />
                                        </div>
                                    </div>
                                </div>
                                <ButtonAuth classNameDiv="col-12 mt-4 text-end" classNameBtn="btn-green text-uppercase col-md-2" buttonName="Save" ariaLabel={ariaLabelText.myProfileAriaLabel.saveProfileAriaLabel} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}