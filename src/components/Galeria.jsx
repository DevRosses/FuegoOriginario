import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Ceibo1 from "../assets/images/ceibo1.jpg";
import Ceibo2 from "../assets/images/ceibo2.jpg";
import Ceibo3 from "../assets/images/ceibo3.jpg";
import Ceibo4 from "../assets/images/ceibo4.jpg";

function Galeria
() {
  useEffect(() => {
    ScrollReveal().reveal(".gallery-item", {
      interval: 150,
      distance: "30px",
      origin: "bottom",
      duration: 700,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="section parallax">
      <div className="container">
        <h2>Inspiraciones visuales</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={Ceibo1} alt="Ceibo textura 1" />
          </div>
          <div className="gallery-item">
            <img src={Ceibo2} alt="Ceibo textura 2" />
          </div>
          <div className="gallery-item">
            <img
              src={Ceibo3}
              alt="Ceibo inspiración urbana"
            />
          </div>
          <div className="gallery-item">
            <img src={Ceibo4} alt="Ceibo madera quemada" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria
;
