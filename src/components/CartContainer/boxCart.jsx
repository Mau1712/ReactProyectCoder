import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import { useCart } from '../../Context/CartContext';
import cartSop from '../../assets/img/cartSop.png';
import './boxCart.css';

function BoxCart() {
  const [show, setShow] = useState(false);
  const { cartItems, addToCart, removeFromCart, emptyCart } = useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);

 
  

  return (
    <>
      <Button variant="link" className="btn-unstyled btnOpenBoxCart" onClick={handleShow}>
        <img className='cartImg' src={cartSop} alt="" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bolsa de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='listaProductos'>
            {cartItems.map((item, index) => (
              <li key={index}>
                <Card className='cardProduct'>
                  <Card.Img className='cardProductImg' variant="top" src={item.imagen} alt={item.Titulo} />
                  <Card.Body className='cardBody'>
                    <Card.Title className='tittleProduct'>{item.Titulo}</Card.Title>
                    <Card.Text className='allText'>Precio: {((item.Precio * item.quantity).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }))}</Card.Text>
                    <div className="quantity-control">
                      <span>Cantidad:</span>
                      <button className='btnCant' onClick={() => removeFromCart(item)}> - </button>
                      <span className='allText'>{item.quantity}</span>
                      <button className='btnCant' onClick={() => addToCart(item)}> + </button>
                    </div>
                  </Card.Body>
                  
                </Card>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
        <Card className='totalBuy'>
        <Card.Title>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</Card.Title>
        
        <div className='btnFooterBoxCart'>
        <button>Comprar</button>
        <button onClick={emptyCart}>Vaciar Bolsa</button> 
        </div>
        
        </Card>
      </Offcanvas>
    </>
  );
}

export default BoxCart;
