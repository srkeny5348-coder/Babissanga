import React from 'react';

const About = () => {
  return (
    <section className="section section-bg-white" style={{ paddingTop: '140px' }}>
      <div className="container">
        <span className="eyebrow dark"><i></i> QUEM SOMOS</span>
        <div className="intro-grid">
          <h2>Precisão logística.<br /><span>Ambição global.</span></h2>
          <div className="intro-content">
            <p>
              A **BJA - Babissanga** é uma empresa angolana orientada para o mundo, especializada em transportes e logística de alto desempenho. Aliamos experiência local profunda, tecnologia de ponta e uma rede estratégica para transformar cadeias de abastecimento complexas em vantagens competitivas para o seu negócio.
            </p>
            <p>
              Atuamos como um parceiro estratégico integral, garantindo visibilidade total das operações, segurança estrita de todas as mercadorias e pontualidade exemplar em cada etapa da operação.
            </p>
            <p>
              Com uma equipa técnica altamente motivada e frotas de equipamentos próprios certificados, ligamos o mercado angolano aos principais corredores logísticos regionais e internacionais, de forma ética e sustentável.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="values-grid" style={{ marginTop: '60px' }}>
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Nossa Missão</h3>
            <p>Conectar mercados nacionais e internacionais através de soluções de transporte e logística eficientes, seguras e personalizadas que impulsionam o crescimento sustentável dos nossos clientes.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3>Nossa Visão</h3>
            <p>Ser reconhecida como a líder em inovação e excelência no setor de logística e transporte na África Austral, servindo de ponte de referência para o comércio global.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Valores Fundamentais</h3>
            <div className="core-values-list">
              <span className="value-pill">Transparência</span>
              <span className="value-pill">Segurança</span>
              <span className="value-pill">Pontualidade</span>
              <span className="value-pill">Inovação</span>
              <span className="value-pill">Sustentabilidade</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="metrics" style={{ marginTop: '80px', paddingBottom: '40px' }}>
          <div className="metric-item">
            <strong>12<span>+</span></strong>
            <p>ANOS DE EXPERIÊNCIA</p>
          </div>
          <div className="metric-item">
            <strong>24<span>/7</span></strong>
            <p>VISIBILIDADE DA OPERAÇÃO</p>
          </div>
          <div className="metric-item">
            <strong>35<span>+</span></strong>
            <p>ROTAS E DESTINOS</p>
          </div>
          <div className="metric-item">
            <strong>98<span>%</span></strong>
            <p>ENTREGAS NO PRAZO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
