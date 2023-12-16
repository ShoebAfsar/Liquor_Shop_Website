import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { isAuthenticated, logout } from "../utils/TokenUtil";
import { useNavigate } from 'react-router-dom';

export function Navigationbar() {
    const navigate = useNavigate();
    const handleLogOutClick = ()=>{
        logout();
        navigate('/log-in');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"><span className="text-warning">LIQUI</span>VISTA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='me-2'>
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/order-online">
                                <Nav.Link>Order Online</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/bulk-orders">
                                <Nav.Link>Bulk Orders</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about-us">
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/contact-us">
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {!isAuthenticated() ? (
                                <>
                                    <LinkContainer to="/log-in">
                                        <Nav.Link>
                                            <button type="button" className="btn btn-outline-success">
                                                Log In
                                            </button>
                                        </Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to="/sign-up">
                                        <Nav.Link>
                                            <button type="button" className="btn btn-outline-success">
                                                Sign Up
                                            </button>
                                        </Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to="/admin-log-in">
                                        <Nav.Link>
                                            <button type="button" className="btn btn-outline-secondary ">
                                                Admin
                                            </button>
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                            ) : (
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <button type="button" className="btn btn-outline-secondary" onClick={handleLogOutClick}>
                                            Log Out
                                        </button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}