import React from 'react'

const Testimonios = () => {
  return (
    <section id="testimonios" className="testimonios">
      <h1>Testimonios</h1>

      <div className='card-container'>
        <div className="card">
          <img src="src/assets/testimonio4.svg" alt="" className='testimonio-pic' />
          <p><span className='verde'>Le das una idea de lo que quieres tatuarte y lo mejora con creces,</span> los acabados del tatuaje son increibles, es muy atento y amable...
            <br />
            <span className='amarillo'>Jenni Castillo</span></p>
        </div>
        <div className="card">
          <img src="src/assets/testimonio2.svg" alt="" className='testimonio-pic' />
          <p><span className='verde'>Es creativo y responsable,</span> está al día con las tendencias, se adapta a las especificaciones y necesidades del cliente... 
            <br />
            <span className='amarillo'>Scarlet Álvarez</span></p>
        </div>
        <div className="card">
          <img src="src/assets/testimonio3.svg" alt="" className='testimonio-pic' />
          <p><span className='verde'>Me encantó tanto el tatu que volví a por más,</span> sobre todo el buen trato y la paciencia con alguien tan indecisa como yo.<br/>
          
            <span className='amarillo'>Nayelit Mirasol</span></p>
        </div>
        <div className="card">
          <img src="src/assets/testimonio1.svg" alt="" className='testimonio-pic' />
          <p><span className='verde'>Excelente!</span> Ademas de tatuar por demas excelente, inspira confianza y mantiene altos estandares de pulcritud.
            <br />
            <span className='amarillo'>Misael Mujica</span></p>
        </div>
      </div>
    </section>
  )
}

export default Testimonios