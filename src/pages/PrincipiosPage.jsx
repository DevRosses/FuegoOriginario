import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function PrincipiosPage() {
  useEffect(() => {
    ScrollReveal().reveal(".principio", {
      interval: 800,
      origin: "bottom",
      distance: "80px",
      duration: 1600,
      easing: "ease-in-ou",
      reset: false,
    });
  }, []);

  return (
    <section className="section parallax ">
      <div className="container">
        <div className="gallery-grid">
          <div className="gallery-item card">
            <h3>Estructura Adaptativa</h3>
            <p>
              Inspirado en el tronco retorcido del Ceibo. Flexible pero robusto.
            </p>
          </div>
          <div className="gallery-item card">
            <h3>Resiliencia Funcional</h3>
            <p>
              Lona impermeable. Diseño que resiste climas y contextos adversos.
            </p>
          </div>
          <div className="gallery-item card">
            <h3>Identidad Expresiva</h3>
            <p>Estética con raíz cultural. El diseño habla por sí mismo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipiosPage;
