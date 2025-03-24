import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!language) return;
    localStorage.setItem("language", language);
  }, [language]);

  if (!language) {
    return <LanguageSelector onSelectLanguage={setLanguage} />;
  }

  const texts = {
    es: {
      aboutMe: "Sobre mí",
      description:
        "Soy Omar Álvarez, tatuador con 8 años de experiencia, viviendo actualmente en Medellín, Colombia, pero con posibilidad de llevar mi arte a cualquier lugar del mundo. Mi pasión por el arte me llevó a especializarme en el estilo tradicional, donde las líneas sólidas, los colores vibrantes y la estética atemporal se convierten en mi sello personal.",
      portfolio: "Conoce mi trabajo",
      contact: "Canales de contacto",
      otherSection: "Otra sección",
      otherContent: "Te quiero mucho precioso"
    },
    en: {
      aboutMe: "About Me",
      description:
        "I am Omar Álvarez, a tattoo artist with 8 years of experience, currently living in Medellín, Colombia, but with the possibility of bringing my art anywhere in the world. My passion for art led me to specialize in the traditional style, where solid lines, vibrant colors, and timeless aesthetics become my signature.",
      portfolio: "See My Work",
      contact: "Contact Channels",
      otherSection: "Another Section",
      otherContent: "I love you so much, precious"
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
