import React from 'react'
import { Button, Form } from "react-bootstrap";

export default function Login() {
    return (
        <div className="container">
            <div className="row"><h3 id="h3Title">Log In</h3></div>
            <div className="row" style={{ marginTop: "7%" }}>
                <div className="col" style={{ paddingRight: "15%" }}>
                    <h1>Welcome to Baby's Food Place</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col" xs={4}>
                    <Form style={{ width: "70%" }} >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="user@domain.com" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="*****" />
                        </Form.Group>
                        <Button variant="success">Log In</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
