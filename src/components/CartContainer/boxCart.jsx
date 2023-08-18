import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import cartSop from '../../assets/img/cartSop.png';
import './boxCart.css'

function BoxCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          AQUI SE MUESTRAN LOS ARTICULOS QUE SE AGREGUEN EN EL CARRO DE COMPRAS
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BoxCart;