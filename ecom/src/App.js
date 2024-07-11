// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselComponent from './CarouselComponent';
import ProductCard from './ProductCard';
import NavbarComponent from './NavbarComponent';
import BuyNowPage from './BuyNowPage';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
    {
        image: `${process.env.PUBLIC_URL}/pix.jpg`,
        title: 'Pixel 8',
        text: 'The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features. And it makes Pixel 8 Pro super fast and efficient.',
        price: '$699'
    },
    {
        image: `${process.env.PUBLIC_URL}/s24.jpg`,
        title: 'Samsung Galaxy S24',
        text: 'Meet the new Galaxy S24 and S24+ smartphones featuring Galaxy AI. Explore the latest AI phones and AI features from Samsung that are setting the new smart phone.',
        price: '$799'
    },
    {
        image: `${process.env.PUBLIC_URL}/ip.jpg`,
        title: 'Iphone 15',
        text: 'The standard iPhone 15 lineup has upgraded 48MP Main Cameras, a USB 2.0 Type C port, and the Dynamic Island. This may be the last iPhone with a mute switch and improved battery life.',
        price: '$999'
    },
    {
        image: `${process.env.PUBLIC_URL}/hua.jpg`,
        title: 'Huawei P60 Pro',
        text: 'Meet the Huawei P60 and P60 pro smartphones featuring AI. Explore the latest AI phones and AI features from Huawei that are setting the new smart phone.',
        price: '$899'
    }
];

const App = () => {
    return (
        <Router>
            <div style={{ backgroundColor: 'rgb(235, 229, 229)', padding: '20px' }}>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={
                        <>
                            <CarouselComponent />
                            <Container className="my-3 mx-auto bg-white p-4 custom-container">
                                <h2 style={{ marginBottom: '20px' }}>Latest Products</h2>
                                <Row>
                                    {products.map((product, index) => (
                                        <Col md={3} className="mb-3" key={index}>
                                            <ProductCard
                                                image={product.image}
                                                title={product.title}
                                                text={product.text}
                                                price={product.price}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </>
                    } />
                    <Route path="/buy-now" element={<BuyNowPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
