function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* IDENTIDADE */}
        <div className="footer-col footer-about">
          <h3 className="footer-logo">
            Mateus <span>Maciel</span>
          </h3>

          <p>
            Desenvolvedor Front-End apaixonado por criar experiências
            digitais modernas, funcionais e intuitivas.
          </p>

          <span className="footer-frase">
            Código é a minha forma de construir um futuro melhor.
          </span>
        </div>


        {/* LINKS */}
        <div className="footer-col">
          <h3>Links rápidos</h3>

          <ul>
            <li>
              <a href="#hero">Início</a>
            </li>

            <li>
              <a href="#about">Sobre</a>
            </li>

            <li>
              <a href="#skills">Habilidades</a>
            </li>

            <li>
              <a href="#projects">Projetos</a>
            </li>

            <li>
              <a href="#serviços">Serviços</a>
            </li>

            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>


        {/* SERVIÇOS */}
        <div className="footer-col">
          <h3>Serviços</h3>

          <ul>
            <li>Desenvolvimento Front-End</li>
            <li>Manutenção & Suporte</li>
            <li>Landing Pages</li>
            <li>Interfaces Responsivas</li>
          </ul>
        </div>


        {/* CONTATO */}
        <div className="footer-col contact-info">
          <h3>Contato</h3>

          <ul>
            <li>
              <span>Email</span>
              <a href="mailto:mateusmacielrj@gmail.com">
                mateusmacielrj@gmail.com
              </a>
            </li>

            <li>
              <span>WhatsApp</span>
              <a
                href="https://wa.me/5521965890511"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (21) 96589-0511
              </a>
            </li>

            <li>
              <span>Localização</span>
              <span>Rio de Janeiro, RJ</span>
            </li>
          </ul>
        </div>

      </div>


      {/* RODAPÉ */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mateus Maciel. Todos os direitos
          reservados.
        </p>

        <span>
          Desenvolvedor Front-End
        </span>
      </div>
    </footer>
  );
}

export default Footer;