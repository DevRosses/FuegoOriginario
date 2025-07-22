import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function ConceptoPage() {
  useEffect(() => {
    ScrollReveal().reveal(".concepto-content", {
      delay: 300,
      origin: "left",
      distance: "60px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="section parallax">
      <div className="container concepto-content">
        <h2>CONCEPTO: IRREVERENCIA</h2>
        <p>
          Nuestra exploración parte de una crítica a la narrativa tradicional de
          la leyenda de Anahí. Rechazamos la versión que la encasilla en la
          dulzura para revelar la esencia de su figura: una estratega, una líder
          que comandó una rebelión organizada contra la opresión.
        </p>
        <p>
          Irreverencia no es falta de respeto; es desafiar la norma para contar
          una verdad más profunda. Es la fuerza y el coraje convertidos en
          diseño.
        </p>
      </div>
    </section>
  );
}

export default ConceptoPage;
