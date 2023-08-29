import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';





const Footer = () => {


  return (
    <div className='footerFot'>

        <div className='footerLinks'> 
            <Link> <p>Terminos y Condiciones </p> </Link>
            <Link> <p>Soporte y atención telefonica </p> </Link>
            <Link> <p>Defensa del Consumidor </p> </Link>
            <Link> <p>Conviertete en revendedor </p> </Link>
            <Link> <p>Accesibilidad </p> </Link>
            <Link> <p>Ayuda </p> </Link>
            

        </div>

        <div className='copyright'>
            <p>Copyright © 1999-2023 CalmCandles S.R.L.</p>            
        </div>
        
        
    </div>
  )
}

export default Footer