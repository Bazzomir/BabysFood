import React from 'react';
import NavbarAfterLogin from '../../Header/NavbarAfterLogin';
import avatar from "../../assets/avatar.png";

export default function MyProfile() {
    return (
        <div>
            <NavbarAfterLogin />
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <h3 id="h3Title">My Profile<hr /></h3>
                        </div>
                    </div>
                    <div className="col" xs={6} md={4}>
                        <div className="col" >
                            <img id="avatarPics" src={avatar} alt="" />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-secondary"> CHANGE AVATAR </button>
                        </div>
                    </div>
                    <div className="col" xs={12} md={8} >
                        <form>
                            <div className="row">
                                <div className="form-group mb-3 col">
                                    <label> First Name </label>
                                    <input className="form-control" placeholder="John" />
                                </div>
                                <div className="form-group mb-3 col">
                                    <label> Last Name </label>
                                    <input className="form-control" placeholder="Smith" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label> Email address </label>
                                    <input className="form-control" type="email" placeholder="john@smith.com" />
                                </div>
                                <div className="form-group col" >
                                    <label for="birthday">Birthday</label>
                                    <input type="date" id="birthday" name="birthday"></input>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="form-group col" >
                                    <label> Password </label>
                                    <input className="form-control" type="password" placeholder="******" />
                                </div>
                                <div className="form-group col" >
                                    <label> Repeat Password </label>
                                    <input className="form-control" type="password" placeholder="******" />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col" >
                                    <button type="submit" className="btn btn-success"> SAVE </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}