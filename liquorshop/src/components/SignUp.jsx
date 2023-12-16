import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import { Navigationbar } from './Navigationbar';
import { signup } from '../Services/UserService';
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
    const [signUpError,setSignUpError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
//TODO-Handle the phone and Email Error separately

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signup(formData);
            console.log(result);
            navigate("/log-in");
        } catch (error) {
            console.log(error);
            setSignUpError(true);
            setTimeout(()=>{
                setSignUpError(false);
            },2000);
        }
    }

    return (
        <>
            <Navigationbar></Navigationbar>
            <Container>
                <div className="container d-flex justify-content-center align-items-center">
                    <h2 className='mt-5'>Become a Member</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mt-3">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
                                {signUpError ? <Alert variant="danger" className="mt-3">User with this phone number already exists.</Alert> : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                                {signUpError ? <Alert variant="danger" className="mt-3">User with this email already exists.</Alert> : null}
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
                            <Button variant="primary" type="submit">Sign Up</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}