import React, { useState } from "react";
import "./PortfolioPage.css"; // Archivo de estilos CSS externo

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  const images = [
    "/legs.jpeg", "/legs2.jpeg", "/leg2.jpeg", "/leg1.jpeg", "/woman1.jpeg",
    "/woman3.jpeg", "/woman2.jpeg", "/vaquera.jpeg", "/espalda.jpeg",
    "/espaldatrad.jpeg", "/vasito.jpeg", "/idk.jpeg", "/hombre1.jpeg",
    "/hombre2.jpeg", "/aguila.jpeg", "/aguila2.jpeg"
  ];

  return (
    <div className="container">
      {/* Header con imagen de fondo */}
      <header className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Omar Álvarez</h1>
          <p>Explorando el arte del tatuaje con pasión y detalle.</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Bienvenido a mi mundo artístico</h2>
          <p>Explora mis obras y conoce más sobre mi trayectoria.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Conoce mi trabajo</h2>
        <div className="gallery grid-layout">
          {images.map((src, index) => (
            <div key={index} className="artwork" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Artwork ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Ampliada" />
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <p>Aquí puedes escribir una descripción sobre el artista, su trayectoria y experiencia.</p>
      </section>

      {/* Botón flotante de "Canales de Contacto" */}
      <div className="contact-float">
        <button className="contact-button" onClick={() => setIsOpen(!isOpen)}>
          Canales de contacto
        </button>

        {/* Opciones desplegables */}
        {isOpen && (
          <div className="contact-options">
            <a href="https://wa.me/573207041614" target="_blank" rel="noopener noreferrer">
              <img src="/ws.png" alt="WhatsApp" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/omardarktattoo" target="_blank" rel="noopener noreferrer">
              <img src="/ig.png" alt="Instagram" /> Instagram
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
