import imagemProjetoLeo from "../../assets/corte perssonal.png";
import imagemProjetoJuliana from "../../assets/porjeto-juliana.png";
import imagemProjetoBanco from "../../assets/projeto-banco.png";
import imagemProjetoDark from "../../assets/projeto-filydark.png";
import imagemProjetoAcre from "../../assets/projeto-acrerio.png";
import imagemProjetoCard from "../../assets/card-react.png";
import imagemElencofFutebol from "../../assets/elenco-futebol.png";
import imagemGitubpesquisa from "..//../assets/github-pesquisa.png"
import imagemFilme from "..//../assets/movie-app.png"

function Portfolio() {
  const projetos = [
     {
      imagem: imagemFilme,
      titulo: "CineFinder",
      descricao:
        "O CineFinder é uma aplicação web desenvolvida em React que permite pesquisar filmes em tempo real utilizando a API pública OMDB. A aplicação oferece uma experiência moderna e responsiva, possibilitando que os usuários encontrem filmes rapidamente, visualizem informações detalhadas e salvem seus favoritos para acesso futuro. O projeto foi desenvolvido com foco em boas práticas de Front-end, organização de código, consumo de APIs REST e experiência do usuário.",
      tags: ["React", "React Router", "JavaScript", "CSS", "Map", "Dados", "API"],
      link: "https://mateusmacielrj.github.io/CineFinder/",
    },{
      imagem: imagemGitubpesquisa,
      titulo: "GitHub Search App",
      descricao:
        "Aplicação em React que consome a API do GitHub para buscar e exibir perfis de usuários em tempo real, com interface responsiva e tratamento de carregamento e erros. Tecnologias: React, Vite, JavaScript e CSS.",
      tags: ["React", "React Router", "JavaScript", "CSS", "Map", "Dados", "API"],
      link: "https://mateusmacielrj.github.io/github-search//",
    },{
      imagem: imagemElencofFutebol,
      titulo: "Elencos da Série A",
      descricao:
        "Aplicação React que manipula e renderiza dados de elencos da Série A a partir de objetos e arrays, utilizando map, props e rotas dinâmicas com React Router, com foco em componentização e navegação.",
      tags: ["React", "React Router", "JavaScript", "CSS", "Map", "Dados"],
      link: "https://mateusmacielrj.github.io/elenco-futebol/",
    },
    {
      imagem: imagemProjetoLeo,
      titulo: "Landing Page de Personal Trainer",
      descricao:
        "Experiência digital completa que conecta Personal Trainers a seus futuros alunos com estilo, clareza e performance.",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/projeto-leo/#planos",
    },
    {
      imagem: imagemProjetoJuliana,
      titulo: "Landing Page Nutricionista",
      descricao:
        "Landing page profissional desenvolvida para uma nutricionista, destacando seus serviços, filosofia de trabalho e formas de contato com um design moderno e responsivo.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/lp-juliana/",
    },
    {
      imagem: imagemProjetoBanco,
      titulo: "Sistema de Gerenciamento Bancário",
      descricao:
        "Aplicação web voltada para controle e visualização de dados bancários, permitindo ao usuário cadastrar, consultar e gerenciar informações de forma simples e intuitiva.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/projeto-banco/",
    },
    {
      imagem: imagemProjetoDark,
      titulo: "Landing Page Fylo Dark",
      descricao:
        "Landing page inspirada no desafio Fylo Dark Theme, desenvolvida em React com foco em layout moderno, responsivo e visual elegante voltado à apresentação de serviços de armazenamento em nuvem.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/fylo-dark-react/",
    },
    {
      imagem: imagemProjetoAcre,
      titulo: "Landing Page AcreRio Soluções",
      descricao:
        "Landing page institucional desenvolvida para a empresa AcreRio Soluções, com foco em apresentar os serviços de tecnologia, design moderno, performance otimizada e navegação responsiva.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://acreriosolucoes.com/",
    },
    {
      imagem: imagemProjetoCard,
      titulo: "Card Interativo em React",
      descricao:
        "Projeto desenvolvido em React que apresenta um card interativo e responsivo, focado em design limpo, animações suaves e boa experiência de usuário.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/Card-react/",
    },
  ];

  return (
    <div className="portfolio-container " id="projects">
      <h2>Meu Portfólio</h2>
      <p>Especializado em Landing Pages de Alta Conversão</p>
      <div className="portfolio-filtros">
        <button>Todos</button>
      </div>

      <div className="portfolio-lista">
        {projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.link}
            className="portfolio-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-card">
              <div className="portfolio-card-imagem">
                <img src={projeto.imagem} alt={projeto.titulo} />
              </div>
              <div className="portfolio-card-conteudo">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className="portfolio-card-tags">
                  {projeto.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
