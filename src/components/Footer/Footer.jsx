import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import pagos from '../../assets/img/pagos.png';





const Footer = () => {


  return (
    <div className='footerFot'>

        <div className='footerLinks'> 
            <Link> <p>Terminos y Condiciones </p> </Link> <span>|</span>
            <Link> <p>Soporte y atención telefonica </p> </Link> <span>|</span>
            <Link> <p>Defensa del Consumidor </p> </Link> <span>|</span>
            <Link> <p>Conviertete en revendedor </p> </Link> <span>|</span>
            <Link> <p>Accesibilidad </p> </Link> <span>|</span>
            <Link> <p>Ayuda </p> </Link>
            

        </div>

        <div className='mediosBox'>
        <img className='mediosDePagoImg' src={pagos} alt="" />         
        </div>

        <div className='copyright'>
            <p>Copyright © 1999-2023 CalmCandles S.R.L.</p>            
        </div>
        
        
    </div>
  )
}

export default Footer