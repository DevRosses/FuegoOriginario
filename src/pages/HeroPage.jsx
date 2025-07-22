import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import HeroVideo from "../assets/video/fire.mp4"
import "../assets/pages/HeroPage.css";

function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".hero-content", {
      delay: 800,
      distance: "80px",
      origin: "bottom",
      duration: 1600,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="hero section flex-center">
      <video autoPlay loop muted playsInline className="hero-bg">
        <source src={HeroVideo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Fuego Originario</h1>
        <p className="hero-subtitle">
          Colección CEIBO: Irreverencia Funcional 
        </p>
      </div>
    </section>
  );
}

export default Hero;


