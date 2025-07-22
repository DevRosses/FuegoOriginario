import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function PrincipiosPage() {
  useEffect(() => {
    ScrollReveal().reveal(".principio", {
      interval: 200,
      origin: "bottom",
      distance: "40px",
      duration: 800,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="section parallax">
      <div className="container">
        <h2>Del árbol al objeto: Principios de Diseño</h2>
        <div className="flex">
          <div className="principio">
            <h3>Estructura Adaptativa</h3>
            <p>
              Inspirado en el tronco retorcido del Ceibo. Flexible pero robusto.
            </p>
          </div>
          <div className="principio">
            <h3>Resiliencia Funcional</h3>
            <p>
              Lona impermeable. Diseño que resiste climas y contextos adversos.
            </p>
          </div>
          <div className="principio">
            <h3>Identidad Expresiva</h3>
            <p>Estética con raíz cultural. El diseño habla por sí mismo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipiosPage;
