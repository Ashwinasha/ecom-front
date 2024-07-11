// src/CarouselComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Samsung Galaxy S24 series</h5>
                    <p>Arrived to our shop!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Iphone 15 series</h5>
                    <p>Arrived to our shop!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Pixel 8 series</h5>
                    <p>Arrived to our shop!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="4.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h5>Huawei P60 series</h5>
                    <p>Arrived to our shop!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
