import {
  LuFolderKanban,
  LuCode,
  LuWifi,
} from "react-icons/lu";

function About() {
  return (
    <section className="sobre" id="about">

      <div className="sobre-container">

        {/* TEXTO */}
        <div className="sobre-texto">

          <span className="sobre-label">
            SOBRE MIM
          </span>

          <h2>
            Desenvolvedor movido
            <br />
            por <span>desafios</span>
          </h2>

          {/* DIVISOR */}
          <div className="sobre-divisor">
            <span></span>
          </div>

          <p>
            Sou um desenvolvedor front-end apaixonado por criar
            experiências digitais modernas, funcionais e intuitivas.
            Venho construindo minha trajetória através de projetos
            práticos e do aprendizado contínuo em desenvolvimento web.
          </p>

          <p>
            Meu foco está em transformar ideias em interfaces que
            proporcionem uma boa experiência ao usuário, utilizando
            tecnologias como React, JavaScript, HTML e CSS.
          </p>

          <a href="#projects" className="sobre-button">
            Conheça meus projetos
            <span>→</span>
          </a>

        </div>


        {/* LADO DIREITO */}
        <div className="sobre-lateral">

          {/* FRASE */}
          <div className="sobre-frase">

            <div className="sobre-frase-linha"></div>

            <p>
              Código é a minha forma de
              <span> construir um futuro melhor.</span>
            </p>

          </div>


          {/* ESTATÍSTICAS */}
          <div className="sobre-estatisticas">

            {/* PROJETOS */}
            <div className="estatistica">

              <LuFolderKanban className="estatistica-icon" />

              <div className="estatistica-info">
                <span>10+</span>

                <p>
                  Projetos desenvolvidos
                </p>
              </div>

            </div>


            {/* ESTUDOS */}
            <div className="estatistica">

              <LuCode className="estatistica-icon" />

              <div className="estatistica-info">
                <span>3+</span>

                <p>
                  Anos estudando desenvolvimento
                </p>
              </div>

            </div>


            {/* DEDICAÇÃO */}
            <div className="estatistica">

              <LuWifi className="estatistica-icon" />

              <div className="estatistica-info">
                <span>100%</span>

                <p>
                  Dedicação em cada projeto
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;