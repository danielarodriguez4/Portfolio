import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioPage.css";

const LanguageSelector = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    localStorage.setItem("language", lang);
    navigate("/portfolio"); // Redirige a la página principal
  };

  return (
    <div className="language-selector">
      <h2>Selecciona tu idioma / Select your language</h2>
      <button className="language-button" onClick={() => handleLanguageSelect("es")}>
        Español
      </button>
      <button className="language-button" onClick={() => handleLanguageSelect("en")}>
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
