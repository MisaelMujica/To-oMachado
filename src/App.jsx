import React from "react";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Artista from "./componentes/Artista";
import Testimonios from "./componentes/Testimonios";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Galeria from "./componentes/Galeria";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Artista />
      <Galeria />
      <Testimonios />
      <Contacto />
      <Footer />

    </>
  )
}

export default App
