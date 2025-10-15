import ImgPc from '../../assets/notebook (1).png'
import ImgCog from '../../assets/cog.png'
import ImgMobile from '../../assets/agenda.png'

function Services() {
  return (
    <div className="servicos" id='serviços'>

      <div className="descricao">
        <h1>Meus Serviços</h1>
        <p>Ofereço soluções completas para suas necessidades digitais</p>
      </div>

      <div className="card-serv">
           
           <img src={ImgPc} alt="" />

        <h4>Desenvolvimento Front-End</h4>
        
        <p>
          Desenvolvimento de aplicações web modernas usando as mais recentes tecnologias e frameworks.
        </p>
        
        <ul className="tecnologias">
          <li>React/Next.js</li>
          <li>TypeScript</li>
          <li>Performance</li>
          <li>Mobile</li>
        </ul>

       <button
  onClick={() =>
    window.open(
      "https://wa.me/21965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!",
      "_blank"
    )
  }
>
  Solicitar Orçamento
</button>


      </div>

      <div className="card-serv">
          <img src={ImgCog} alt="" />

        <h4>Manutenção & Suporte</h4>
        
        <p>
          Suporte contínuo e manutenção de projetos existentes, incluindo atualizações e melhorias.
        </p>
        
        <ul className="tecnologias">
          <li>Bug Fixes</li>
          <li>Updates</li>
          <li>Monitoring</li>
          <li>Backup</li>
        </ul>

        <button
  onClick={() =>
    window.open(
      "https://wa.me/21965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!",
      "_blank"
    )
  }
>
  Solicitar Orçamento
</button>

      </div>


       <div className="card-serv">
           
           <img src={ImgMobile} alt="" />

        <h4>Desenvolvimento Front-End</h4>
        
        <p>
          Desenvolvimento de aplicações web modernas usando as mais recentes tecnologias e frameworks.
        </p>
        
        <ul className="tecnologias">
          <li>React/Next.js</li>
          <li>TypeScript</li>
          <li>Performance</li>
          <li>Mobile</li>
        </ul>

        <button
  onClick={() =>
    window.open(
      "https://wa.me/21965890511?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!",
      "_blank"
    )
  }
>
  Solicitar Orçamento
</button>

      </div>

    </div>
  );
}

export default Services;

