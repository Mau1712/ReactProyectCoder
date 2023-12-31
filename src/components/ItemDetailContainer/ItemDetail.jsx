import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './ItemDetail.css';
import { useCart } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {

  const { addToCart } = useCart(); 

  const onAddProduct = () => {
    addToCart(product); 
  }

  return (
    <>
      {product && product.Titulo ? (
        <Container className='item-detail-container itemDetailCard'>
          {/* <Card.Img className='imgDetailCard'  variant="top" src={product.imagen} /> */}
          <Card className="text-center cardDetails">
            <Card.Header>Detalles del Producto</Card.Header>

            <Card.Body>
              <Card.Title>{product.Titulo}</Card.Title>
              <Card.Text>{product.Detalle}</Card.Text>
              <Card.Text>Aromas: {product.Aromas}</Card.Text>
              <Card.Text>Tipo: {product.categoria}</Card.Text>
              <Card.Text>Precio: {product.Precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</Card.Text>
              <Button className='addCartDetailItemButton' variant="primary" onClick={onAddProduct}>Agregar a la Bolsa</Button>
            </Card.Body>
            <Card.Footer className="text-muted">La oferta termina en 2 dias</Card.Footer>
          </Card>
        </Container>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </>
  );
};

export default ItemDetail;


{/*  */}