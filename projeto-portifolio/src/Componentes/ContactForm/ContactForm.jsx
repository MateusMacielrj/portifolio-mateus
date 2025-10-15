function ContactForm() {
  return (
    <div className="contato-container" id="contact">
      <h1>Vamos conversar sobre seu próximo projeto</h1>
      <p>
        Estou sempre disponível para discutir novas ideias e oportunidades.
        Entre em contato através dos canais abaixo.
      </p>

      <ul className="lista-sociais">
        <li>
          <span>Email:</span>
          <a href="mailto:mateusmacielrj@gmail.com">mateusmacielrj@gmail.com</a>
        </li>
        
        <li>
          <span>WhatsApp:</span>
          <a
            href="https://wa.me/5521965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para conversar
          </a>
        </li>
        <li>
          <span>Instagram:</span>
          <a
            href="https://www.instagram.com/mtf_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mtf_dev
          </a>
        </li>
        <li>
          <span>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/mateus-maciel-815b11303/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mateus Maciel
          </a>
        </li>
        <li>
          <span>Github:</span>
          <a
            href="https://github.com/mateusmacielrj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mateus Macielrj
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactForm;
