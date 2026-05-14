import { useState, useEffect, useRef } from "react";
import imgPerfil from "../../assets/fotos teteu.jpeg";

function Hero() {
  const dinamico = [
    "Desenvolvedor Front-End",
    "Criador de Experiências",
    "Especialista em React",
  ];

  const [texto, setTexto] = useState(dinamico[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % dinamico.length;
      setTexto(dinamico[indexRef.current]);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="conteudo">
        <h1>
          Olá, eu sou <span className="nome">Mateus Maciel</span>
        </h1>
        <h2>{texto}</h2>
        <p>
          Transformo ideias em experiências digitais incríveis. Especializado em
          React, JavaScript e desenvolvimento front-end moderno.
        </p>

        <div className="botoes">
          <button
            onClick={() => window.open("https://github.com/MateusMacielrj", "_blank")}
          >
            Ver projetos
          </button>

          <button
            onClick={() => window.open("https://wa.me/21965890511", "_blank")}
          >
            Entre em contato
          </button>
        </div>
      </div>

      <img src={imgPerfil} alt="Foto de Mateus Maciel" />
    </section>
  );
}

export default Hero;
