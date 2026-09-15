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
      indexRef.current =
        (indexRef.current + 1) % dinamico.length;

      setTexto(dinamico[indexRef.current]);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="hero" id="hero">

      <div className="hero-container">

        {/* CONTEÚDO */}
        <div className="hero-content">

          <span className="hero-label">
            DESENVOLVEDOR FRONT-END
          </span>

          <h1>
            Olá, eu sou
            <br />
            <span>Mateus Maciel</span>
          </h1>

          <h2>{texto}</h2>

          <p>
            Transformando ideias em experiências digitais modernas,
            funcionais e acessíveis. Especialista em React e apaixonado
            por desenvolver soluções que geram resultados.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() =>
                window.open(
                  "https://github.com/MateusMacielrj",
                  "_blank"
                )
              }
            >
              Ver meus projetos
              <span>→</span>
            </button>

            <button
              className="secondary"
              onClick={() =>
                window.open(
                  "https://wa.me/21965890511",
                  "_blank"
                )
              }
            >
              Entrar em contato
            </button>

          </div>

          {/* REDES SOCIAIS */}
          <div className="hero-socials">

            <a
              href="https://github.com/MateusMacielrj"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mateus-maciel-815b11303/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/21965890511"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* FOTO */}
        <div className="hero-image">

          <img
            src={imgPerfil}
            alt="Foto de Mateus Maciel"
          />

        </div>

        {/* TEXTO LATERAL */}
        <div className="hero-side">

          <span>DISCIPLINA</span>
          <span>FOCO</span>
          <span>EVOLUÇÃO</span>
          <span>SEMPRE</span>

          <div></div>

          <p>
            "Grandes resultados
            <br />
            nascem de consistência."
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;