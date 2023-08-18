import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'; // Importa Link para enlazar a la página de detalles
import './Item.css';

const Item = ({ product }) => {
  return (
    <Container className='productCard' >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.Titulo}</Card.Title>
          <Card.Text>Precio: $ {product.Precio} </Card.Text>
          <Card.Text>Categoria: {product.categoria}  </Card.Text>

          <div className='cardButtons'>
            <Button className='cardButton' variant="">Agregar</Button>
            
            <Link to={`/item/${product.id}`}>
              <Button className='cardButton' variant="">Detalles</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Item;
