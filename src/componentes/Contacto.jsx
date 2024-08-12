import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contacto = () => {
  return (
    <div>
      <section id="contacto" className="contacto">
        <h1 className='contacto-titular'>CONTACTO</h1>
        <p>Agende su cita sirviéndose los siguientes enlaces:</p>
        <div className="rrss">
       
          <a href="https://wa.me/34652441395" target="_blank" rel="noopener noreferrer">
            <FaSquareWhatsapp className='contact-icon' />
          </a>

          <a href="https://www.instagram.com/tonho_machado12/" target="_blank" rel="noopener noreferrer"
            name="instagram">
            <FaInstagramSquare className='contact-icon' />
          </a>

          <a href="mailto:tonho.machado12@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelopeSquare className='contact-icon' />
          </a>


        </div>
      </section>
    </div>
  )
}

export default Contacto