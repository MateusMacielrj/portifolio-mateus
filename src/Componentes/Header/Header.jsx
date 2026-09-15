import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      
      <div className="header-container">

        {/* Logo / Nome */}
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span>Mateus</span> <strong>Maciel</strong>
          <small>Desenvolvedor Front-end</small>
        </a>

        {/* Menu mobile */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Navegação */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#hero" onClick={closeMenu}>
                Início
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Habilidades
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projetos
              </a>
            </li>

            <li>
              <a href="#serviços" onClick={closeMenu}>
                Serviços
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Depoimentos
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão CTA */}
        <a href="#contact" className="header-button">
          Vamos conversar <span>→</span>
        </a>

      </div>
    </header>
  );
}

export default Header;