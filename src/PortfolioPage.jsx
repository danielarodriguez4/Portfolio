import React, { useState } from "react";
import "./PortfolioPage.css"; // Archivo de estilos CSS externo

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/legs.jpeg", "/legs2.jpeg", "/leg2.jpeg", "/leg1.jpeg", "/woman1.jpeg",
    "/woman3.jpeg", "/woman2.jpeg", "/vaquera.jpeg", "/espalda.jpeg",
    "/espaldatrad.jpeg", "/vasito.jpeg", "/idk.jpeg", "/hombre1.jpeg",
    "/hombre2.jpeg", "/aguila.jpeg", "/aguila2.jpeg"
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Nombre del Artista</h1>
        <nav>
          <ul>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
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
        <h2>Mis Trabajos</h2>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de mis redes sociales:</p>
        <div className="social-links">
          <a href="#">📷 Instagram</a>
          <a href="#">🐦 Twitter</a>
          <a href="#">✉️ Email</a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
