import { useState } from "react";

import ImgeSetaEsquerda from "../../assets/seta-esquerda.png";
import ImgeSetaDireita from "../../assets/seta-direita.png";
import ImagemJuliana from "../../assets/perfil-juliana.png";
import ImgLeo from "../../assets/leo 1.jpg";

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
      nome: "Cliente",
      imagem: ImgLeo,
    },
  ];

  const [depoimentoAtual, setDepoimentoAtual] = useState(0);

  function irParaFrente() {
    setDepoimentoAtual(
      (depoimentoAtual + 1) % depoimentos.length
    );
  }

  function irParaTras() {
    setDepoimentoAtual(
      (depoimentoAtual - 1 + depoimentos.length) %
        depoimentos.length
    );
  }

  const depoimento = depoimentos[depoimentoAtual];

  return (
    <section className="testemunha" id="testimonials">

      <div className="testemunha-container">

        {/* CABEÇALHO */}
        <div className="testemunha-header">

          <span className="testemunha-label">
            DEPOIMENTOS
          </span>

          <h2>
            O que dizem
            <br />
            <strong>meus clientes.</strong>
          </h2>

          <p>
            Experiências de pessoas que confiaram no meu trabalho
            para transformar suas ideias em experiências digitais.
          </p>

        </div>


        {/* CARD DO DEPOIMENTO */}
        <div className="depoimento-container">

          <div className="depoimento-topo">

            <div className="depoimento-aspas">
              “
            </div>

            <div className="depoimento-cliente">

              <img
                src={depoimento.imagem}
                alt={`Foto de ${depoimento.nome}`}
                className="imagem-depoimento"
              />

              <div>
                <strong>
                  {depoimento.nome}
                </strong>

                <span>
                  Cliente
                </span>
              </div>

            </div>

          </div>


          {/* TEXTO */}
          <p className="depoimento-texto">
            {depoimento.texto}
          </p>


          {/* RODAPÉ */}
          <div className="depoimento-footer">

            <span className="depoimento-indicador">
              {String(depoimentoAtual + 1).padStart(2, "0")}
              <span> / </span>
              {String(depoimentos.length).padStart(2, "0")}
            </span>


            <div className="botoes-setas">

              <button
                onClick={irParaTras}
                className="btn-esquerda"
                aria-label="Depoimento anterior"
              >
                <img
                  src={ImgeSetaEsquerda}
                  alt="Depoimento anterior"
                />
              </button>


              <button
                onClick={irParaFrente}
                className="btn-direita"
                aria-label="Próximo depoimento"
              >
                <img
                  src={ImgeSetaDireita}
                  alt="Próximo depoimento"
                />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;