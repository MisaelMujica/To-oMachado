import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

const Galeria = () => {
    return (
        <section id="galeria" className="galeria-info">
            <h1 className="amarillo">Galería</h1>


            <div className="imagenes">
                <img src=".\src\assets\bruja.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\jack.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\girasol.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\nefertitia.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\gato.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\perro.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\buzz.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\gokuvegeta.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\mushu.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\vegeta.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\chicasnake.svg" className='gal-img' alt="foto" />
                <img src=".\src\assets\guason.svg" className='gal-img' alt="foto" />
            </div>

            <br />

            <p className="amarillo">
                Más fotos y videos:
            </p>

            <div className="redes">
                <a href="https://www.instagram.com/tonho_machado12/" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram className='gal-icon' />
                </a>
            </div>
        </section>
    )
}

export default Galeria