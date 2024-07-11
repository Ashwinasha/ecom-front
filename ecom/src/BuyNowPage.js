// src/BuyNowPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BuyNowPage = () => {
    const location = useLocation();
    const { image, title, text, price } = queryString.parse(location.search);

    return (
       <Container className="my-5" style={{ textAlign: 'center', padding: '20px' }}>
            <Row>
                <Col md={6}>
                    <img src={image} alt={title} className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <h2>{price}</h2>
                    <Button variant="success" size="lg">Proceed to Payment</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default BuyNowPage;
