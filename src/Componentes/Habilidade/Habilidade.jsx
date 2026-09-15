import {
  LuCode,
  LuBraces,
  LuPalette,
  LuLayers3,
  LuGitBranch,
  LuDatabase,
} from "react-icons/lu";

function Habilidade() {
  const habilidades = [
    {
      nome: "HTML",
      descricao: "Estrutura e semântica",
      nivel: "Avançado",
      porcentagem: "90%",
      icone: <LuCode />,
    },

    {
      nome: "CSS",
      descricao: "Layouts e responsividade",
      nivel: "Avançado",
      porcentagem: "90%",
      icone: <LuPalette />,
    },

    {
      nome: "JavaScript",
      descricao: "Lógica e interatividade",
      nivel: "Intermediário",
      porcentagem: "75%",
      icone: <LuBraces />,
    },

    {
      nome: "React",
      descricao: "Interfaces e componentes",
      nivel: "Intermediário",
      porcentagem: "70%",
      icone: <LuLayers3 />,
    },

    {
      nome: "Git",
      descricao: "Versionamento de código",
      nivel: "Intermediário",
      porcentagem: "70%",
      icone: <LuGitBranch />,
    },

    {
      nome: "SQL",
      descricao: "Banco de dados",
      nivel: "Básico",
      porcentagem: "50%",
      icone: <LuDatabase />,
    },
  ];

  return (
    <section className="habilidades" id="skills">

      <div className="habilidades-container">

        {/* CABEÇALHO */}
        <div className="habilidades-header">

          <span>MINHAS HABILIDADES</span>

          <h2>
            Tecnologias que uso para
            <br />
            <strong>transformar ideias</strong> em código.
          </h2>

          <p>
            Ferramentas e tecnologias que venho estudando e utilizando
            na construção dos meus projetos.
          </p>

        </div>

        {/* HABILIDADES */}
        <div className="habilidades-grid">

          {habilidades.map((habilidade) => (

            <div
              className="habilidade-card"
              key={habilidade.nome}
            >

              <div className="habilidade-topo">

                <div className="habilidade-icone">
                  {habilidade.icone}
                </div>

                <div className="habilidade-info">

                  <h3>
                    {habilidade.nome}
                  </h3>

                  <p>
                    {habilidade.descricao}
                  </p>

                </div>

                <span className="habilidade-nivel">
                  {habilidade.nivel}
                </span>

              </div>

              <div className="habilidade-barra">

                <span
                  style={{
                    width: habilidade.porcentagem,
                  }}
                ></span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Habilidade;