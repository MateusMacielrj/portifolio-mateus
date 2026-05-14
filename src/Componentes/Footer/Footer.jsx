function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-col">
         <h3 className="nome">Mateus Maciel</h3>
          <p>
            Desenvolvedor Front-End apaixonado por criar experiências digitais
            excepcionais.
          </p>
          
        </div>

        <div className="footer-col">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Serviços</h3>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Design de Interface</li>
            <li>Aplicações Mobile</li>
            <li>Consultoria Técnica</li>
          </ul>
        </div>

        <div className="footer-col contact-info">
          <h3>Contato</h3>
          <ul>
            <li>
              <span>Email:</span>
              <span>mateusmacielrj@gmail.com</span>
            </li>
            <li>
              <span>Telefone:</span>
              <span>+55 (21) 96589-0511</span>
            </li>
            <li>
              <span>Localização:</span>
              <span>Rio de Janeiro, RJ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Mateus Maciel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
