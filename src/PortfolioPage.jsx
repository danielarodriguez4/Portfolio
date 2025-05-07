import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "";

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Referencias para la funcionalidad de deslizamiento
  const carouselRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

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
      /* otherSection: "Otra sección",
      otherContent: "Te quiero mucho precioso", */
      previous: "Anterior",
      next: "Siguiente",
      image: "Imagen",
      of: "de"
    },
    en: {
      aboutMe: "About me",
      description:
        "My name is Omar, a passionate tattoo artist with eight years of experience, currently based in Medellín, Colombia. My artistry knows no borders, as I strive to bring my work to every corner of the world. Specializing in the traditional style, I blend bold lines, vibrant colors, and a timeless aesthetic to create tattoos that leave a lasting impression.",
      portfolio: "See my work",
      contact: "Contact channels",
     /* otherSection: "Section",
      otherContent: "I love you so much, handsome", */
      previous: "Previous",
      next: "Next",
      image: "Image",
      of: "of"
    },
  };

  const images = [
    "/legs.jpeg", "/legs2.jpeg", "/leg2.jpeg", "/leg1.jpeg", "/woman1.jpeg",
    "/woman3.jpeg", "/woman2.jpeg", "/vaquera.jpeg", "/espalda.jpeg",
    "/espaldatrad.jpeg", "/vasito.jpeg", "/idk.jpeg", "/hombre1.jpeg",
    "/hombre2.jpeg", "/aguila.jpeg", "/aguila2.jpeg"
  ];

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);
  
  // Manejadores para gestos táctiles y mouse
  const handleTouchStart = useCallback((e) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  }, []);
  
  const handleTouchMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startXRef.current - currentX;
    
    // Detectar dirección de deslizamiento
    if (Math.abs(diff) > 50) { // umbral de 50px para considerar como deslizamiento
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
      isDraggingRef.current = false;
    }
  }, [goToNext, goToPrevious]);
  
  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);
  
  const handleMouseDown = useCallback((e) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
    
    // Prevenir que se seleccione texto durante el arrastre
    e.preventDefault();
  }, []);
  
  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    
    const currentX = e.clientX;
    const diff = startXRef.current - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
      isDraggingRef.current = false;
    }
  }, [goToNext, goToPrevious]);
  
  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);
  
  // Añadir manejadores de eventos globales para mouse
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

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
        <div className="carousel-container">
          <div 
            className="carousel advanced-carousel" 
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="carousel-track">
              {/* Imagen previa (borrosa) */}
              <div className="carousel-item carousel-item-previous">
                <img
                  src={images[(currentImageIndex - 1 + images.length) % images.length]}
                  alt="Previous artwork"
                  className="carousel-image blurred"
                />
              </div>
              
              {/* Imagen actual (enfocada) */}
              <div 
                className="carousel-item carousel-item-current" 
                onClick={() => setSelectedImage(images[currentImageIndex])}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`Artwork ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
              </div>
              
              {/* Imagen siguiente (borrosa) */}
              <div className="carousel-item carousel-item-next">
                <img
                  src={images[(currentImageIndex + 1) % images.length]}
                  alt="Next artwork"
                  className="carousel-image blurred"
                />
              </div>
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-button" onClick={goToPrevious}>
                {texts[language].previous}
              </button>
              <span className="image-counter">
                {texts[language].image} {currentImageIndex + 1} {texts[language].of} {images.length}
              </span>
              <button className="carousel-button" onClick={goToNext}>
                {texts[language].next}
              </button>
            </div>
          </div>
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