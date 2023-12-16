import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Navigationbar } from './Navigationbar';
import { useState } from 'react';
import { messagesend } from '../Services/MessageService';

export function BulkOrders(){
    const [formData,setFormData]=useState({message:"",name:"",email:"",shippinginformation:"",orderdetails:""})
    const [isSubmitted,setIsSubmitted]=useState(false)
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault({message:"",name:"",email:"",shippinginformation:"",orderdetails:""});
        try{
          const result=  await messagesend(formData);
          setFormData({})
          setIsSubmitted(true);
          setTimeout(()=>{
          setIsSubmitted(false);
          },1500);

          console.log(result.message);
        }
        catch(error){
            console.log(error) 
        }
    }
    return (
        <>
            <Navigationbar></Navigationbar>
            <Container>
                <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mt-5">
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
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Shipping Information</Form.Label>
                                <Form.Control type="text" placeholder="Enter Shipping Information" name="shippinginformation" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Order Details</Form.Label>
                                <Form.Control type="text" placeholder="Enter Order Details" name="orderdetails" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={2}>
                            <Button variant="primary" type="submit">Send Message</Button>
                        </Col>
                    </Row>

                    <Row className="mt-3 justify-content-md-center" >
                        <Col lg={5}>
                        {isSubmitted ? <Alert variant="success" className="mt-3">
                            Thank you. We will get back to you on your request shortly!
                        </Alert> : null}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}