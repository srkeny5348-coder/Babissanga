import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const Home = () => {
  const { fleetData, heroSlides } = useSiteData();
  const [currentBg, setCurrentBg] = useState(0);

  const activeSlides = heroSlides && heroSlides.length > 0
    ? heroSlides
    : [{ id: 'default', url: '/bg1.jpg', label: 'Operação Portuária' }];

  useEffect(() => {
    if (activeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % activeSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const volvo = fleetData.find(f => f.id === 'volvo') || {};
  const steelbro = fleetData.find(f => f.id === 'steelbro') || {};
  const hummerlift = fleetData.find(f => f.id === 'hummerlift') || {};

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-carousel">
          {activeSlides.map((imgObj, idx) => (
            <div
              key={imgObj.id || idx}
              className={`hero-bg-slide ${idx === currentBg ? 'active' : ''}`}
              style={{ backgroundImage: `url(${imgObj.url})` }}
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-text animate-fade-in-up">
              <h1>Movemos o que<br /><em>faz o mundo</em> avançar.</h1>
              <p className="hero-copy">
                Uma operação integrada que conecta mercados de transporte rodoviário, marítimo e aéreo, reduz distâncias e entrega confiança em cada quilómetro.
              </p>
              <div className="hero-actions">
                <a className="btn btn-secondary" href="#/contacto">Começar agora <span>→</span></a>
                <a className="btn btn-outline" href="#/servicos">Explorar soluções <span>↓</span></a>
              </div>
            </div>
            <div className="hero-graphic">
              <img src="/circulo2.png" className="hero-image-circulo" alt="BJA Babissanga - Logística e Transporte" />
            </div>
          </div>
        </div>

        {activeSlides.length > 1 && (
          <div className="hero-carousel-dots">
            {activeSlides.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === currentBg ? 'active' : ''}`}
                onClick={() => setCurrentBg(idx)}
                aria-label={`Ver imagem ${idx + 1}`}
              />
            ))}
          </div>
        )}
        
        <div className="hero-bottom-bar">
          <div className="hero-routes">
            ANGOLA <span>•</span> ÁFRICA <span>•</span> MUNDO
          </div>
          <a href="#/sobre" className="mono" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            CONHECER EMPRESA <span>↓</span>
          </a>
        </div>
      </section>

      {/* Teaser Sobre Nós */}
      <section className="section section-bg-white">
        <div className="container">
          <span className="eyebrow dark"><i></i> QUEM SOMOS</span>
          <div className="intro-grid" style={{ marginBottom: '0px' }}>
            <h2>Precisão logística.<br /><span>Ambição global.</span></h2>
            <div className="intro-content">
              <p>
                A **BJA - Babissanga** é uma empresa angolana orientada para o mundo, especializada em transportes e logística. Aliamos experiência local profunda, tecnologia de ponta e uma rede estratégica para transformar cadeias de abastecimento complexas em vantagens competitivas para o seu negócio.
              </p>
              <a href="#/sobre" className="inline-link" style={{ marginTop: '10px' }}>Conheça a nossa história <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Serviços */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><i></i> SERVIÇOS TÉCNICOS</span>
              <h2>Nossas Soluções</h2>
            </div>
            <p className="section-copy">
              Oferecemos serviços especializados de transporte terrestre, gestão portuária e contentores para apoiar as suas necessidades comerciais.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <article className="service-card" style={{ height: '260px' }}>
              <div className="service-header" style={{ marginBottom: '10px' }}>
                <span className="service-number">01</span>
              </div>
              <div className="service-body">
                <h3>Transporte Rodoviário</h3>
                <p style={{ fontSize: '14px' }}>Frotas dedicadas de camiões e comerciais ligeiros para distribuição urbana e trânsito regional.</p>
              </div>
              <div className="service-footer" style={{ marginTop: '10px' }}>
                <a href="#/servicos" className="service-link">Saber mais <span>→</span></a>
              </div>
            </article>

            <article className="service-card" style={{ height: '260px' }}>
              <div className="service-header" style={{ marginBottom: '10px' }}>
                <span className="service-number">02</span>
              </div>
              <div className="service-body">
                <h3>Logística Marítima</h3>
                <p style={{ fontSize: '14px' }}>Gestão de contentores, desalfandegamento expedito e coordenação portuária eficiente.</p>
              </div>
              <div className="service-footer" style={{ marginTop: '10px' }}>
                <a href="#/servicos" className="service-link">Saber mais <span>→</span></a>
              </div>
            </article>

            <article className="service-card" style={{ height: '260px' }}>
              <div className="service-header" style={{ marginBottom: '10px' }}>
                <span className="service-number">03</span>
              </div>
              <div className="service-body">
                <h3>Carga Aérea & Projetos</h3>
                <p style={{ fontSize: '14px' }}>Transportes aéreos urgentes de alto valor e planeamento para projetos especiais sobredimensionados.</p>
              </div>
              <div className="service-footer" style={{ marginTop: '10px' }}>
                <a href="#/servicos" className="service-link">Saber mais <span>→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Teaser Frota */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark"><i></i> FROTA DISPONÍVEL</span>
              <h2>Nossa Frota</h2>
            </div>
            <p className="section-copy">
              Possuímos equipamentos modernos e adequados a todo o tipo de carga.
            </p>
          </div>

          <div className="fleet-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div className="vehicle-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="vehicle-image-wrapper" style={{ height: '180px' }}>
                <img src={volvo.image || '/WhatsApp Image 2026-08-18 at 10.12.14 AM (2).jpeg'} alt={volvo.name || 'Volvo FM'} />
              </div>
              <div className="vehicle-info" style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '18px' }}>{volvo.name || 'Camiões Volvo FM'}</h3>
                <a href="#/frota" className="btn-view-spec" style={{ marginTop: '10px', fontSize: '12px' }}>Ver Frota Completa</a>
              </div>
            </div>

            <div className="vehicle-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="vehicle-image-wrapper" style={{ height: '180px' }}>
                <img src={steelbro.image || '/WhatsApp Image 2026-08-18 at 10.12.13 AM.jpeg'} alt={steelbro.name || 'Steelbro'} />
              </div>
              <div className="vehicle-info" style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '18px' }}>{steelbro.name || 'Carregador Lateral Steelbro'}</h3>
                <a href="#/frota" className="btn-view-spec" style={{ marginTop: '10px', fontSize: '12px' }}>Ver Frota Completa</a>
              </div>
            </div>

            <div className="vehicle-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="vehicle-image-wrapper" style={{ height: '180px' }}>
                <img src={hummerlift.image || '/WhatsApp Image 2026-08-18 at 10.12.13 AM (1).jpeg'} alt={hummerlift.name || 'Hummerlift'} />
              </div>
              <div className="vehicle-info" style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '18px' }}>{hummerlift.name || 'Empilhadeiras HummerLift'}</h3>
                <a href="#/frota" className="btn-view-spec" style={{ marginTop: '10px', fontSize: '12px' }}>Ver Frota Completa</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
