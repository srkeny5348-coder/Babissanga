import React from 'react';

const IconTruck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconShip = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21h20" />
    <path d="M19.3 14.8C21.1 13.5 22 11.7 22 10V5h-3v3.5C19 9.9 17.7 11 16 11s-3-1.1-3-2.5V5h-3v3.5C10 9.9 8.7 11 7 11S4 9.9 4 8.5V5H1v5c0 1.7.9 3.5 2.7 4.8L5 20h14l.3-5.2z" />
  </svg>
);

const IconPlane = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M12 22V12" />
    <path d="M12 12H3" />
    <path d="M12 12h9" />
  </svg>
);

const IconBox = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const Services = () => {
  return (
    <section className="section section-bg-light" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i></i> SERVIÇOS TÉCNICOS</span>
            <h2>Uma solução para<br />cada <em>desafio.</em></h2>
          </div>
          <p className="section-copy">
            Do primeiro quilómetro à entrega final no destino, assumimos o controlo profissional de toda a cadeia de abastecimento.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-header">
              <span className="service-number">01</span>
              <div className="service-icon"><IconTruck /></div>
            </div>
            <div className="service-body">
              <h3>Transporte Rodoviário</h3>
              <p>
                Frotas dedicadas de camiões pesados e comerciais ligeiros. Gestão de cargas completas (FTL) e distribuição urbana regional ágil com rastreabilidade ponta a ponta. Oferecemos segurança operacional máxima e motoristas especializados nas estradas de Angola.
              </p>
            </div>
            <div className="service-footer">
              <a href="#/contacto" className="service-link">Pedir Cotação de Carga <span>→</span></a>
            </div>
          </article>

          <article className="service-card">
            <div className="service-header">
              <span className="service-number">02</span>
              <div className="service-icon"><IconShip /></div>
            </div>
            <div className="service-body">
              <h3>Logística Marítima</h3>
              <p>
                Gestão integrada de contentores, consolidação de carga, desalfandegamento expedito e coordenação portuária eficiente diretamente nas principais docas. Tratamos de todo o processo burocrático para desembaraço de importação e exportação.
              </p>
            </div>
            <div className="service-footer">
              <a href="#/contacto" className="service-link">Consultar Tarifas Marítimas <span>→</span></a>
            </div>
          </article>

          <article className="service-card">
            <div className="service-header">
              <span className="service-number">03</span>
              <div className="service-icon"><IconPlane /></div>
            </div>
            <div className="service-body">
              <h3>Carga Aérea</h3>
              <p>
                Segurança máxima e velocidade prioritária para cargas urgentes, documentos de alto valor, bens perecíveis ou sensíveis através de ligações aéreas dedicadas e parcerias com as principais companhias aéreas internacionais.
              </p>
            </div>
            <div className="service-footer">
              <a href="#/contacto" className="service-link">Orçamento Expresso Aéreo <span>→</span></a>
            </div>
          </article>

          <article className="service-card">
            <div className="service-header">
              <span className="service-number">04</span>
              <div className="service-icon"><IconBox /></div>
            </div>
            <div className="service-body">
              <h3>Projectos Especiais</h3>
              <p>
                Planeamento técnico logístico complexo para cargas de dimensões fora do padrão, logística industrial, sector de energia (petróleo e gás) e suporte logístico para grandes obras de infraestruturas nacionais.
              </p>
            </div>
            <div className="service-footer">
              <a href="#/contacto" className="service-link">Falar com Engenharia <span>→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
