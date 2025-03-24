import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "";

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Redirige si no hay idioma seleccionado
  useEffect(() => {
    if (!language) {
      navigate("/");
    } else {
      localStorage.setItem("language", language);
    }
  }, [language, navigate]);

  const texts = {
    es: {
      aboutMe: "Sobre mí",
      description:
        "Soy Omar, tatuador con 8 años de experiencia, viviendo actualmente en Medellín, Colombia, pero con posibilidad de llevar mi arte a cualquier lugar del mundo. Mi pasión por el arte me llevó a especializarme en el estilo tradicional, donde las líneas sólidas, los colores vibrantes y la estética atemporal se convierten en mi sello personal.",
      portfolio: "Conoce mi trabajo",
      contact: "Canales de contacto",
      otherSection: "Otra sección",
      otherContent: "Te quiero mucho precioso",
    },
    en: {
      aboutMe: "About me",
      description:
        "My name is Omar, a passionate tattoo artist with eight years of experience, currently based in Medellín, Colombia. My artistry knows no borders, as I strive to bring my work to every corner of the world. Specializing in the traditional style, I blend bold lines, vibrant colors, and a timeless aesthetic to create tattoos that leave a lasting impression.",
      portfolio: "See my work",
      contact: "Contact channels",
      otherSection: "Section",
      otherContent: "I love you so much, handsome",
    },
  };

  const images = [
    "/legs.jpeg", "/legs2.jpeg", "/leg2.jpeg", "/leg1.jpeg", "/woman1.jpeg",
    "/woman3.jpeg", "/woman2.jpeg", "/vaquera.jpeg", "/espalda.jpeg",
    "/espaldatrad.jpeg", "/vasito.jpeg", "/idk.jpeg", "/hombre1.jpeg",
    "/hombre2.jpeg", "/aguila.jpeg", "/aguila2.jpeg"
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-overlay"></div>
        <div className="header-title">
          <span className="text-back">Omardarktattoo</span>
          <span className="text-front">Omar Álvarez</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>{texts[language].aboutMe}</h2>
          <p>{texts[language].description}</p>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>{texts[language].portfolio}</h2>
        <div className="gallery grid-layout">
          {images.map((src, index) => (
            <div key={index} className="artwork" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Artwork ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Modal para imágenes */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Ampliada" />
          </div>
        </div>
      )}

      <section className="other-section">
        <h2>{texts[language].otherSection}</h2>
        <p>{texts[language].otherContent}</p>
      </section>

      {/* Botón flotante de contacto */}
      <div className="contact-float">
        <button className="contact-button" onClick={() => setIsOpen(!isOpen)}>
          {texts[language].contact}
        </button>

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