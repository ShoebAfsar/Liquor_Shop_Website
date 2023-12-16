/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navigationbar } from './Navigationbar';
import teamMember1Image from '../img/ram-pic.jpg';
import teamMember2Image from '../img/shoeb-pic.png';
import teamMember3Image from '../img/munot-pic.png';
import backimg from '../img/img-1.jpg'
import { Container } from "react-bootstrap";
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function AboutUs() {
    return (
        <>
            <Navigationbar></Navigationbar>
            <section className="section-white mt-5">
                <div className="container text-center">
                    <h1>About Us</h1>
                    <p>Who are we</p>
                    <Container>
                        <h5>We are a group of modern stores that offer our customers access to vast selection of spirits,
                            Wines and beers from the four corners of the globe. With over 1500 brands, Our library stocks
                            and support local brands as well as international brands ranging from popular well-known labels
                            to rarest find liquors in India. We pride ourselves on stocking a vast and curated selection of liquor,
                            wine and beer, and if we don’t have something you’re looking for, our team will work to stock it..
                        </h5>
                        <h5>
                            With a legacy of over three decades, we have the credibility and experience to understand your demands
                            and help you find that ideal bottle you are looking for. Whether you are looking for a single bottle,
                            few bottles for any occasion or corporate orders, we got you covered. Your one stop shop for all your alcohol needs.
                        </h5>
                    </Container>
                </div>
            </section>
            <img src={backimg} className="bck-img mt-4" style={{ width: '100%', height: '90vh' }} alt="pic" />
            <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Meet The Team</h2>
                            <p className="section-subtitle mt-3">Three minds, countless flavors. Our liquor trio is on a mission to elevate your drinking experience.</p>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={teamMember2Image} className="team-img" style={{ width: '100%', height: '60vh' }} alt="pic" />
                                <div className="container text-center mt-4">
                                    <h3>Shoeb Afsar</h3>
                                    <div className="item-social mt-4">
                                        <a href="https://www.linkedin.com/in/shoeb-afsar-20166b223/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={teamMember3Image} className="team-img" style={{ width: '100%', height: '60vh' }} alt="pic" />
                                <div className="container text-center mt-4">
                                    <h3>Munot Gadale</h3>
                                    <div className="item-social mt-4">
                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={teamMember1Image} className="team-img" style={{ width: '100%', height: '60vh' }} alt="pic" />
                                <div className="container text-center mt-4">
                                    <h3>Ram Pachkawade</h3>
                                    <div className="item-social mt-4">
                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}