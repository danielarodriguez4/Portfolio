import React, { useState, useEffect } from "react";

const LanguageSelector = ({ onSelectLanguage }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "");

  useEffect(() => {
    if (language) {
      onSelectLanguage(language);
    }
  }, [language, onSelectLanguage]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    onSelectLanguage(lang);
  };

  return (
    <div style={styles.container}>
      <h2>Selecciona tu idioma / Select your language</h2>
      <button style={styles.button} onClick={() => handleLanguageSelect("es")}>Español</button>
      <button style={styles.button} onClick={() => handleLanguageSelect("en")}>English</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#702a2a",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default LanguageSelector;
