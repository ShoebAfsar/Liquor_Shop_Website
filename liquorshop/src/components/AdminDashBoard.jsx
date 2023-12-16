import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Navigationbar } from './Navigationbar';
import { LinkContainer } from 'react-router-bootstrap';

export function AdminDashBoard() {
    return (
        <>
            <Navigationbar></Navigationbar>
            <Container>
                <div>
                    <h2 className='mt-5'>Welcome Admin..</h2>
                </div>

                <Row className="mt-5">
                    
                    <Col lg={4} md={6} sm={12} className="mb-5">
                        <LinkContainer to="/user-details">
                            <Nav.Link>
                                <button type="button" className="btn btn-outline-secondary ">
                                    Users List
                                </button>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-5">
                        <LinkContainer to="/order-list">
                            <Nav.Link>
                                <button type="button" className="btn btn-outline-secondary ">
                                    Orders
                                </button>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-5">
                        <LinkContainer to="/bulk-order-list">
                            <Nav.Link>
                                <button type="button" className="btn btn-outline-secondary ">
                                    Messages
                                </button>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


