import { useState } from 'react';

const Fleet = ({ onSelectEquipment }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fleet = [
    {
      id: 'volvo',
      name: 'Camiões Volvo FM',
      type: 'Pesado de Longo Curso',
      description: 'Camiões de alta capacidade ideais para contentores de grande porte e logística inter-regional. Equipados com suspensão avançada e motores de alta eficiência para estradas exigentes.',
      image: '/WhatsApp Image 2026-08-18 at 10.12.14 AM (2).jpeg',
      specs: {
        'Capacidade': '40 Toneladas',
        'Motor': '420 CV / Volvo D13',
        'Tração': '6x4',
        'Ideal Para': 'Contentores Refrigerados e Carga Geral',
        'Estado': 'Operacional'
      },
      badge: 'Destaque',
      badgeColor: 'accent'
    },
    {
      id: 'sinotruck',
      name: 'Camiões SinoTruck HOWO 420',
      type: 'Pesado de Carga Geral',
      description: 'Frotas dedicadas para transporte de contentores e cargas a granel. Robustez comprovada para as estradas e rotas mais exigentes de Angola, garantindo durabilidade extrema.',
      image: '/WhatsApp Image 2026-08-18 at 10.12.14 AM.jpeg',
      specs: {
        'Capacidade': '35 Toneladas',
        'Motor': '420 CV / WD615',
        'Tração': '6x4',
        'Ideal Para': 'Transporte Portuário e Granéis',
        'Estado': 'Operacional'
      },
      badge: 'Alta Capacidade',
      badgeColor: 'primary'
    },
    {
      id: 'steelbro',
      name: 'Carregador Lateral Steelbro',
      type: 'Equipamento Porta-Contentores',
      description: 'Semi-reboque auto-carregador lateral para contentores de 20 e 40 pés. Permite carga e descarga autónoma diretamente no chão, sem necessidade de gruas adicionais no cliente.',
      image: '/WhatsApp Image 2026-08-18 at 10.12.13 AM.jpeg',
      specs: {
        'Capacidade de Elevação': '36 Toneladas',
        'Alcance': '4.0 metros',
        'Compatibilidade': '20 e 40 Pés',
        'Tipo': 'Auto-carregador lateral (Side Lifter)',
        'Estado': 'Operacional'
      },
      badge: 'Especializado',
      badgeColor: 'accent'
    },
    {
      id: 'hiace',
      name: 'Toyota Hiace',
      type: 'Comercial Ligeiro',
      description: 'Carrinhas versáteis para distribuição de encomendas urbanas, entregas rápidas e cargas fracionadas no centro das cidades de Angola com agilidade superior.',
      image: '/WhatsApp Image 2026-08-18 at 10.12.14 AM (1).jpeg',
      specs: {
        'Capacidade': '1.5 Toneladas',
        'Motor': '2.5L Diesel',
        'Volume de Carga': '6.0 m³',
        'Ideal Para': 'Logística Urbana e Encomendas Rápidas',
        'Estado': 'Operacional'
      },
      badge: 'Urbano',
      badgeColor: 'primary'
    },
    {
      id: 'hino',
      name: 'Toyota Hino 300',
      type: 'Camião de Distribuição Média',
      description: 'Camião de médio porte ideal para distribuição comercial de mercadorias, abastecimento de lojas e transporte regional de média distância com alta economia de combustível.',
      image: '/toyota_hino.png',
      specs: {
        'Capacidade': '3.5 Toneladas',
        'Motor': '4.0L Turbodiesel',
        'Plataforma': 'Caixa Aberta / Fechada',
        'Ideal Para': 'Distribuição de Mercadorias e Retalho',
        'Estado': 'Operacional'
      },
      badge: 'Versátil',
      badgeColor: 'primary'
    },
    {
      id: 'hummerlift',
      name: 'Empilhadeiras HummerLift',
      type: 'Movimentação de Carga',
      description: 'Equipamentos industriais robustos para operações de armazém, carga e descarga rápida de camiões e consolidação de contentores em terminais logísticos.',
      image: '/WhatsApp Image 2026-08-18 at 10.12.13 AM (1).jpeg',
      specs: {
        'Capacidade de Elevação': '3.0 Toneladas',
        'Altura Máx. Elevação': '4.5 metros',
        'Combustível': 'Diesel / Gasóleo',
        'Operação': 'Armazéns e Terminais de Contentores',
        'Estado': 'Operacional'
      },
      badge: 'Armazém',
      badgeColor: 'primary'
    }
  ];

  return (
    <section className="section section-bg-white" id="frota" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i></i> EQUIPAMENTO & FROTA</span>
            <h2>Nossa Frota <em>Operacional.</em></h2>
          </div>
          <p className="section-copy">
            Ficha técnica e galeria dos veículos disponíveis. Clique em qualquer veículo para ver especificações completas de carga e motorização.
          </p>
        </div>

        <div className="fleet-grid">
          {fleet.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image-wrapper">
                <span className={`vehicle-badge ${vehicle.badgeColor}`}>{vehicle.badge}</span>
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                <div className="vehicle-overlay"></div>
              </div>
              <div className="vehicle-info">
                <div>
                  <h3>{vehicle.name}</h3>
                  <p className="vehicle-desc">{vehicle.description.slice(0, 100)}...</p>
                  
                  <div className="vehicle-specs">
                    <div className="spec-item">
                      <label>Tipo</label>
                      <span>{vehicle.type}</span>
                    </div>
                    <div className="spec-item">
                      <label>Capacidade</label>
                      <span>{vehicle.specs['Capacidade'] || vehicle.specs['Capacidade de Elevação']}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedVehicle(vehicle)} 
                  className="btn-view-spec"
                >
                  Ficha Técnica Detalhada
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedVehicle && (
        <div className="lightbox" onClick={() => setSelectedVehicle(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedVehicle(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            
            <div className="lightbox-image">
              <img src={selectedVehicle.image} alt={selectedVehicle.name} />
            </div>
            
            <div className="lightbox-info">
              <div>
                <h2>{selectedVehicle.name}</h2>
                <div className="lightbox-type">{selectedVehicle.type}</div>
                <p className="lightbox-desc">{selectedVehicle.description}</p>
              </div>

              <div>
                <span className="footer-label" style={{ display: 'block', marginBottom: '12px' }}>Ficha Técnica</span>
                <div className="lightbox-specs-list">
                  {Object.entries(selectedVehicle.specs).map(([key, value]) => (
                    <div className="lightbox-spec-row" key={key}>
                      <label>{key}</label>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="btn btn-secondary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    onSelectEquipment(selectedVehicle);
                    setSelectedVehicle(null);
                  }}
                >
                  Solicitar este Equipamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Fleet;
