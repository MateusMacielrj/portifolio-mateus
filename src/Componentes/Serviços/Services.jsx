import ImgPc from "../../assets/notebook (1).png";
import ImgCog from "../../assets/cog.png";
import ImgMobile from "../../assets/agenda.png";

function Services() {
  const solicitarOrcamento = () => {
    window.open(
      "https://wa.me/21965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!",
      "_blank"
    );
  };

  return (
    <section className="servicos" id="serviços">

      <div className="servicos-container">

        {/* CABEÇALHO */}
        <div className="servicos-header">

          <span className="servicos-label">
            SERVIÇOS
          </span>

          <h2>
            Soluções digitais
            <br />
            <strong>pensadas para você.</strong>
          </h2>

          <p>
            Desenvolvimento de interfaces modernas, responsivas
            e funcionais para transformar suas ideias em experiências digitais.
          </p>

        </div>


        {/* CARDS */}
        <div className="servicos-grid">

          {/* FRONT-END */}
          <div className="card-serv">

            <div className="card-serv-imagem">
              <img
                src={ImgPc}
                alt="Desenvolvimento Front-End"
              />
            </div>

            <div className="card-serv-conteudo">

              <span className="card-serv-numero">
                01
              </span>

              <h3>
                Desenvolvimento Front-End
              </h3>

              <p>
                Desenvolvimento de aplicações web modernas,
                responsivas e focadas em uma boa experiência para
                o usuário.
              </p>

              <ul className="tecnologias">
                <li>React</li>
                <li>JavaScript</li>
                <li>Responsivo</li>
                <li>Performance</li>
              </ul>

              <button onClick={solicitarOrcamento}>
                Solicitar Orçamento
                <span>→</span>
              </button>

            </div>

          </div>


          {/* MANUTENÇÃO */}
          <div className="card-serv">

            <div className="card-serv-imagem">
              <img
                src={ImgCog}
                alt="Manutenção e suporte"
              />
            </div>

            <div className="card-serv-conteudo">

              <span className="card-serv-numero">
                02
              </span>

              <h3>
                Manutenção & Suporte
              </h3>

              <p>
                Manutenção de projetos existentes, correção de
                problemas, atualizações e melhorias contínuas.
              </p>

              <ul className="tecnologias">
                <li>Bug Fixes</li>
                <li>Updates</li>
                <li>Otimização</li>
                <li>Suporte</li>
              </ul>

              <button onClick={solicitarOrcamento}>
                Solicitar Orçamento
                <span>→</span>
              </button>

            </div>

          </div>


          {/* LANDING PAGE */}
          <div className="card-serv">

            <div className="card-serv-imagem">
              <img
                src={ImgMobile}
                alt="Desenvolvimento de Landing Pages"
              />
            </div>

            <div className="card-serv-conteudo">

              <span className="card-serv-numero">
                03
              </span>

              <h3>
                Landing Pages
              </h3>

              <p>
                Criação de páginas profissionais, modernas e
                responsivas para apresentar sua empresa, serviço
                ou produto.
              </p>

              <ul className="tecnologias">
                <li>React</li>
                <li>CSS</li>
                <li>Responsivo</li>
                <li>SEO</li>
              </ul>

              <button onClick={solicitarOrcamento}>
                Solicitar Orçamento
                <span>→</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;