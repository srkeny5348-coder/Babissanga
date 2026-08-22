import { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const Fleet = ({ onSelectEquipment }) => {
  const { fleetData } = useSiteData();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fleet = fleetData || [];

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
