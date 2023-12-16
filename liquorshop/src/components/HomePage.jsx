import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/1.png';
import img2 from '../img/2.jpg';

export function HomePage() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}
