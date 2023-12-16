import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    return (
        <div className="footer-dark mt-5">
            <footer>
                <Container>
                    <Row>
                        <Col sm={6} md={3} className="item">
                            <h3>Our Team</h3>
                            <ul>
                                <li>Munot Gadale</li>
                                <li>Shoeb Afsar</li>
                                <li>Ram Pachkawade</li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3} className="item">
                            <h3>Help</h3>
                            <ul>
                                <li>Shipping</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                        </Col>
                        <Col md={6} className="item text">
                            <h3>LIQUI VISTA</h3>
                            <p>
                                Step into Liquivista, where every bottle has a purpose,
                                and our purpose is to offer you the best in liquid indulgence.
                                Because life's too short for ordinary drinks.
                                Our library stocks and support local brands as well as
                                international brands ranging from popular well-known labels to rarest find liquors in India.
                            </p>
                        </Col>
                        <Col className="item-social">
                            <h3>Get In Touch</h3>
                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </Col>
                    </Row>
                    <p className="copyright">LiquiVista © 2023</p>
                </Container>
            </footer>
        </div>
    );
};
