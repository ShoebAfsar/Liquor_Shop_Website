import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import { Navigationbar } from './Navigationbar';
import { login } from '../Services/UserService.js';
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            localStorage.setItem("token", result.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    return (
        <>
            <Navigationbar></Navigationbar>

            <Container>
                <div className="container d-flex justify-content-center align-items-center">
                    <h2 className='mt-5'>User Login</h2>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mt-4">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={1}>
                            <Button variant="primary" type="submit">Log In</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" >
                        <Col lg={3}>
                            {loginError ? <Alert variant="danger" className="mt-3">Invalid Mail or Password</Alert> : null}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}