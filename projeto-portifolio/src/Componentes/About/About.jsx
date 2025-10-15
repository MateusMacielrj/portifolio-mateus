function About() {
  return (
    <div className="sobre" id="about"> {/* id adicionado */}
      <div className="texto">
        <h1>Sobre Mim </h1>
        <p>
          Sou um desenvolvedor front-end apaixonado por criar experiências
          digitais excepcionais. Com mais de 3 anos de experiência, especializo-me
          em React, JavaScript e tecnologias modernas de desenvolvimento web. <br/> <br />
          Minha missão é transformar ideias complexas em interfaces intuitivas e
          funcionais, sempre focando na experiência do usuário e nas melhores
          práticas de desenvolvimento.
        </p>
      </div>

      <div className="quadros" id="about">
        <div className="numeros">
          <span>10+</span>
          <p>Projetos Concluídos</p>
        </div>

        <div className="numeros">
          <span>2+</span>
          <p>Anos de Experiência</p>
        </div>

        <div className="numeros">
          <span>100%</span>
          <p className="dedica">Dedicação</p>
        </div>
      </div>
    </div>
  );
}

export default About;
