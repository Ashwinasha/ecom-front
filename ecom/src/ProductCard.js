// src/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const ProductCard = ({ image, title, text, price }) => {
    const productInfo = queryString.stringify({ image, title, text, price });

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Link to={`/buy-now?${productInfo}`}>
                    <Button variant="primary">Buy Now</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
