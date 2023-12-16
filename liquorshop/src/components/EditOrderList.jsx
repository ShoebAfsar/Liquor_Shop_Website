import { useState } from "react";
import { Container, Col, Form, Row, Button ,Alert} from "react-bootstrap";
import { useParams } from "react-router";
import { fetchProductById } from "../Services/ProductServices";
import { Navigationbar } from "./Navigationbar";

export function EditOrderDetails() {
    const params=useParams();
    const [formData,setFormData]=useState({user:"",phone:"",address:"",id_no:"",price:""})
    const [isSubmitted,setSubmitted]=useState(false)
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const result = await fetchProductById(params.id_no);
          setFormData(result);
          console.log(result);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      };
      
    // const populateOrderState = async () => {
    //     try {
    //         await fetchProductById(formData,params.id_no);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     console.log(params.id_no);
    //     populateOrderState();
    // },[]);

    return (
        <>
        <Navigationbar></Navigationbar>
        <Container className="my-5">
            {formData?
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                User_Name
                            </Form.Label>
                            <Form.Control type="text" value={formData.user} placeholder="user_name" name="user" onChange={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Phone_no.
                            </Form.Label>
                            <Form.Control type="text" value={formData.phone} placeholder="phone_number" name="phone" onChange={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Address
                            </Form.Label>
                            <Form.Control type="text" value={formData.address} placeholder="address" name="address" onChange={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Product_Id
                            </Form.Label>
                            <Form.Control type="text" value={formData.id} placeholder="Product_Id" name="id_no" onChange={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group  className="mb-3" >
                        <Form.Label>
                                Price
                            </Form.Label>
                            <Form.Control type="text" value={formData.price} placeholder="Product_Price" name="price" onChange={handleChange}></Form.Control>
                            </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3}>
                   
                    <Button variant="outline-secondary" type="submit">Update Order Details</Button>
                    </Col>
                </Row>
                
            </Form>:<p></p>
}

            <Row className="mt-3">
                    <Col lg={4}>
                       {isSubmitted?<Alert variant="danger">Something Went Wrong</Alert>:null}
                    </Col>
                </Row>

        </Container>
        </>
    );
}