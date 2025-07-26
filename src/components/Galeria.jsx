import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Ceibo1 from "../assets/images/ceibo1.jpg";
import Ceibo2 from "../assets/images/ceibo2.jpg";
import Ceibo3 from "../assets/images/ceibo3.jpg";
import Ceibo4 from "../assets/images/ceibo4.jpg";

function Galeria() {
  useEffect(() => {
    ScrollReveal().reveal(".gallery-item", {
      interval: 400,
      distance: "80px",
      origin: "bottom",
      duration: 1600,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div className="gallery__grid">
      <div className="gallery__item card">
        <img src={Ceibo1} alt="Ceibo textura 1" />
      </div>
      <div className="gallery__item card">
        <img src={Ceibo2} alt="Ceibo textura 2" />
      </div>
      <div className="gallery__item card">
        <img src={Ceibo3} alt="Ceibo inspiración urbana" />
      </div>
      <div className="gallery__item card">
        <img src={Ceibo4} alt="Ceibo madera quemada" />
      </div>
    </div>
  );
}

export default Galeria;
