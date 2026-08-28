import { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const Fleet = ({ onSelectEquipment }) => {
  const { fleetData, freightRates } = useSiteData();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [freightResult, setFreightResult] = useState(null);

  const fleet = fleetData || [];
  const rates = freightRates || [];

  const handleSimulate = () => {
    if (!selectedRoute) {
      setFreightResult(null);
      return;
    }
    const route = rates.find(r => r.id === selectedRoute);
    if (!route) return;

    const total = route.baseFee + (route.pricePerKm * route.distanceKm);
    setFreightResult({
      origin: route.origin,
      destination: route.destination,
      distanceKm: route.distanceKm,
      baseFee: route.baseFee,
      pricePerKm: route.pricePerKm,
      total,
      currency: route.currency || 'AOA'
    });
  };

  const formatCurrency = (value, currency = 'AOA') => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="section section-bg-white" id="frota" style={{ paddingTop: '140px' }}>
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i></i> EQUIPAMENTO & FROTA</span>
            <h2>Nossa Frota <em>Operacional.</em></h2>
          </div>
          <p className="section-copy">
            Consulte os veículos disponíveis e simule o valor do frete para qualquer rota. Clique em qualquer veículo para simular o custo de transporte.
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
                  onClick={() => {
                    setSelectedVehicle(vehicle);
                    setSelectedRoute('');
                    setFreightResult(null);
                  }} 
                  className="btn-view-spec"
                >
                  Simular Frete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal — Simulador de Frete */}
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
                <span className="footer-label" style={{ display: 'block', marginBottom: '12px' }}>Simular Frete</span>
                
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B1320', marginBottom: '6px' }}>
                    Selecione a Rota:
                  </label>
                  <select
                    value={selectedRoute}
                    onChange={(e) => {
                      setSelectedRoute(e.target.value);
                      setFreightResult(null);
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #93C5FD',
                      fontSize: '14px',
                      backgroundColor: '#E4F1FD',
                      color: '#0B1320',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">— Escolha uma rota —</option>
                    {rates.map(route => (
                      <option key={route.id} value={route.id}>
                        {route.origin} → {route.destination} ({route.distanceKm} km)
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={!selectedRoute}
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '16px', opacity: selectedRoute ? 1 : 0.5 }}
                >
                  Calcular Estimativa de Frete
                </button>

                {freightResult && (
                  <div style={{
                    background: '#E4F1FD',
                    border: '1px solid #93C5FD',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                      Estimativa de Frete
                    </div>
                    <div className="lightbox-specs-list">
                      <div className="lightbox-spec-row">
                        <label>Origem</label>
                        <span>{freightResult.origin}</span>
                      </div>
                      <div className="lightbox-spec-row">
                        <label>Destino</label>
                        <span>{freightResult.destination}</span>
                      </div>
                      <div className="lightbox-spec-row">
                        <label>Distância</label>
                        <span>{freightResult.distanceKm} km</span>
                      </div>
                      <div className="lightbox-spec-row">
                        <label>Taxa Base</label>
                        <span>{formatCurrency(freightResult.baseFee, freightResult.currency)}</span>
                      </div>
                      <div className="lightbox-spec-row">
                        <label>Custo / km</label>
                        <span>{formatCurrency(freightResult.pricePerKm, freightResult.currency)}</span>
                      </div>
                    </div>
                    <div style={{
                      marginTop: '16px',
                      paddingTop: '12px',
                      borderTop: '2px solid #93C5FD',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#0B1320' }}>Total Estimado</span>
                      <span style={{ fontSize: '22px', fontWeight: '800', color: '#D31211' }}>
                        {formatCurrency(freightResult.total, freightResult.currency)}
                      </span>
                    </div>
                    <p style={{ fontSize: '11px', color: '#64748B', marginTop: '8px' }}>
                      * Valor estimado. O valor final pode variar conforme tipo de carga, condições da rota e volume contratado.
                    </p>
                  </div>
                )}
                
                <button 
                  className="btn btn-secondary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    onSelectEquipment(selectedVehicle, freightResult);
                    setSelectedVehicle(null);
                  }}
                >
                  Solicitar Cotação Personalizada
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
