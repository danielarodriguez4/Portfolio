import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from "./PortfolioPage";
import LanguageSelector from "./LanguageSelector";
import "./PortfolioPage.css"; // Asegúrate de importar los estilos

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Página inicial: Selección de idioma */}
        <Route path="/" element={<LanguageSelector />} />

        {/* Página del portafolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
