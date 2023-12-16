import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../img/card-1.png';
import img2 from '../img/card-2.jpg';
import img3 from '../img/card-3.png';
import img4 from '../img/card-4.jpg';
import img5 from '../img/card-4.png';
import img6 from '../img/card-5.png';
import img7 from '../img/card-6.png';
import img8 from '../img/card-8.png';
import './HomeCards.css';

function HomeCards() {
    const cardsData = [
        { path: img1, name: 'Chivas Regal', text: 'Indulge in the rich and smooth flavor of Chivas Regal.' },
        { path: img2, name: 'Old Monk', text: 'Savor the timeless taste of Old Monk rum.' },
        { path: img3, name: 'Jack Daniels', text: 'Experience the boldness of Jack Daniels whiskey.' },
        { path: img4, name: 'Red Label', text: 'Enjoy the classic and iconic taste of Red Label.' },
        { path: img5, name: 'Solan Black', text: 'Discover the rich and bold flavor of Solan Black.' },
        { path: img6, name: 'Amrut Fusion', text: 'Immerse yourself in the fusion of flavors with Amrut Fusion.' },
        { path: img7, name: 'Kamet', text: 'Elevate your senses with the exquisite taste of Kamet.' },
        { path: img8, name: 'Antiquity', text: 'Experience the timeless elegance of Antiquity.' },
      ];
      
    

    return (
        <Container>
            <Row className="container text-center mt-5">
                <h2>Cheers To Exclusive Blends, Only At Liqui-Vista</h2>
            </Row>
            <Row xs={1} md={4} className="g-3 mt-3">
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <Card className="custom-card">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + card.path} style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                            <Card.Body className="text-center">
                                <Card.Title><h3>{card.name}</h3></Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>     
        </Container>
    );
}

export default HomeCards;
