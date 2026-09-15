import imagemProjetoLeo from "../../assets/corte perssonal.png";
import imagemProjetoJuliana from "../../assets/porjeto-juliana.png";
import imagemProjetoBanco from "../../assets/projeto-banco.png";
import imagemProjetoDark from "../../assets/projeto-filydark.png";
import imagemProjetoAcre from "../../assets/projeto-acrerio.png";
import imagemProjetoCard from "../../assets/card-react.png";
import imagemElencofFutebol from "../../assets/elenco-futebol.png";
import imagemGitubpesquisa from "../../assets/github-pesquisa.png";
import imagemFilme from "../../assets/movie-app.png";

function Portfolio() {
  const projetos = [
    {
      imagem: imagemFilme,
      titulo: "CineFinder",
      descricao:
        "Aplicação web desenvolvida em React que permite pesquisar filmes em tempo real utilizando a API pública OMDB. O projeto trabalha consumo de API, React Router, favoritos e uma interface responsiva.",
      tags: ["React", "JavaScript", "CSS", "API"],
      link: "https://mateusmacielrj.github.io/CineFinder/",
    },

    {
      imagem: imagemGitubpesquisa,
      titulo: "GitHub Search App",
      descricao:
        "Aplicação em React que consome a API do GitHub para buscar e exibir perfis de usuários em tempo real, com interface responsiva e tratamento de carregamento e erros.",
      tags: ["React", "Vite", "JavaScript", "API"],
      link: "https://mateusmacielrj.github.io/github-search/",
    },

    {
      imagem: imagemElencofFutebol,
      titulo: "Elencos da Série A",
      descricao:
        "Aplicação React que manipula e renderiza dados de elencos da Série A utilizando objetos, arrays, map, props e rotas dinâmicas com React Router.",
      tags: ["React", "Router", "JavaScript", "CSS"],
      link: "https://mateusmacielrj.github.io/elenco-futebol/",
    },

    {
      imagem: imagemProjetoLeo,
      titulo: "Landing Page de Personal Trainer",
      descricao:
        "Landing page desenvolvida para apresentar serviços de Personal Trainer de forma moderna, clara e responsiva, com foco na experiência do usuário.",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/projeto-leo/#planos",
    },

    {
      imagem: imagemProjetoJuliana,
      titulo: "Landing Page Nutricionista",
      descricao:
        "Landing page profissional desenvolvida para uma nutricionista, destacando seus serviços, filosofia de trabalho e formas de contato.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/lp-juliana/",
    },

    {
      imagem: imagemProjetoBanco,
      titulo: "Sistema de Gerenciamento Bancário",
      descricao:
        "Aplicação web voltada para controle e visualização de dados bancários, permitindo cadastrar, consultar e gerenciar informações.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/projeto-banco/",
    },

    {
      imagem: imagemProjetoDark,
      titulo: "Landing Page Fylo Dark",
      descricao:
        "Landing page inspirada no desafio Fylo Dark Theme, desenvolvida em React com foco em responsividade, organização visual e experiência do usuário.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/fylo-dark-react/",
    },

    {
      imagem: imagemProjetoAcre,
      titulo: "Landing Page AcreRio Soluções",
      descricao:
        "Landing page institucional desenvolvida para apresentar os serviços da empresa, com design moderno, navegação responsiva e foco em performance.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://acreriosolucoes.com/",
    },

    {
      imagem: imagemProjetoCard,
      titulo: "Card Interativo em React",
      descricao:
        "Projeto desenvolvido em React apresentando um card interativo e responsivo, com foco em design limpo, animações e experiência do usuário.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/Card-react/",
    },
  ];

  return (
    <section className="portfolio-container" id="projects">

      {/* CABEÇALHO */}
      <div className="portfolio-header">

        <span className="portfolio-label">
          PORTFÓLIO
        </span>

        <h2>
          Projetos que transformam
          <br />
          <strong>ideias em experiências.</strong>
        </h2>

        <p>
          Uma seleção de projetos desenvolvidos durante minha jornada
          de aprendizado em desenvolvimento Front-end.
        </p>

      </div>

      {/* FILTROS */}
      <div className="portfolio-filtros">
        <button className="filtro-ativo">
          Todos
        </button>
      </div>

      {/* PROJETOS */}
      <div className="portfolio-lista">

        {projetos.map((projeto, index) => (

          <a
            key={index}
            href={projeto.link}
            className="portfolio-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >

            <article className="portfolio-card">

              <div className="portfolio-card-imagem">

                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                />

                <div className="portfolio-overlay">
                  <span>
                    Ver projeto →
                  </span>
                </div>

              </div>

              <div className="portfolio-card-conteudo">

                <h3>
                  {projeto.titulo}
                </h3>

                <p>
                  {projeto.descricao}
                </p>

                <div className="portfolio-card-tags">

                  {projeto.tags.map((tag, tagIndex) => (

                    <span
                      key={tagIndex}
                      className="tag-item"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;