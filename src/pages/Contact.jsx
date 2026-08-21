import { useState, useEffect } from 'react';

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
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        servico: 'Seleccionar serviço',
        mensagem: ''
      });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
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
                  <div className="form-group">
                    <label htmlFor="servico">Serviço Pretendido *</label>
                    <select 
                      id="servico" 
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      required
                    >
                      <option disabled value="Seleccionar serviço">Seleccionar serviço</option>
                      <option value="Transporte Rodoviário">Transporte Rodoviário</option>
                      <option value="Logística Marítima">Logística Marítima</option>
                      <option value="Carga Aérea">Carga Aérea</option>
                      <option value="Projectos Especiais">Projectos Especiais</option>
                    </select>
                  </div>
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

      {/* Network Map / Base section */}
      <section className="network" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container">
          <div className="network-grid">
            <div className="network-text">
              <span className="eyebrow"><i></i> PRESENÇA E COBERTURA</span>
              <h2>Nossa Base e Conexões</h2>
              <p>
                A partir de Luanda, ligamos as principais rotas comerciais terrestres em Angola e estabelecemos rotas rápidas marítimas e aéreas para todo o mundo.
              </p>
              <div style={{ marginTop: '20px' }}>
                <b style={{ color: 'var(--color-secondary)' }}>Endereço Base:</b>
                <p style={{ marginTop: '6px', fontSize: '15px' }}>Luanda, Angola (Base Portuária e Terminal de Armazém Logístico)</p>
              </div>
            </div>
            
            <div className="network-visual">
              <svg className="network-map-graphic" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M120 40 C160 30, 240 50, 280 120 C300 160, 310 220, 240 280 C200 300, 160 270, 140 240 C110 200, 80 130, 120 40 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
                <path d="M160 170 Q 200 150, 260 130" stroke="var(--color-secondary)" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M160 170 Q 180 220, 220 250" stroke="var(--color-secondary)" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M160 170 Q 120 180, 100 190" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M160 170 Q 200 180, 230 200" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

                <circle cx="160" cy="170" r="8" fill="var(--color-secondary)" />
                <circle cx="160" cy="170" r="16" fill="transparent" stroke="var(--color-secondary)" strokeWidth="1">
                  <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="260" cy="130" r="4" fill="white" />
                <text x="270" y="134" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="monospace">EUROPA / ÁSIA</text>

                <circle cx="220" cy="250" r="4" fill="white" />
                <text x="230" y="254" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="monospace">ÁFRICA DO SUL</text>

                <circle cx="100" cy="190" r="4" fill="white" />
                <text x="50" y="194" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="monospace">AMÉRICAS</text>
              </svg>

              <div className="location-badge">
                <small>BASE OPERACIONAL PRINCIPAL</small>
                <b>LUANDA, ANGOLA</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
