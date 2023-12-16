import { Navigationbar } from './Navigationbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/1.png';
import img2 from '../img/new-bg-1.png';
import img3 from '../img/new-bg-2.png';
import img4 from '../img/bg2.png';
import img5 from '../img/bg3.png';
import HomeCards from './HomeCards';
import Reviews from './Reviews';

export function Home() {
    return (
        <>
            <Navigationbar></Navigationbar>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img3}
                        alt="First slide"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img4}
                        alt="First slide"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img5}
                        alt="First slide"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>

            <div >
            <HomeCards></HomeCards>
            </div>

            <div>
            <Reviews></Reviews>
            </div>
           
        </>
    );
}
