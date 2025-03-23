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
      {/* Header con redes sociales */}
      <header className="header">
        <h1>Nombre del Artista</h1>
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

      <div className="whatsapp-float">
         <a href="https://wa.me/573207041614" target="_blank" rel="noopener noreferrer">
         <img src="/ws.png" alt="WhatsApp" />
         </a>
      </div>

      <div className="Instagram-float">
         <a href="https://www.instagram.com/omardarktattoo" target="_blank" rel="noopener noreferrer">
         <img src="/ig.png" alt="Instagram" />
         </a>
      </div>
      


    </div>
  );
};

export default PortfolioPage;
