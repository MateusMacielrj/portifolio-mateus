// Componente para exibir uma habilidade individual
const HabilidadeItem = ({ nome, porcentagem }) => {
  return (
    <div className="habilidade-item">
      <div className="habilidade-info">
        <span>{nome}</span>
        <span>{porcentagem}%</span>
      </div>
      <div className="habilidade-barra-fundo">
        <div
          className="habilidade-barra-progresso"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
    </div>
  );
};

// Componente principal
function Habilidades() {
  const habilidades = [
    { nome: "React", porcentagem: 95 },
    { nome: "JavaScript", porcentagem: 90 },
    { nome: "CSS", porcentagem: 90 },
    { nome: "Next.js", porcentagem: 80 },
    { nome: "Node.js", porcentagem: 75 },
    { nome: "Git", porcentagem: 85 },
    { nome: "GitHub", porcentagem: 85 },
  ];

  return (
    <section className="habilidades">
      <h2>Minhas Habilidades</h2>
      <div className="habilidades-grid">
        {habilidades.map((item, index) => (
          <HabilidadeItem
            key={index}
            nome={item.nome}
            porcentagem={item.porcentagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
