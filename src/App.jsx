import HeroPage from "./pages/HeroPage.jsx"
import ConceptoPage from "./pages/ConceptoPage.jsx"
import PrincipiosPage from "./pages/PrincipiosPage.jsx"
import ContenedorPage from "./pages/ContenedorPage.jsx"
import Footer from "./components/Footer.jsx"

function App() {


  return (
    <div className="app">
      <HeroPage className="hero" />
      <ConceptoPage className="concepto" />
      <PrincipiosPage className="principios" />
      <ContenedorPage className="contenedor" />
      <Footer className="footer" />
    </div>
  );
}

export default App
