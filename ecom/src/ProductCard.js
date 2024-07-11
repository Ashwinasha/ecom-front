// src/ProductCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ image, title, text }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
