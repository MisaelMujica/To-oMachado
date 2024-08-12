import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [desplegar, setdesplegar] = useState(false)
  return (
    <>
      <div className='navbar'>
        <img src="src/assets/logo.svg" className="logo" alt="logo" title="logo" />
        <div className="lista-contenedor">
          <ul className="lista">
            <li className="link-li" ><a href="/" className="link">Inicio</a></li>
            <li className="link-li" ><a href="#artista" className="link">Artista</a></li>
            <li className="link-li" ><a href="#galeria" className="link">Galeria</a></li>
            <li className="link-li" ><a href="#testimonios" className="link">Testimonios</a></li>
            <li className="link-li" ><a href="#contacto" className="link">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="desplegar-btn">
      <button  onClick={() => setdesplegar((prev) => !prev)} >
        <GiHamburgerMenu className="btn"/>
      </button>
      </div>



      <div className={`${desplegar ? 'mostrar' : 'ocultar'} navbar-resp`}>
        <div className="lista-contenedor-resp">
          <ul className="lista-resp">
            <li className="link-li-resp" ><a href="/" className="link-resp"><FaHome /></a></li>
            <li className="link-li-resp" ><a href="#artista" className="link-resp"><IoMdContact /></a></li>
            <li className="link-li-resp" ><a href="#galeria" className="link-resp"><GrGallery /></a></li>
            <li className="link-li-resp" ><a href="#testimonios" className="link-resp"><MdConnectWithoutContact /></a></li>
            <li className="link-li-resp" ><a href="#contacto" className="link-resp"><FaPhoneAlt /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar