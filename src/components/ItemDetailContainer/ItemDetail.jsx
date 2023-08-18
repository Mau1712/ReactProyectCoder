import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

    return (
        <Container className='item-detail-container'>
            <Card className="text-center cardDetails">
                <Card.Header>Producto</Card.Header>
                {/* <Card.Img className='imgDetailCard'  variant="top" src={product.imagen} /> */}
                <Card.Body>
                    <Card.Title>{product.Titulo}</Card.Title>
                    <Card.Text>{product.Detalle}</Card.Text>
                    <Card.Text>Aromas: {product.Aromas}</Card.Text>
                    <Card.Text>Tipo: {product.categoria}</Card.Text>
                    <Card.Text>Precio: $ {product.Precio}</Card.Text>

                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    );
};

export default ItemDetail;

{/*  */}