import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./pages/home/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
// Template init (public assets)
import { initTemplate } from "../public/assets/js/main.js";

export default function App() {
  useEffect(() => {
    // basic SEO
    document.title = "Umzug Transport Group – Professionelle Umzüge in Augsburg";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content = "Umzug Transport Group – Ihr Partner für stressfreie Umzüge, Möbelmontage und Transporte in Augsburg.";
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);

    // initialize template JS (AOS, isotope, lightbox, swiper)
    initTemplate();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
