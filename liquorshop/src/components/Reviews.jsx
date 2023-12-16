import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../img/reviews-1.jpg';
import img2 from '../img/abhi.png';
import img3 from '../img/anand.jpg';
import './Reviews.css';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
    return (
        <>
            <div className='section'>
                <h2>
                What Clients Say
                </h2>
            </div>
            <Card className="bg-dark text-white position-relative">
                <Card.Img src={img1} alt="Card background" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
                <div className="overlay"></div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Carousel fade className="card-carousel" indicators={false} controls={false}>
                        <Carousel.Item>
                            <img src={img2} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I recently discovered Liqui-Vista, and it's now my go-to for top-notch liquors.
                                The selection is unmatched, and the service is impeccable. Fast shipping and
                                excellent packaging. Highly recommend!"
                            </h4>
                            <p>-- Abhi Bhangale --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Reliability is key, and Liqui-Vista delivers. I've been a customer
                                for years, and they've consistently exceeded my expectations.
                                The range of options, reliability in delivery, and the dedication
                                to customer satisfaction make them my preferred choice."
                            </h4>
                            <p>-- Anand Patwari --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Liqui-Vista is synonymous with luxury. Their selection of premium liquors
                                is unmatched. The attention to detail in sourcing exquisite brands and
                                delivering them to my doorstep makes every purchase feel like a celebration."
                            </h4>
                            <p>-- Anand Patwari --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Reliability is key, and Liqui-Vista delivers. I've been a customer
                                for years, and they've consistently exceeded my expectations.
                                The range of options, reliability in delivery, and the dedication
                                to customer satisfaction make them my preferred choice."
                            </h4>
                            <p>-- Anand Patwari --</p>
                        </Carousel.Item>
                    </Carousel>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default Reviews;
