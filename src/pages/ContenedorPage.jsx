import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Galeria from "../components/Galeria";  

function ContenedorPage() {
  useEffect(() => {
    ScrollReveal().reveal(".contenedor-content", {
      delay: 300,
      origin: "right",
      distance: "60px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="section parallax">
      <div className="container contenedor-content">
       <Galeria />
      </div>
    </section>
  );
}

export default ContenedorPage;
