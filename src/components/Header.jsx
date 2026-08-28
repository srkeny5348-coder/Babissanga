import { useState, useEffect } from 'react';

const Header = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#/" aria-label="BJA Babissanga inicial">
          <img src="/NLogo.png" alt="BJA Babissanga Logo" />
        </a>
        
        <nav className="nav" aria-label="Navegação principal">
          <a href="#/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Início</a>
          <a href="#/sobre" className={`nav-link ${currentPage === 'sobre' ? 'active' : ''}`}>Empresa</a>
          <a href="#/servicos" className={`nav-link ${currentPage === 'servicos' ? 'active' : ''}`}>Serviços</a>
          <a href="#/frota" className={`nav-link ${currentPage === 'frota' ? 'active' : ''}`}>Frota</a>
          <a href="#/contacto" className={`nav-link ${currentPage === 'contacto' ? 'active' : ''}`}>Contacto</a>
        </nav>
        
        <a href="#/contacto" className="header-cta">
          Pedir cotação <span>↗</span>
        </a>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={toggleMenu}>Início</a>
        <a href="#/sobre" className={`nav-link ${currentPage === 'sobre' ? 'active' : ''}`} onClick={toggleMenu}>Empresa</a>
        <a href="#/servicos" className={`nav-link ${currentPage === 'servicos' ? 'active' : ''}`} onClick={toggleMenu}>Serviços</a>
        <a href="#/frota" className={`nav-link ${currentPage === 'frota' ? 'active' : ''}`} onClick={toggleMenu}>Frota</a>
        <a href="#/contacto" className={`nav-link ${currentPage === 'contacto' ? 'active' : ''}`} onClick={toggleMenu}>Contacto</a>
        <a href="#/contacto" className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={toggleMenu}>
          Pedir cotação <span>↗</span>
        </a>
      </nav>
    </>
  );
};

export default Header;
