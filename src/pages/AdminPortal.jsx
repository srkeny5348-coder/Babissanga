import { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { supabase } from '../lib/supabase';

// Clean SVG Icons for Admin
const IconInbox = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const IconImages = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const IconMessageSquare = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconTruck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconTrash = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const IconEye = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconUpload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconEdit = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const compressImageFile = (file) => new Promise((resolve, reject) => {
  if (!file || !file.type.startsWith('image/')) {
    reject(new Error('O ficheiro selecionado não é uma imagem válida.'));
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxWidth = 1400;
      const maxHeight = 1400;
      const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height);
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const mimeType = file.type.includes('png') ? 'image/png' : 'image/jpeg';
      const output = canvas.toDataURL(mimeType, 0.75);

      if (output.length > 700000) {
        const fallback = canvas.toDataURL('image/jpeg', 0.55);
        resolve(fallback.length < output.length ? fallback : output);
        return;
      }

      resolve(output);
    };
    img.onerror = () => reject(new Error('Não foi possível ler a imagem selecionada.'));
    img.src = reader.result;
  };
  reader.onerror = () => reject(new Error('Falha ao processar a imagem selecionada.'));
  reader.readAsDataURL(file);
});

const AdminPortal = () => {
  const {
    footerData,
    fleetData,
    messages,
    heroSlides,
    freightRates,
    servicesData,
    updateMessageStatus,
    deleteMessage,
    updateFooter,
    updateVehicleImage,
    updateVehicleAutoMessage,
    updateVehicleDetails,
    addVehicle,
    deleteVehicle,
    addHeroSlide,
    deleteHeroSlide,
    updateHeroSlide,
    addFreightRate,
    updateFreightRate,
    deleteFreightRate,
    addService,
    updateService,
    deleteService,
    partnersData,
    addPartner,
    updatePartner,
    deletePartner,
    resetAllToDefaults
  } = useSiteData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return false;
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (!supabase) {
      setLoginError('O Supabase ainda não está configurado neste ambiente.');
      return undefined;
    }

    supabase.auth.getSession().then(({ data }) => {
      setIsAuthenticated(Boolean(data.session));
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session));
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // Active Tab: 'messages' | 'images' | 'carousel' | 'services' | 'freight' | 'footer' | 'security'
  const [activeTab, setActiveTab] = useState('messages');

  // Search & Filter for messages
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Success Notification state
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Services Add / Edit Modal state
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    name: '',
    description: ''
  });

  const openAddServiceModal = () => {
    setEditingService(null);
    setServiceForm({
      name: '',
      description: ''
    });
    setIsServiceModalOpen(true);
  };

  const openEditServiceModal = (service) => {
    setEditingService(service);
    setServiceForm({
      name: service.name || '',
      description: service.description || ''
    });
    setIsServiceModalOpen(true);
  };

  const handleServiceFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: serviceForm.name,
      description: serviceForm.description
    };

    if (editingService) {
      updateService(editingService.id, payload);
      showToast(`Serviço "${serviceForm.name}" atualizado com sucesso!`);
    } else {
      addService(payload);
      showToast(`Novo serviço "${serviceForm.name}" adicionado!`);
    }
    setIsServiceModalOpen(false);
  };

  // Partner Add / Edit Modal state
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);
  const [partnerForm, setPartnerForm] = useState({ name: '', logo: '' });

  const openAddPartnerModal = () => {
    setEditingPartner(null);
    setPartnerForm({ name: '', logo: '' });
    setIsPartnerModalOpen(true);
  };

  const openEditPartnerModal = (partner) => {
    setEditingPartner(partner);
    setPartnerForm({ name: partner.name || '', logo: partner.logo || '' });
    setIsPartnerModalOpen(true);
  };

  const handlePartnerFormSubmit = (e) => {
    e.preventDefault();
    if (!partnerForm.logo) {
      alert('Por favor carregue uma foto ou insira um link para o logótipo do parceiro.');
      return;
    }
    const payload = { name: partnerForm.name, logo: partnerForm.logo };
    if (editingPartner) {
      updatePartner(editingPartner.id, payload);
      showToast(`Parceiro "${partnerForm.name}" atualizado!`);
    } else {
      addPartner(payload);
      showToast(`Parceiro "${partnerForm.name}" adicionado!`);
    }
    setIsPartnerModalOpen(false);
  };

  // Freight Route Add / Edit Modal state
  const [isFreightModalOpen, setIsFreightModalOpen] = useState(false);
  const [editingFreight, setEditingFreight] = useState(null);
  const [freightForm, setFreightForm] = useState({
    origin: 'Luanda',
    destination: '',
    pricePerKm: 900,
    baseFee: 150000,
    currency: 'AOA',
    distanceKm: 500
  });

  const openAddFreightModal = () => {
    setEditingFreight(null);
    setFreightForm({
      origin: 'Luanda',
      destination: '',
      pricePerKm: 900,
      baseFee: 150000,
      currency: 'AOA',
      distanceKm: 500
    });
    setIsFreightModalOpen(true);
  };

  const openEditFreightModal = (route) => {
    setEditingFreight(route);
    setFreightForm({
      origin: route.origin || 'Luanda',
      destination: route.destination || '',
      pricePerKm: route.pricePerKm || 0,
      baseFee: route.baseFee || 0,
      currency: route.currency || 'AOA',
      distanceKm: route.distanceKm || 0
    });
    setIsFreightModalOpen(true);
  };

  const handleFreightFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      origin: freightForm.origin,
      destination: freightForm.destination,
      pricePerKm: Number(freightForm.pricePerKm),
      baseFee: Number(freightForm.baseFee),
      currency: freightForm.currency,
      distanceKm: Number(freightForm.distanceKm)
    };

    if (editingFreight) {
      updateFreightRate(editingFreight.id, payload);
      showToast(`Rota ${freightForm.origin} → ${freightForm.destination} atualizada com sucesso!`);
    } else {
      addFreightRate(payload);
      showToast(`Nova rota ${freightForm.origin} → ${freightForm.destination} adicionada ao simulador!`);
    }
    setIsFreightModalOpen(false);
  };

  // Fleet Vehicle Add / Edit Modal state
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [vehicleForm, setVehicleForm] = useState({
    name: '',
    type: '',
    description: '',
    image: '',
    badge: 'Frota BJA',
    capacidade: '',
    autoMessage: ''
  });

  const openAddVehicleModal = () => {
    setEditingVehicle(null);
    setVehicleForm({
      name: '',
      type: '',
      description: '',
      image: '/volvo.jpeg',
      badge: 'Frota BJA',
      capacidade: '30 Toneladas',
      autoMessage: ''
    });
    setIsVehicleModalOpen(true);
  };

  const openEditVehicleModal = (vehicle) => {
    setEditingVehicle(vehicle);
    setVehicleForm({
      name: vehicle.name || '',
      type: vehicle.type || '',
      description: vehicle.description || '',
      image: vehicle.image || '',
      badge: vehicle.badge || 'Frota BJA',
      capacidade: vehicle.specs?.['Capacidade'] || vehicle.specs?.['Capacidade de Elevação'] || '',
      autoMessage: vehicle.autoMessage || ''
    });
    setIsVehicleModalOpen(true);
  };

  const handleVehicleFormSubmit = (e) => {
    e.preventDefault();
    const specsObj = {
      'Capacidade': vehicleForm.capacidade || 'Sob Consulta'
    };

    const vehiclePayload = {
      name: vehicleForm.name,
      type: vehicleForm.type,
      description: vehicleForm.description,
      image: vehicleForm.image || '/volvo.jpeg',
      badge: vehicleForm.badge || 'Frota BJA',
      badgeColor: 'primary',
      specs: specsObj,
      autoMessage: vehicleForm.autoMessage || `Gostaria de solicitar cotação para o equipamento: ${vehicleForm.name}.`
    };

    if (editingVehicle) {
      updateVehicleDetails(editingVehicle.id, vehiclePayload);
      showToast(`Veículo "${vehicleForm.name}" atualizado com sucesso!`);
    } else {
      addVehicle(vehiclePayload);
      showToast(`Novo veículo "${vehicleForm.name}" adicionado à frota!`);
    }

    setIsVehicleModalOpen(false);
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!supabase) return;

    const { error } = await supabase.auth.signInWithPassword({
      email: username.trim(),
      password
    });

    if (!error) {
      setLoginError('');
    } else {
      setLoginError('Credenciais inválidas. Verifique o e-mail e a palavra-passe.');
    }
  };

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
  };

  // Footer form state
  const [footerForm, setFooterForm] = useState(footerData);

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    updateFooter(footerForm);
    showToast('Dados de contacto e rodapé atualizados com sucesso.');
  };

  // Hero Slides Modal state
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [heroForm, setHeroForm] = useState({
    url: '/bg1.jpg',
    label: ''
  });

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    if (!heroForm.url) {
      alert('Por favor introduza o URL ou carregue uma imagem.');
      return;
    }
    addHeroSlide({
      url: heroForm.url,
      label: heroForm.label || 'Imagem de Fundo do Hero'
    });
    showToast('Nova imagem de fundo adicionada ao carrossel do Hero.');
    setIsHeroModalOpen(false);
    setHeroForm({ url: '/bg1.jpg', label: '' });
  };

  const handleHeroFileUpload = async (slideId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedDataUrl = await compressImageFile(file);
      updateHeroSlide(slideId, { url: compressedDataUrl });
      showToast('Fotografia de fundo do Hero atualizada com sucesso.');
    } catch (error) {
      console.error('Error processing hero image upload', error);
      showToast(error.message || 'Não foi possível atualizar a imagem do Hero.');
    }
  };

  // Image Upload Handler using compressed Data URL
  const handleFileUpload = async (vehicleId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedDataUrl = await compressImageFile(file);
      updateVehicleImage(vehicleId, compressedDataUrl);
      showToast('Imagem do veículo atualizada com sucesso.');
    } catch (error) {
      console.error('Error processing vehicle image upload', error);
      showToast(error.message || 'Não foi possível atualizar a imagem do veículo.');
    }
  };

  // Partner Logo Upload Handler using compressed Data URL
  const handlePartnerFileUpload = async (partnerId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedDataUrl = await compressImageFile(file);
      updatePartner(partnerId, { logo: compressedDataUrl });
      showToast('Logótipo do parceiro atualizado com sucesso.');
    } catch (error) {
      console.error('Error processing partner image upload', error);
      showToast(error.message || 'Não foi possível atualizar o logótipo do parceiro.');
    }
  };

  // Security Form (Change Password)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityMessage, setSecurityMessage] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setSecurityMessage('A nova palavra-passe deve ter pelo menos 6 caracteres.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setSecurityMessage('As palavras-passe não coincidem.');
      return;
    }

    if (!supabase) {
      setSecurityMessage('O Supabase ainda não está configurado.');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setSecurityMessage('Não foi possível atualizar a palavra-passe.');
      return;
    }

    setNewPassword('');
    setConfirmPassword('');
    setSecurityMessage('');
    showToast('Palavra-passe de administrador alterada com sucesso.');
  };

  // Message statistics
  const unreadCount = messages.filter((m) => m.status === 'Novo').length;
  const inReviewCount = messages.filter((m) => m.status === 'Em Análise').length;
  const answeredCount = messages.filter((m) => m.status === 'Respondido').length;

  // Filtered messages
  const filteredMessages = messages.filter((m) => {
    const matchesSearch =
      m.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.empresa && m.empresa.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.mensagem.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Render Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="admin-login-screen">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <span className="admin-badge-lock">ACESSO RESERVADO</span>
            <h2>Portal de Gestão Babissanga</h2>
            <p>Introduza as suas credenciais para aceder ao painel de controlo.</p>
          </div>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label>Utilizador ou E-mail</label>
              <input
                type="text"
                placeholder="Utilizador"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label>Palavra-passe</label>
              <input
                type="password"
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {loginError && <div className="admin-login-error">{loginError}</div>}

            <button type="submit" className="btn btn-secondary" style={{ width: '100%', marginTop: '12px' }}>
              Entrar no Painel <span>&rarr;</span>
            </button>
          </form>

          <div className="admin-login-footer">
            <a href="#/" className="admin-back-link">
              &larr; Voltar ao Website Público
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Render Main Admin Panel
  return (
    <div className="admin-portal-wrapper">
      {/* Toast Notification */}
      {toastMessage && <div className="admin-toast animate-fade-in-up">{toastMessage}</div>}

      {/* Top Bar */}
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <div>
            <strong>BABISSANGA</strong>
            <span className="admin-brand-sub">Painel de Gestão e Controlo</span>
          </div>
        </div>

        <div className="admin-topbar-actions">
          <button onClick={handleLogout} className="btn-admin-logout" title="Terminar sessão">
            Terminar Sessão
          </button>
        </div>
      </header>

      <div className="admin-layout-body">
        {/* Sidebar Nav */}
        <aside className="admin-sidebar">
          <nav className="admin-nav-menu">
            <button
              className={`admin-nav-btn ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <span className="admin-nav-icon"><IconInbox /></span>
              <span className="admin-nav-label">Mensagens e Cotações</span>
              {unreadCount > 0 && <span className="admin-badge-count">{unreadCount}</span>}
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => setActiveTab('images')}
            >
              <span className="admin-nav-icon"><IconImages /></span>
              <span className="admin-nav-label">Gestor de Frota e Imagens</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'carousel' ? 'active' : ''}`}
              onClick={() => setActiveTab('carousel')}
            >
              <span className="admin-nav-icon"><IconLayers /></span>
              <span className="admin-nav-label">Carrosel do Hero</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              <span className="admin-nav-icon"><IconBriefcase /></span>
              <span className="admin-nav-label">Gestão de Serviços</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'partners' ? 'active' : ''}`}
              onClick={() => setActiveTab('partners')}
            >
              <span className="admin-nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span className="admin-nav-label">Parceiros</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'freight' ? 'active' : ''}`}
              onClick={() => setActiveTab('freight')}
            >
              <span className="admin-nav-icon"><IconTruck /></span>
              <span className="admin-nav-label">Simulador de Frete (Valores)</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'footer' ? 'active' : ''}`}
              onClick={() => {
                setFooterForm(footerData);
                setActiveTab('footer');
              }}
            >
              <span className="admin-nav-icon"><IconSettings /></span>
              <span className="admin-nav-label">Dados do Rodapé e Contactos</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <span className="admin-nav-icon"><IconShield /></span>
              <span className="admin-nav-label">Segurança e Palavra-passe</span>
            </button>
          </nav>

          <div className="admin-sidebar-footer">
            <small>Sistema CMS Babissanga</small>
            <p>Versão 1.0 &bull; Produção</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="admin-content-area">
          {/* TAB 1: MESSAGES & QUOTES */}
          {activeTab === 'messages' && (
            <div className="admin-tab-content">
              <div className="admin-page-header">
                <div>
                  <h2>Caixa de Entrada e Pedidos de Cotação</h2>
                  <p>Visualize e responda a todos os pedidos enviados através do formulário do website.</p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="admin-stats-grid">
                <div className="admin-stat-card">
                  <span className="admin-stat-number">{messages.length}</span>
                  <span className="admin-stat-label">Total de Mensagens</span>
                </div>
                <div className="admin-stat-card" style={{ borderLeftColor: '#D31211' }}>
                  <span className="admin-stat-number" style={{ color: '#D31211' }}>
                    {unreadCount}
                  </span>
                  <span className="admin-stat-label">Novas / Pendentes</span>
                </div>
                <div className="admin-stat-card" style={{ borderLeftColor: '#F59E0B' }}>
                  <span className="admin-stat-number" style={{ color: '#F59E0B' }}>
                    {inReviewCount}
                  </span>
                  <span className="admin-stat-label">Em Análise</span>
                </div>
                <div className="admin-stat-card" style={{ borderLeftColor: '#10B981' }}>
                  <span className="admin-stat-number" style={{ color: '#10B981' }}>
                    {answeredCount}
                  </span>
                  <span className="admin-stat-label">Respondidas</span>
                </div>
              </div>

              {/* Filter & Search Toolbar */}
              <div className="admin-toolbar">
                <input
                  type="text"
                  placeholder="Pesquisar por nome, empresa, e-mail ou conteúdo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="admin-search-input"
                />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="admin-filter-select"
                >
                  <option value="all">Todos os Estados</option>
                  <option value="Novo">Apenas Novos</option>
                  <option value="Em Análise">Em Análise</option>
                  <option value="Respondido">Respondidos</option>
                </select>
              </div>

              {/* Messages Table */}
              <div className="admin-table-wrapper">
                {filteredMessages.length === 0 ? (
                  <div className="admin-empty-state">
                    <h3>Nenhuma mensagem encontrada</h3>
                    <p>Não existem mensagens correspondentes aos filtros selecionados.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Estado</th>
                        <th>Cliente / Empresa</th>
                        <th>Serviço Pretendido</th>
                        <th>Mensagem</th>
                        <th>Data</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMessages.map((msg) => (
                        <tr key={msg.id} className={msg.status === 'Novo' ? 'row-unread' : ''}>
                          <td>
                            <span
                              className={`status-pill ${
                                msg.status === 'Novo'
                                  ? 'status-new'
                                  : msg.status === 'Em Análise'
                                  ? 'status-review'
                                  : 'status-done'
                              }`}
                            >
                              {msg.status}
                            </span>
                          </td>
                          <td>
                            <strong>{msg.nome}</strong>
                            {msg.empresa && <small style={{ display: 'block', color: '#64748b' }}>{msg.empresa}</small>}
                            <small style={{ display: 'block', color: '#001c46' }}>{msg.email}</small>
                            {msg.telefone && <small style={{ display: 'block', color: '#D31211', fontWeight: '600' }}>Tel: {msg.telefone}</small>}
                          </td>
                          <td>
                            <span className="badge-service">{msg.servico || 'Geral'}</span>
                          </td>
                          <td>
                            <p className="admin-msg-snippet">
                              {msg.mensagem.length > 80 ? msg.mensagem.slice(0, 80) + '...' : msg.mensagem}
                            </p>
                          </td>
                          <td>
                            <small style={{ whiteSpace: 'nowrap' }}>
                              {new Date(msg.date).toLocaleDateString('pt-AO', {
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </small>
                          </td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => setSelectedMessage(msg)}
                                className="btn-table-action"
                                title="Ver detalhes completos"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <IconEye /> Ver
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm('Tem a certeza que deseja eliminar esta mensagem?')) {
                                    deleteMessage(msg.id);
                                    showToast('Mensagem eliminada.');
                                  }
                                }}
                                className="btn-table-action delete"
                                title="Eliminar mensagem"
                                style={{ display: 'inline-flex', alignItems: 'center' }}
                              >
                                <IconTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: GESTOR DE FROTA E IMAGENS */}
          {activeTab === 'images' && (
            <div className="admin-tab-content">
              <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2>Gestor de Frota e Imagens</h2>
                  <p>Adicione novos veículos, edite informações técnicas, carregue fotografias e faça a gestão completa dos equipamentos exibidos no site.</p>
                </div>
                <button onClick={openAddVehicleModal} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <IconPlus /> Adicionar Novo Veículo
                </button>
              </div>

              <div className="admin-images-grid">
                {fleetData.map((vehicle) => (
                  <div key={vehicle.id} className="admin-image-card">
                    <div className="admin-image-preview-box">
                      <img src={vehicle.image} alt={vehicle.name} />
                      <span className="admin-image-badge">{vehicle.type}</span>
                    </div>

                    <div className="admin-image-card-body">
                      <h4>{vehicle.name}</h4>
                      <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                        {vehicle.description ? (vehicle.description.slice(0, 90) + '...') : 'Sem descrição.'}
                      </p>

                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        <button
                          onClick={() => openEditVehicleModal(vehicle)}
                          className="btn-table-action view"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <IconEdit /> Editar Veículo
                        </button>

                        <label className="btn-table-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#0F172A' }}>
                          <IconUpload /> Alterar Foto
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(vehicle.id, e)}
                            style={{ display: 'none' }}
                          />
                        </label>

                        <button
                          onClick={() => {
                            if (window.confirm(`Tem a certeza que deseja eliminar o veículo "${vehicle.name}" da frota?`)) {
                              deleteVehicle(vehicle.id);
                              showToast(`Veículo "${vehicle.name}" eliminado.`);
                            }
                          }}
                          className="btn-table-action delete"
                          title="Eliminar Veículo da Frota"
                          style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                          <IconTrash />
                        </button>
                      </div>

                      <div>
                        <small style={{ color: '#64748B', display: 'block', marginBottom: '4px' }}>URL Direto da Imagem:</small>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input
                            type="text"
                            placeholder="https://exemplo.com/foto.jpg"
                            defaultValue={vehicle.image.startsWith('data:') ? '' : vehicle.image}
                            onBlur={(e) => {
                              if (e.target.value.trim()) {
                                updateVehicleImage(vehicle.id, e.target.value.trim());
                                showToast('URL da imagem atualizado.');
                              }
                            }}
                            className="admin-input-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CARROSEL DO HERO */}
          {activeTab === 'carousel' && (
            <div className="admin-tab-content">
              <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2>Imagens do Carrosel do Hero</h2>
                  <p>Adicione, remova ou altere as imagens de fundo que rolam automaticamente na secção inicial do site.</p>
                </div>
                <button onClick={() => setIsHeroModalOpen(true)} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <IconPlus /> Adicionar Imagem ao Carrosel
                </button>
              </div>

              <div className="admin-images-grid">
                {heroSlides.map((slide, idx) => (
                  <div key={slide.id || idx} className="admin-image-card">
                    <div className="admin-image-preview-box" style={{ height: '180px' }}>
                      <img src={slide.url} alt={slide.label || 'Slide Hero'} />
                      <span className="admin-image-badge">Slide #{idx + 1}</span>
                    </div>

                    <div className="admin-image-card-body">
                      <h4>{slide.label || `Slide #${idx + 1}`}</h4>
                      
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px', marginTop: '12px' }}>
                        <label className="btn-table-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', background: '#F1F5F9', border: '1px solid #CBD5E1', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#0F172A' }}>
                          <IconUpload /> Alterar Fotografia
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleHeroFileUpload(slide.id, e)}
                            style={{ display: 'none' }}
                          />
                        </label>

                        {heroSlides.length > 1 && (
                          <button
                            onClick={() => {
                              if (window.confirm('Tem a certeza que deseja eliminar esta imagem do carrosel?')) {
                                deleteHeroSlide(slide.id);
                                showToast('Imagem eliminada do carrosel.');
                              }
                            }}
                            className="btn-table-action delete"
                            title="Eliminar Slide do Carrosel"
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                          >
                            <IconTrash /> Eliminar Slide
                          </button>
                        )}
                      </div>

                      <div>
                        <small style={{ color: '#64748B', display: 'block', marginBottom: '4px' }}>Legenda do Slide:</small>
                        <input
                          type="text"
                          defaultValue={slide.label}
                          onBlur={(e) => {
                            updateHeroSlide(slide.id, { label: e.target.value });
                            showToast('Legenda do slide atualizada.');
                          }}
                          className="admin-input-sm"
                          style={{ marginBottom: '8px' }}
                        />

                        <small style={{ color: '#64748B', display: 'block', marginBottom: '4px' }}>URL da Imagem:</small>
                        <input
                          type="text"
                          defaultValue={slide.url.startsWith('data:') ? '' : slide.url}
                          onBlur={(e) => {
                            if (e.target.value.trim()) {
                              updateHeroSlide(slide.id, { url: e.target.value.trim() });
                              showToast('URL da imagem do carrosel atualizado.');
                            }
                          }}
                          className="admin-input-sm"
                          placeholder="https://exemplo.com/foto.jpg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SIMULADOR DE FRETE (VALORES) */}
          {activeTab === 'freight' && (
            <div className="admin-tab-content">
              <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2>Simulador de Frete (Gestão de Tarifas e Rotas)</h2>
                  <p>Defina as rotas, taxas base e valor por quilómetro utilizados para calcular as estimativas de frete no site público.</p>
                </div>
                <button onClick={openAddFreightModal} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <IconPlus /> Adicionar Nova Rota
                </button>
              </div>

              <div className="admin-table-wrapper">
                {freightRates.length === 0 ? (
                  <div className="admin-empty-state">
                    <h3>Nenhuma rota configurada</h3>
                    <p>Clique em "Adicionar Nova Rota" para definir tarifários de simulação de frete.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Origem → Destino</th>
                        <th>Distância (km)</th>
                        <th>Taxa Base</th>
                        <th>Preço / km</th>
                        <th>Estimativa Total</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {freightRates.map((route) => {
                        const total = route.baseFee + (route.pricePerKm * route.distanceKm);
                        return (
                          <tr key={route.id}>
                            <td>
                              <strong style={{ color: '#0284C7' }}>{route.origin} → {route.destination}</strong>
                            </td>
                            <td>{route.distanceKm} km</td>
                            <td>{route.baseFee.toLocaleString('pt-AO')} AOA</td>
                            <td>{route.pricePerKm.toLocaleString('pt-AO')} AOA/km</td>
                            <td>
                              <strong style={{ color: '#D31211', fontSize: '15px' }}>
                                {total.toLocaleString('pt-AO')} AOA
                              </strong>
                            </td>
                            <td>
                              <div className="admin-table-actions">
                                <button
                                  onClick={() => openEditFreightModal(route)}
                                  className="btn-table-action view"
                                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                >
                                  <IconEdit /> Editar
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Eliminar rota ${route.origin} → ${route.destination}?`)) {
                                      deleteFreightRate(route.id);
                                      showToast('Rota eliminada.');
                                    }
                                  }}
                                  className="btn-table-action delete"
                                >
                                  <IconTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB: GESTÃO DE SERVIÇOS */}
          {activeTab === 'services' && (
            <div className="admin-tab-content">
              <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2>Gestão de Serviços Técnicos</h2>
                  <p>Adicione, edite e remova os serviços oferecidos. As alterações são refletidas automaticamente no formulário de cotação/contacto do site.</p>
                </div>
                <button onClick={openAddServiceModal} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <IconPlus /> Adicionar Novo Serviço
                </button>
              </div>

              <div className="admin-table-wrapper">
                {servicesData.length === 0 ? (
                  <div className="admin-empty-state">
                    <h3>Nenhum serviço registado</h3>
                    <p>Clique em "Adicionar Novo Serviço" para registar opções no formulário do site.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Nome do Serviço</th>
                        <th>Descrição Técnica / Resumo</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {servicesData.map((service) => (
                        <tr key={service.id}>
                          <td>
                            <strong style={{ color: '#0284C7', fontSize: '15px' }}>{service.name}</strong>
                          </td>
                          <td>
                            <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                              {service.description}
                            </p>
                          </td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => openEditServiceModal(service)}
                                className="btn-table-action view"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <IconEdit /> Editar
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Tem a certeza que deseja eliminar o serviço "${service.name}"?`)) {
                                    deleteService(service.id);
                                    showToast(`Serviço "${service.name}" eliminado.`);
                                  }
                                }}
                                className="btn-table-action delete"
                              >
                                <IconTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB: PARCEIROS */}
          {activeTab === 'partners' && (
            <div className="admin-tab-content">
              <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2>Gestão de Parceiros</h2>
                  <p>Adicione, edite e remova os logótipos dos parceiros. Eles aparecem automaticamente na página inicial, por baixo da secção "Nossa Frota".</p>
                </div>
                <button onClick={openAddPartnerModal} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <IconPlus /> Adicionar Parceiro
                </button>
              </div>

              <div className="admin-table-wrapper">
                {partnersData.length === 0 ? (
                  <div className="admin-empty-state">
                    <h3>Nenhum parceiro registado</h3>
                    <p>Clique em "Adicionar Parceiro" para incluir logótipos de parceiros na página inicial.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Logótipo</th>
                        <th>Nome do Parceiro</th>
                        <th>URL da Imagem</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partnersData.map((partner) => (
                        <tr key={partner.id}>
                          <td>
                            {partner.logo ? (
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{ height: '40px', maxWidth: '100px', objectFit: 'contain', borderRadius: '4px', background: '#F1F5F9', padding: '4px' }}
                              />
                            ) : (
                              <span style={{ fontSize: '12px', color: '#94A3B8' }}>Sem imagem</span>
                            )}
                          </td>
                          <td>
                            <strong style={{ color: '#001C46', fontSize: '14px' }}>{partner.name}</strong>
                          </td>
                          <td>
                            {partner.logo ? (
                              partner.logo.startsWith('data:') ? (
                                <span className="admin-status-badge complete" style={{ fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                  ✓ Ficheiro Carregado
                                </span>
                              ) : (
                                <span style={{ fontSize: '12px', color: '#64748B', wordBreak: 'break-all' }}>
                                  {partner.logo}
                                </span>
                              )
                            ) : (
                              <span style={{ fontSize: '12px', color: '#94A3B8' }}>—</span>
                            )}
                          </td>
                          <td>
                            <div className="admin-table-actions">
                              <label className="btn-table-action upload" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} title="Substituir foto/logótipo do parceiro">
                                <IconUpload /> Foto
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handlePartnerFileUpload(partner.id, e)}
                                  style={{ display: 'none' }}
                                />
                              </label>
                              <button
                                onClick={() => openEditPartnerModal(partner)}
                                className="btn-table-action view"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <IconEdit /> Editar
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Eliminar parceiro "${partner.name}"?`)) {
                                    deletePartner(partner.id);
                                    showToast(`Parceiro "${partner.name}" eliminado.`);
                                  }
                                }}
                                className="btn-table-action delete"
                              >
                                <IconTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB: FOOTER & CONTACT DATA */}
          {activeTab === 'footer' && (
            <div className="admin-tab-content">
              <div className="admin-page-header">
                <div>
                  <h2>Editor de Dados do Rodapé e Contactos</h2>
                  <p>Edite os números de telefone, link do WhatsApp, e-mail institucional e morada da base operacional.</p>
                </div>
              </div>

              <div className="admin-form-container">
                <form onSubmit={handleFooterSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Telefone Oficial Principal</label>
                      <input
                        type="text"
                        value={footerForm.phone}
                        onChange={(e) => setFooterForm({ ...footerForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>E-mail Geral Oficial</label>
                      <input
                        type="email"
                        value={footerForm.email}
                        onChange={(e) => setFooterForm({ ...footerForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Link Directo WhatsApp</label>
                      <input
                        type="text"
                        value={footerForm.whatsappUrl}
                        onChange={(e) => setFooterForm({ ...footerForm, whatsappUrl: e.target.value })}
                        required
                      />
                      <small style={{ color: '#64748B' }}>Link completo no formato https://wa.me/...</small>
                    </div>

                    <div className="form-group">
                      <label>Localização / Base Operacional</label>
                      <input
                        type="text"
                        value={footerForm.baseLocation}
                        onChange={(e) => setFooterForm({ ...footerForm, baseLocation: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group full-width" style={{ marginBottom: '24px' }}>
                    <label>Horário / Disponibilidade Operacional</label>
                    <input
                      type="text"
                      value={footerForm.operationalHours}
                      onChange={(e) => setFooterForm({ ...footerForm, operationalHours: e.target.value })}
                    />
                  </div>

                  <h3 style={{ fontSize: '18px', color: '#001C46', margin: '24px 0 16px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                    Redes Sociais Oficiais
                  </h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>LinkedIn URL</label>
                      <input
                        type="url"
                        value={footerForm.linkedin}
                        onChange={(e) => setFooterForm({ ...footerForm, linkedin: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Facebook URL</label>
                      <input
                        type="url"
                        value={footerForm.facebook}
                        onChange={(e) => setFooterForm({ ...footerForm, facebook: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>YouTube URL</label>
                      <input
                        type="url"
                        value={footerForm.youtube}
                        onChange={(e) => setFooterForm({ ...footerForm, youtube: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Instagram URL</label>
                      <input
                        type="url"
                        value={footerForm.instagram}
                        onChange={(e) => setFooterForm({ ...footerForm, instagram: e.target.value })}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-secondary" style={{ marginTop: '16px' }}>
                    Gravar Todos os Dados do Rodapé
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 5: SECURITY */}
          {activeTab === 'security' && (
            <div className="admin-tab-content">
              <div className="admin-page-header">
                <div>
                  <h2>Segurança e Palavra-passe de Acesso</h2>
                  <p>Altere as credenciais de acesso ao portal administrativo ou restaure os dados padrão.</p>
                </div>
              </div>

              <div className="admin-form-container" style={{ maxWidth: '600px' }}>
                <form onSubmit={handlePasswordChange}>
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label>Nova Palavra-passe</label>
                    <input
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label>Confirmar Nova Palavra-passe</label>
                    <input
                      type="password"
                      placeholder="Repita a nova palavra-passe"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {securityMessage && (
                    <div style={{ color: '#D31211', fontSize: '13px', marginBottom: '16px', fontWeight: '600' }}>
                      {securityMessage}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Atualizar Palavra-passe
                  </button>
                </form>

                <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E2E8F0' }}>
                  <h4 style={{ color: '#001C46', marginBottom: '8px' }}>Restaurar Configurações Iniciais</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>
                    Restaura as fotografias, contactos e mensagens automáticas para os valores padrão de fábrica.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Tem a certeza que deseja repor todos os conteúdos para o padrão inicial?')) {
                        resetAllToDefaults();
                        showToast('Dados restaurados para os valores padrão com sucesso.');
                      }
                    }}
                    className="btn btn-outline"
                    style={{ color: '#D31211', borderColor: '#D31211' }}
                  >
                    Restaurar Dados Padrão
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="lightbox" onClick={() => setSelectedMessage(null)}>
          <div className="lightbox-content admin-message-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedMessage(null)}>
              &times;
            </button>

            <div style={{ padding: '32px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <span className="eyebrow dark"><i></i> DETALHES DO PEDIDO</span>
                  <h2 style={{ fontSize: '24px', color: '#001C46' }}>{selectedMessage.nome}</h2>
                  {selectedMessage.empresa && (
                    <p style={{ color: '#64748B', fontWeight: '600' }}>Empresa: {selectedMessage.empresa}</p>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <label style={{ display: 'block', fontSize: '11px', color: '#64748B', fontWeight: '700', marginBottom: '4px' }}>
                    ALTERAR ESTADO:
                  </label>
                  <select
                    value={selectedMessage.status}
                    onChange={(e) => {
                      updateMessageStatus(selectedMessage.id, e.target.value);
                      setSelectedMessage({ ...selectedMessage, status: e.target.value });
                      showToast(`Estado alterado para ${e.target.value}`);
                    }}
                    className="admin-filter-select"
                  >
                    <option value="Novo">Novo</option>
                    <option value="Em Análise">Em Análise</option>
                    <option value="Respondido">Respondido</option>
                  </select>
                </div>
              </div>

              <div className="admin-msg-details-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div>
                  <strong>E-mail do Cliente:</strong>
                  <p>{selectedMessage.email}</p>
                </div>
                <div>
                  <strong>Telefone / WhatsApp:</strong>
                  <p style={{ fontWeight: '700', color: '#D31211' }}>{selectedMessage.telefone || 'Não indicado'}</p>
                </div>
                <div>
                  <strong>Serviço Solicitado:</strong>
                  <p>{selectedMessage.servico || 'Geral'}</p>
                </div>
                <div>
                  <strong>Data de Envio:</strong>
                  <p>
                    {new Date(selectedMessage.date).toLocaleString('pt-AO', {
                      dateStyle: 'short',
                      timeStyle: 'short'
                    })}
                  </p>
                </div>
              </div>

              <div style={{ margin: '24px 0', background: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <strong style={{ display: 'block', color: '#001C46', marginBottom: '8px' }}>Conteúdo da Mensagem:</strong>
                <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#334155' }}>{selectedMessage.mensagem}</p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${selectedMessage.email}?subject=Resposta ao seu pedido de cotação - BJA Babissanga&body=Olá ${selectedMessage.nome},\n\nRecebemos o seu pedido de cotação para o serviço de ${selectedMessage.servico}.\n\n`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Responder por E-mail
                </a>

                {selectedMessage.telefone ? (
                  <a
                    href={`https://wa.me/${selectedMessage.telefone.replace(/\D/g, '')}?text=Olá%20${encodeURIComponent(selectedMessage.nome)},%20contacto-o%20da%20Babissanga%20relativamente%20ao%20seu%20pedido%20de%20cotação.`}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Cliente no WhatsApp
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${footerData.whatsappNumber || '244933870999'}?text=Olá%20${encodeURIComponent(selectedMessage.nome)},%20contacto-o%20a%20partir%20da%20Babissanga.`}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                )}

                <button
                  onClick={() => {
                    if (window.confirm('Tem a certeza que deseja eliminar esta mensagem?')) {
                      deleteMessage(selectedMessage.id);
                      setSelectedMessage(null);
                      showToast('Mensagem eliminada com sucesso.');
                    }
                  }}
                  className="btn btn-outline"
                  style={{ color: '#D31211', borderColor: '#D31211', marginLeft: 'auto' }}
                >
                  Eliminar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Add / Edit Modal */}
      {isVehicleModalOpen && (
        <div className="lightbox" onClick={() => setIsVehicleModalOpen(false)}>
          <div className="lightbox-content admin-vehicle-modal" onClick={(e) => e.stopPropagation()} style={{ display: 'block', padding: '32px', maxWidth: '720px', width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="lightbox-close" onClick={() => setIsVehicleModalOpen(false)}>
              &times;
            </button>

            <span className="eyebrow dark"><i></i> GESTÃO DA FROTA</span>
            <h2 style={{ fontSize: '24px', color: '#001C46', marginBottom: '20px' }}>
              {editingVehicle ? `Editar Veículo: ${editingVehicle.name}` : 'Adicionar Novo Veículo à Frota'}
            </h2>

            <form onSubmit={handleVehicleFormSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Nome do Veículo / Equipamento *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Camião Scania R500"
                    value={vehicleForm.name}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, name: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Tipo / Categoria *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Pesado de Carga Geral"
                    value={vehicleForm.type}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, type: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Etiqueta / Badge</label>
                  <input
                    type="text"
                    placeholder="Ex: Destaque, Novo, Alta Capacidade"
                    value={vehicleForm.badge}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, badge: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Descrição Detalhada *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Descrição completa do veículo para exibição na ficha técnica..."
                    value={vehicleForm.description}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, description: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Capacidade de Carga</label>
                  <input
                    type="text"
                    placeholder="Ex: 40 Toneladas"
                    value={vehicleForm.capacidade}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, capacidade: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>URL da Imagem ou Carregar Ficheiro</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="https://exemplo.com/foto.jpg"
                      value={vehicleForm.image}
                      onChange={(e) => setVehicleForm({ ...vehicleForm, image: e.target.value })}
                      className="admin-input-sm"
                      style={{ flex: 1, padding: '10px 14px' }}
                    />
                    <label className="btn btn-secondary" style={{ whiteSpace: 'nowrap', cursor: 'pointer', fontSize: '13px', padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <IconUpload /> Ficheiro
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setVehicleForm(prev => ({ ...prev, image: reader.result }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Mensagem Automática ao Solicitar Cotação</label>
                  <textarea
                    rows="2"
                    placeholder="Texto pré-preenchido quando o cliente escolhe este veículo..."
                    value={vehicleForm.autoMessage}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, autoMessage: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsVehicleModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingVehicle ? 'Guardar Alterações' : 'Adicionar Veículo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Hero Slide Add Modal */}
      {isHeroModalOpen && (
        <div className="lightbox" onClick={() => setIsHeroModalOpen(false)}>
          <div className="lightbox-content admin-vehicle-modal" onClick={(e) => e.stopPropagation()} style={{ display: 'block', padding: '32px', maxWidth: '600px', width: '90%' }}>
            <button className="lightbox-close" onClick={() => setIsHeroModalOpen(false)}>
              &times;
            </button>

            <span className="eyebrow dark"><i></i> CARROSEL DO HERO</span>
            <h2 style={{ fontSize: '24px', color: '#001C46', marginBottom: '20px' }}>
              Adicionar Imagem ao Carrosel
            </h2>

            <form onSubmit={handleHeroFormSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>
                    Legenda da Imagem / Descrição Operacional
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Operação Portuária no Porto do Lobito"
                    value={heroForm.label}
                    onChange={(e) => setHeroForm({ ...heroForm, label: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>
                    URL da Imagem ou Carregar Ficheiro
                  </label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="https://exemplo.com/foto.jpg"
                      value={heroForm.url}
                      onChange={(e) => setHeroForm({ ...heroForm, url: e.target.value })}
                      className="admin-input-sm"
                      style={{ flex: 1, padding: '10px 14px' }}
                    />
                    <label className="btn btn-secondary" style={{ whiteSpace: 'nowrap', cursor: 'pointer', fontSize: '13px', padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <IconUpload /> Ficheiro
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setHeroForm(prev => ({ ...prev, url: reader.result }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsHeroModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Adicionar ao Carrosel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Freight Rate Add / Edit Modal */}
      {isFreightModalOpen && (
        <div className="lightbox" onClick={() => setIsFreightModalOpen(false)}>
          <div className="lightbox-content admin-vehicle-modal" onClick={(e) => e.stopPropagation()} style={{ display: 'block', padding: '32px', maxWidth: '600px', width: '90%' }}>
            <button className="lightbox-close" onClick={() => setIsFreightModalOpen(false)}>
              &times;
            </button>

            <span className="eyebrow dark"><i></i> SIMULADOR DE FRETE</span>
            <h2 style={{ fontSize: '24px', color: '#001C46', marginBottom: '20px' }}>
              {editingFreight ? `Editar Rota: ${editingFreight.origin} → ${editingFreight.destination}` : 'Adicionar Nova Rota ao Simulador'}
            </h2>

            <form onSubmit={handleFreightFormSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Ponto de Origem *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Luanda"
                    value={freightForm.origin}
                    onChange={(e) => setFreightForm({ ...freightForm, origin: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Ponto de Destino *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Benguela, Huambo, etc."
                    value={freightForm.destination}
                    onChange={(e) => setFreightForm({ ...freightForm, destination: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Distância Estimada (km) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="Ex: 500"
                    value={freightForm.distanceKm}
                    onChange={(e) => setFreightForm({ ...freightForm, distanceKm: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Taxa Base / Fixa (AOA) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="Ex: 150000"
                    value={freightForm.baseFee}
                    onChange={(e) => setFreightForm({ ...freightForm, baseFee: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Custo Variável por Quilómetro (AOA / km) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="Ex: 900"
                    value={freightForm.pricePerKm}
                    onChange={(e) => setFreightForm({ ...freightForm, pricePerKm: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>
              </div>

              <div style={{ padding: '14px', background: '#E4F1FD', borderRadius: '8px', border: '1px solid #93C5FD', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#0284C7' }}>PREVISÃO DE CÁLCULO:</span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#D31211', marginTop: '4px' }}>
                  {(Number(freightForm.baseFee || 0) + Number(freightForm.pricePerKm || 0) * Number(freightForm.distanceKm || 0)).toLocaleString('pt-AO')} AOA
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsFreightModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingFreight ? 'Guardar Alterações' : 'Adicionar Rota'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Service Add / Edit Modal */}
      {isServiceModalOpen && (
        <div className="lightbox" onClick={() => setIsServiceModalOpen(false)}>
          <div className="lightbox-content admin-vehicle-modal" onClick={(e) => e.stopPropagation()} style={{ display: 'block', padding: '32px', maxWidth: '600px', width: '90%' }}>
            <button className="lightbox-close" onClick={() => setIsServiceModalOpen(false)}>
              &times;
            </button>

            <span className="eyebrow dark"><i></i> GESTÃO DE SERVIÇOS</span>
            <h2 style={{ fontSize: '24px', color: '#001C46', marginBottom: '20px' }}>
              {editingService ? `Editar Serviço: ${editingService.name}` : 'Adicionar Novo Serviço'}
            </h2>

            <form onSubmit={handleServiceFormSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Nome do Serviço *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Transporte Rodoviário Especial"
                    value={serviceForm.name}
                    onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label className="admin-label" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Descrição Técnica / Resumo do Serviço *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Resumo do âmbito do serviço para apresentação no website..."
                    value={serviceForm.description}
                    onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsServiceModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingService ? 'Guardar Alterações' : 'Adicionar Serviço'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Partner Add / Edit Modal */}
      {isPartnerModalOpen && (
        <div className="lightbox" onClick={() => setIsPartnerModalOpen(false)}>
          <div className="lightbox-content admin-vehicle-modal" onClick={(e) => e.stopPropagation()} style={{ display: 'block', padding: '32px', maxWidth: '560px', width: '90%' }}>
            <button className="lightbox-close" onClick={() => setIsPartnerModalOpen(false)}>&times;</button>

            <span className="eyebrow dark"><i></i> PARCEIROS</span>
            <h2 style={{ fontSize: '22px', color: '#001C46', marginBottom: '20px' }}>
              {editingPartner ? `Editar: ${editingPartner.name}` : 'Adicionar Novo Parceiro'}
            </h2>

            <form onSubmit={handlePartnerFormSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>Nome do Parceiro *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Porto de Luanda"
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    className="admin-input-sm"
                    style={{ width: '100%', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#001C46', marginBottom: '6px' }}>
                    Logótipo do Parceiro (Upload ou URL) *
                  </label>

                  {partnerForm.logo && partnerForm.logo.startsWith('data:') ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '6px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#0284C7', fontWeight: '800', fontSize: '14px' }}>✓</span>
                        <span style={{ fontSize: '13px', color: '#1E40AF', fontWeight: '600' }}>Ficheiro carregado com sucesso</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <label className="btn btn-secondary" style={{ cursor: 'pointer', fontSize: '12px', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconUpload /> Substituir Foto
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                if (!file.type.startsWith('image/')) {
                                  alert('Por favor selecione um ficheiro de imagem válido.');
                                  return;
                                }
                                const reader = new FileReader();
                                reader.onload = () => {
                                  setPartnerForm(prev => ({ ...prev, logo: reader.result }));
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <input
                        type="text"
                        placeholder="Cole um link de imagem ou faça upload..."
                        value={partnerForm.logo}
                        onChange={(e) => setPartnerForm({ ...partnerForm, logo: e.target.value })}
                        className="admin-input-sm"
                        style={{ flex: 1, padding: '10px 14px' }}
                      />
                      <label className="btn btn-secondary" style={{ whiteSpace: 'nowrap', cursor: 'pointer', fontSize: '13px', padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <IconUpload /> Upload de Foto
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              if (!file.type.startsWith('image/')) {
                                alert('Por favor selecione um ficheiro de imagem válido.');
                                return;
                              }
                              const reader = new FileReader();
                              reader.onload = () => {
                                setPartnerForm(prev => ({ ...prev, logo: reader.result }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  )}

                  <small style={{ fontSize: '11px', color: '#64748B' }}>
                    Suporta imagens PNG, JPG, SVG ou WEBP através de upload directo ou endereço web.
                  </small>
                </div>

                {partnerForm.logo && (
                  <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <p style={{ fontSize: '11px', fontWeight: '700', color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
                        Pré-visualização do Logótipo
                      </p>
                      <button
                        type="button"
                        onClick={() => setPartnerForm({ ...partnerForm, logo: '' })}
                        style={{ background: 'none', border: 'none', color: '#D31211', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
                      >
                        Remover Foto
                      </button>
                    </div>
                    <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '6px', border: '1px dashed #CBD5E1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={partnerForm.logo}
                        alt={partnerForm.name || 'Preview'}
                        style={{ maxHeight: '60px', maxWidth: '200px', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsPartnerModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">
                  {editingPartner ? 'Guardar Alterações' : 'Adicionar Parceiro'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPortal;
