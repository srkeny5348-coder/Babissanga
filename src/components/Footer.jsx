const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.21 3.465 8.376 0 6.533-5.325 11.858-11.857 11.858-2.01 0-3.998-.511-5.762-1.488L0 24zm6.59-4.859c1.62.962 3.208 1.47 4.673 1.47 5.251 0 9.52-4.267 9.52-9.522 0-2.545-.992-4.936-2.793-6.738C16.248 2.55 13.86 1.558 11.33 1.558c-5.254 0-9.524 4.268-9.524 9.522 0 1.58.423 3.12 1.228 4.475l-.997 3.643 3.73-.978l.29.172zm11.238-7.857c-.3-.15-1.772-.875-2.047-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.797-1.496-1.782-1.671-2.082-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.567-.009-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.225 5.115 4.525.715.31 1.273.495 1.708.633.718.228 1.37.195 1.887.118.575-.085 1.772-.725 2.022-1.425.25-.7.25-1.293.175-1.425-.075-.13-.275-.205-.575-.355z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="site-footer" id="contacto">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src="/logo.jpeg" alt="BJA Babissanga" />
              <span>BABISSANGA</span>
            </div>
            <p style={{ marginTop: '12px', opacity: 0.8, maxWidth: '400px' }}>
              Segurança, transparência e pontualidade na logística global de mercadorias.
            </p>
          </div>
          <h2>Vamos mover<br />o <em>futuro.</em></h2>
          <a className="round-link" href="mailto:geral@babissanga.com" aria-label="Enviar email geral">↗</a>
        </div>

        <div className="footer-details">
          {/* Column 1: Direct Contacts */}
          <div className="footer-column">
            <span className="footer-label">Atendimento Rápido</span>
            <div className="footer-contacts-list">
              <a href="tel:+244921508050" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '16px' }}>
                <IconPhone /> +244 921 508 050
              </a>
              <a href="https://wa.me/p/28141082612189463/244933870999" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '700', fontSize: '15px' }}>
                <IconWhatsApp /> Falar no WhatsApp
              </a>
              <div style={{ marginTop: '8px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <small style={{ display: 'block', color: 'var(--color-text-gray-light)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>BASE OPERACIONAL</small>
                <b style={{ color: 'var(--color-bg-white)', fontSize: '13px' }}>Luanda, Angola</b>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>Disponibilidade operacional 24 / 7</p>
              </div>
            </div>
          </div>

          {/* Column 2: Email Departments */}
          <div className="footer-column">
            <span className="footer-label">Departamentos de E-mail</span>
            <div className="footer-contacts-list">
              <a href="mailto:geral@babissanga.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail /> <span><b>Geral:</b> geral@babissanga.com</span>
              </a>
              <a href="mailto:operacoes@babissanga.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail /> <span><b>Operações:</b> operacoes@babissanga.com</span>
              </a>
              <a href="mailto:financas@babissanga.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail /> <span><b>Financeiro:</b> financas@babissanga.com</span>
              </a>
              <a href="mailto:juridico@babissanga.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail /> <span><b>Jurídico:</b> juridico@babissanga.com</span>
              </a>
              <a href="mailto:apoio@babissanga.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail /> <span><b>Apoio:</b> apoio@babissanga.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social Networks */}
          <div className="footer-column">
            <span className="footer-label">Siga a Babissanga</span>
            <div className="socials-list">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn <span>↗</span>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook <span>↗</span>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                YouTube <span>↗</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BABISSANGA, LDA. Todos os direitos reservados.</p>
          <p className="mono" style={{ fontSize: '11px' }}>DESIGN E LOGÍSTICA SEM FRONTEIRAS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
