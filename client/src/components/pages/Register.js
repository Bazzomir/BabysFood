import React from 'react'
import { Button, Form } from "react-bootstrap";

export default function Register() {
    return (
        <div className="container">
            <div className="row"><h3 id="h3Title">Create Account</h3></div>
            <div className="row" style={{ marginTop: "7%" }}>
                <div className="col" style={{ paddingRight: "10%" }} xs={5}>
                    <h1>Create Your Account</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col">
                    <Form style={{ width: "80%" }} >
                        <div className="row mb-3">
                            <div className="col">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="John" type="text" />
                            </div>
                            <div className="col">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Smith" type="text" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="john@smith.com" />
                            </div>
                            <div className="col">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control type="date" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="*****" />
                            </div>
                            <div className="col">
                                <Form.Label>Repeat password</Form.Label>
                                <Form.Control type="password" placeholder="*****" />
                            </div>
                        </div>
                        <Button variant="success">Create Account</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
