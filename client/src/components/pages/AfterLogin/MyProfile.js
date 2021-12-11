import React from 'react';
import NavbarAfterLogin from './NavbarAfterLogin';
import { Form, Col } from "react-bootstrap";

export default function MyProfile() {
    return (
        <div>
            <NavbarAfterLogin />
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <h3>My Profile</h3>
                        </div>
                    </div>
                    <div className="col" xs={6} md={4}>
                        <div className="col">
                            <img src="https://www.pinclipart.com/picdir/big/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" roundedCircle style={{ width: '171px' }, { height: '180px' }} />
                        </div>
                        <div className="col">
                            <button variant="outline-secondary">CHANGE AVATAR</button>
                        </div>
                    </div>
                    <div className="col" xs={12} md={8}>
                        <div className="formaAccount"  >
                            <Form>
                                <div className="row" >
                                    <div className="col">
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control placeholder="First Name" />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control placeholder="Last Name" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col">
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group as={Col} controlId="formGridDOB">
                                            <Form.Label>Birthday</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col">
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col">
                                        <button variant="success" >SAVE</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
