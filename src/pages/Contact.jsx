import { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Contact = ({ initialMessage }) => {
  const { addMessage, servicesData } = useSiteData();
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: 'Seleccionar serviço',
    mensagem: ''
  });

  // Prefill message if directed from fleet selection page
  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({
        ...prev,
        mensagem: initialMessage,
        servico: initialMessage.includes('Equipamento') || initialMessage.includes('Empilhadeira') || initialMessage.includes('Hiace') || initialMessage.includes('Camiões') ? 'Transporte Rodoviário' : 'Seleccionar serviço'
      }));
    }
  }, [initialMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      // Restrict strictly to numbers and optional leading plus sign
      const numericOnly = value.replace(/[^\d+]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericOnly }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await addMessage(formData);
    } catch {
      setFormStatus('error');
      return;
    }

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        servico: 'Seleccionar serviço',
        mensagem: ''
      });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <>
      <section className="section section-bg-light" id="cotacao" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="quote-grid">
            <div className="quote-text">
              <span className="eyebrow"><i></i> COTAÇÃO IMEDIATA</span>
              <h2>Pronto para<br /><span>mover mais longe?</span></h2>
              <p style={{ marginBottom: '24px' }}>
                Partilhe os detalhes da sua carga e operação logística. A nossa equipa comercial analisará o pedido de imediato e apresentará uma proposta personalizada no prazo máximo de 24 horas.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--color-secondary)' }}><IconClock /></span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Resposta rápida em 24h úteis</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--color-secondary)' }}><IconGlobe /></span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Cobertura nacional e internacional</span>
                </div>
              </div>
            </div>

            <div className="quote-form-wrapper">
              <form onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      placeholder="Como podemos chamar-lhe?"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail Profissional *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="nome@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone / WhatsApp * (Apenas números)</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone" 
                      inputMode="numeric"
                      pattern="[0-9+]*"
                      placeholder="Ex: 921508050 ou +244921508050"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      onKeyDown={(e) => {
                        const allowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'];
                        if (!allowed.includes(e.key) && !/[\d+]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="empresa">Empresa</label>
                    <input 
                      type="text" 
                      id="empresa" 
                      name="empresa" 
                      placeholder="Nome da empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width" style={{ marginBottom: '16px' }}>
                  <label htmlFor="servico">Serviço Pretendido *</label>
                  <select 
                    id="servico" 
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="Seleccionar serviço">Seleccionar serviço</option>
                    {(servicesData || []).map(service => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="mensagem">Detalhes da Carga *</label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    placeholder="Indique a origem, destino, tipo de carga, dimensões estimadas ou requisitos específicos de transporte."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={formStatus === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {formStatus === 'submitting' ? 'A Enviar Pedido...' : 'Enviar Pedido de Cotação →'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Pedido de cotação enviado com sucesso! Entraremos em contacto muito em breve.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-status error">
                    ✗ Ocorreu um erro ao enviar o pedido. Por favor, tente novamente ou envie um e-mail direto.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Network Map & Hubs section */}
      <section className="network" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container">
          <div className="network-header-center">
            <span className="eyebrow" style={{ color: 'var(--color-secondary)' }}><i></i> BASE OPERACIONAL & COBERTURA</span>
            <h2>Nossa Localização e Conexões Globais</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '680px', margin: '0 auto 30px' }}>
              Com sede estratégica em Luanda, asseguramos conectividade multimodal rápida para todo o território angolano, África Austral e os principais portos internacionais.
            </p>
          </div>

          <div className="map-showcase-wrapper">
            {/* Real Interactive Map Frame */}
            <div className="map-frame-container">
              <iframe
                title="Mapa de Localização Babissanga Luanda"
                src="https://maps.google.com/maps?q=Luanda,%20Angola&t=m&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-floating-badge">
                <span className="pulse-dot"></span>
                <div>
                  <small>HUB PRINCIPAL</small>
                  <strong>Luanda — Porto & Terminais</strong>
                </div>
              </div>
            </div>

            {/* Hubs & Coverage Info Cards */}
            <div className="hubs-info-grid">
              <div className="hub-card">
                <div className="hub-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <div className="hub-content">
                  <h4>Terminal Portuário de Luanda</h4>
                  <p>Operações de desalfandegamento, receção e despacho contínuo de contentores.</p>
                  <span className="hub-tag">Marítimo & Aduaneiro</span>
                </div>
              </div>

              <div className="hub-card">
                <div className="hub-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="hub-content">
                  <h4>Corredores Nacionais</h4>
                  <p>Distribuição rodoviária para Benguela, Huambo, Lobito, Soyo, Cabinda e Namibe.</p>
                  <span className="hub-tag">Rodoviário FTL / LTL</span>
                </div>
              </div>

              <div className="hub-card">
                <div className="hub-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <div className="hub-content">
                  <h4>Aeroporto Internacional</h4>
                  <p>Cargas aéreas expressas, trânsito prioritário e desembaraço aduaneiro rápido.</p>
                  <span className="hub-tag">Carga Aérea Expresso</span>
                </div>
              </div>

              <div className="hub-card">
                <div className="hub-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="hub-content">
                  <h4>Rede Internacional & SADC</h4>
                  <p>Conexões transfronteiriças com a África do Sul, RDC, Namíbia, Ásia e Europa.</p>
                  <span className="hub-tag">Rotas Globais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
