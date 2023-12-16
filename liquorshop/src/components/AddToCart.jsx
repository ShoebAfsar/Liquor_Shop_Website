import { useState } from "react";
import { Container, Col, Form, Row, Button ,Alert} from "react-bootstrap";
import { saveProduct } from "../Services/ProductServices";
import { Navigationbar } from "./Navigationbar";
export function AddToCart() {
    const [formData,setFormData]=useState({user:"",phone:"",address:"",id_no:"",name:"",price:""})
    const [isSubmitted,setIsSubmitted]=useState(false)
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault({user:"",phone:"",address:"",id_no:"",name:"",price:""});
        try{
          const result=  await saveProduct(formData);
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
        <Row className="container text-center mt-5 mb-5">
        <h2>Home {'>'} Place Order</h2>
        </Row>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                User_Name
                            </Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.id_no:null} placeholder="user_name" name="user" onKeyUp={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Phone_no.
                            </Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.name:null} placeholder="phone_number" name="phone" onKeyUp={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Address
                            </Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.price:null} placeholder="address" name="address" onKeyUp={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Product_Id
                            </Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.id_no:null} placeholder="Product_Id" name="id_no" onKeyUp={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Price
                            </Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.price:null} placeholder="Product_Price" name="price" onKeyUp={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                   
                    <Button variant="primary" type="submit">Place Order</Button>
                    </Col>
                </Row>
                
            </Form>
            <Row className="mt-3">
                    <Col lg={4}>
                       {isSubmitted?<Alert variant="success">Order Placed</Alert>:null}
                    </Col>
                </Row>

        </Container>
        </>
    );
}