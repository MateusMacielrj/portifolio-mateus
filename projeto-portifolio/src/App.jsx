import Header from "./Componentes/Header/Header";
import Hero from "./Componentes/Hero/Hero";
import About from "./Componentes/About/About";
import Portfolio from "./Componentes/Portifolio/Portifolio";
import Services from "./Componentes/Serviços/Services";
import Testimonials from "./Componentes/Testimonials/Testimonials";
import ContactForm from "./Componentes/ContactForm/ContactForm";
import Habilidade from "./Componentes/Habilidade/Habilidade";
import Footer from "./Componentes/Footer/Footer";

import "./App.css";
import "./Componentes/Header/Header.css";
import "./Componentes/Hero/Hero.css";
import "./Componentes/About/About.css";
import "./Componentes/Habilidade/Habilidade.css";
import "./Componentes/Portifolio/Portifolio.css";
import "./Componentes/Serviços/Services.css";
import "./Componentes/Testimonials/Testimonials.css";
import "./Componentes/ContactForm/ContactForm.css";
import "./Componentes/Footer/Footer.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Habilidade />
      <Portfolio />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
