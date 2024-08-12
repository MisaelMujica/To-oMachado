import React from 'react'

const Hero = () => {
    return (
        <div>
            <div id="inicio" className='hero-section'>
                <div className='text-container'>
                    <h1 className='titular'>Toño <span className='enfasis'>Machado</span></h1>
                    <p><span className='verde'>Tatuador y Piercer</span>, radicado en Madrid Espania, trabaja en <span className='verde'>Ohana Tattoo</span>, ubicada en la Avenida Carlos V 62, local 6, 28938 Mostoles.</p>
                    <p><span className='amarillo'>ANÍMATE! y haz realidad el tatuaje que siempre has querido!</span></p>

                    <br />
                    <a className="agendar" href="https://wa.me/34652441395" target="_blank" >Agenda tu cita</a>




                </div>

                <div className="img-container">
                    <img src="src/assets/tonho.svg" alt='Tonho' className="imagenes-web" />
                </div>
            </div >
            <img src="src/assets/logo.svg" className="imagenes-web" alt="logo" title="logo" />
            

        </div>
    )
}

export default Hero