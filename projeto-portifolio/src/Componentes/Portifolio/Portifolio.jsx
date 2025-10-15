import imagemProjetoLeo from "../../assets/corte perssonal.png";
import imagemProjetoJuliana from "../../assets/porjeto-juliana.png"
import imagemProjetoBanco from "../../assets/projeto-banco.png"
import imagemProjetoDark from "../../assets/projeto-filydark.png"

function Portfolio() {
  
  const projetos = [
    {
     imagem: imagemProjetoLeo,
     titulo: "Landing Page de Personal Trainer",
     descricao: "Experiência digital completa que conecta Personal Trainers a seus futuros alunos com estilo, clareza e performance.",
     tags: ["React", "CSS", "JavaScript"],
     link: "https://mateusmacielrj.github.io/projeto-leo/#planos"
    },
    {
      imagem: imagemProjetoJuliana,
      titulo: "Landing Page Nutricionista",
      descricao: "Landing page profissional desenvolvida para uma nutricionista, destacando seus serviços, filosofia de trabalho e formas de contato com um design moderno e responsivo.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/lp-juliana/"
    },
    {
      imagem: imagemProjetoBanco,
      titulo: "Sistema de Gerenciamento Bancário",
      descricao: "Aplicação web voltada para controle e visualização de dados bancários, permitindo ao usuário cadastrar, consultar e gerenciar informações de forma simples e intuitiva.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/projeto-banco/",
    },
    {
      imagem: imagemProjetoDark,
      titulo: "Landing Page Fylo Dark",
      descricao: "Landing page inspirada no desafio Fylo Dark Theme, desenvolvida em React com foco em layout moderno, responsivo e visual elegante voltado à apresentação de serviços de armazenamento em nuvem.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      link: "https://mateusmacielrj.github.io/fylo-dark-react/",
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
