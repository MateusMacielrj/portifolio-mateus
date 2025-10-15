import { useState } from "react";
import ImgeSetaEsquerda from "../../assets/seta-esquerda.png";
import ImgeSetaDireita from "../../assets/seta-direita.png";
import ImagemJuliana from "../../assets/perfil-juliana.png"; 
import ImgLeo from "../../assets/leo 1.jpg"

function Testimonials() {
 const depoimentos = [
  {
    texto:
      "Simplesmente incrível! O Mateus captou perfeitamente a essência do meu trabalho como nutricionista e criou uma landing page moderna e funcional. A página é clara, intuitiva e já me trouxe novos clientes. Recomendo totalmente!",
    nome: "Juliana Vieira",
    imagem: ImagemJuliana,
  },
  {
    texto:
      "O Mateus superou todas as minhas expectativas! Precisava de uma landing page que transmitisse profissionalismo e acolhimento, e ele conseguiu traduzir minha filosofia em um design moderno e atraente. A página é fácil de navegar e já se tornou uma ferramenta essencial para o meu atendimento. Recomendo de olhos fechados!",
    nome: "Cliente Satisfeita",
    imagem: ImgLeo,
  },
];


  const [depoimentoAtual, setDepoimentoAtual] = useState(0);

  function irParaFrente() {
    setDepoimentoAtual((depoimentoAtual + 1) % depoimentos.length);
  }

  function irParaTras() {
    setDepoimentoAtual(
      (depoimentoAtual - 1 + depoimentos.length) % depoimentos.length
    );
  }

  return (
    <div className="testemunha">
      <h1>O que dizem meus clientes</h1>

      <div className="depoimento-container">
        <img
          src={depoimentos[depoimentoAtual].imagem}
          alt={`Foto de ${depoimentos[depoimentoAtual].nome}`}
          className="imagem-depoimento"
        />
        <p>{depoimentos[depoimentoAtual].texto}</p>
        <p>
          <strong>{depoimentos[depoimentoAtual].nome}</strong>
        </p>
      </div>

      <div className="botoes-setas">
        <button onClick={irParaTras} className="btn-esquerda">
          <img src={ImgeSetaEsquerda} alt="Seta para esquerda" />
        </button>
        <button onClick={irParaFrente} className="btn-direita">
          <img src={ImgeSetaDireita} alt="Seta para direita" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;