function ContactForm() {
  return (
    <section className="contato-container" id="contact">

      <div className="contato-conteudo">

        {/* CABEÇALHO */}
        <div className="contato-header">

          <span className="contato-label">
            CONTATO
          </span>

          <h2>
            Vamos conversar sobre
            <br />
            <strong>seu próximo projeto.</strong>
          </h2>

          <p>
            Estou sempre disponível para discutir novas ideias,
            projetos e oportunidades. Entre em contato através
            de um dos canais abaixo.
          </p>

        </div>


        {/* CONTATOS */}
        <div className="lista-sociais">

          <a
            href="mailto:mateusmacielrj@gmail.com"
            className="contato-item"
          >
            <span className="contato-tipo">
              EMAIL
            </span>

            <span className="contato-valor">
              mateusmacielrj@gmail.com
            </span>

            <span className="contato-seta">
              →
            </span>
          </a>


          <a
            href="https://wa.me/5521965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-item"
          >
            <span className="contato-tipo">
              WHATSAPP
            </span>

            <span className="contato-valor">
              Clique aqui para conversar
            </span>

            <span className="contato-seta">
              →
            </span>
          </a>


          <a
            href="https://www.instagram.com/mtf_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-item"
          >
            <span className="contato-tipo">
              INSTAGRAM
            </span>

            <span className="contato-valor">
              @mtf_dev
            </span>

            <span className="contato-seta">
              →
            </span>
          </a>


          <a
            href="https://www.linkedin.com/in/mateus-maciel-815b11303/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-item"
          >
            <span className="contato-tipo">
              LINKEDIN
            </span>

            <span className="contato-valor">
              Mateus Maciel
            </span>

            <span className="contato-seta">
              →
            </span>
          </a>


          <a
            href="https://github.com/mateusmacielrj"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-item"
          >
            <span className="contato-tipo">
              GITHUB
            </span>

            <span className="contato-valor">
              MateusMacielrj
            </span>

            <span className="contato-seta">
              →
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;