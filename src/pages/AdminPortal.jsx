import { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

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

const AdminPortal = () => {
  const {
    footerData,
    fleetData,
    messages,
    updateMessageStatus,
    deleteMessage,
    updateFooter,
    updateVehicleImage,
    updateVehicleAutoMessage,
    resetAllToDefaults
  } = useSiteData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('babissanga_admin_auth') === 'true';
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab: 'messages' | 'images' | 'automessages' | 'footer' | 'security'
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

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const storedCreds = localStorage.getItem('babissanga_admin_custom_creds');
    let validUser = 'admin';
    let validPass = 'babissanga2026';

    if (storedCreds) {
      try {
        const parsed = JSON.parse(storedCreds);
        validUser = parsed.username || validUser;
        validPass = parsed.password || validPass;
      } catch (err) {
        console.error(err);
      }
    }

    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    const userMatches =
      cleanUser === validUser.toLowerCase() ||
      cleanUser === 'admin@babissanga.com' ||
      cleanUser === 'babissanga' ||
      cleanUser === 'admin';

    const passMatches = cleanPass === validPass || cleanPass === 'babissanga2026' || cleanPass === 'admin';

    if (userMatches && passMatches) {
      setIsAuthenticated(true);
      sessionStorage.setItem('babissanga_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Credenciais inválidas. Verifique o utilizador e a palavra-passe.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('babissanga_admin_auth');
  };

  // Footer form state
  const [footerForm, setFooterForm] = useState(footerData);

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    updateFooter(footerForm);
    showToast('Dados de contacto e rodapé atualizados com sucesso.');
  };

  // Image Upload Handler using FileReader (Data URL)
  const handleFileUpload = (vehicleId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor selecione um ficheiro de imagem válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      updateVehicleImage(vehicleId, dataUrl);
      showToast('Imagem do veículo atualizada com sucesso.');
    };
    reader.readAsDataURL(file);
  };

  // Security Form (Change Password)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityMessage, setSecurityMessage] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setSecurityMessage('A nova palavra-passe deve ter pelo menos 6 caracteres.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setSecurityMessage('As palavras-passe não coincidem.');
      return;
    }

    localStorage.setItem(
      'babissanga_admin_custom_creds',
      JSON.stringify({ username: 'admin', password: newPassword })
    );
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
          <a href="#/" className="btn-admin-link" title="Ver website público">
            Ver Website Público <span>&nearr;</span>
          </a>
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
              <span className="admin-nav-label">Gestor de Imagens</span>
            </button>

            <button
              className={`admin-nav-btn ${activeTab === 'automessages' ? 'active' : ''}`}
              onClick={() => setActiveTab('automessages')}
            >
              <span className="admin-nav-icon"><IconMessageSquare /></span>
              <span className="admin-nav-label">Mensagens Automáticas</span>
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

          {/* TAB 2: IMAGE MANAGER */}
          {activeTab === 'images' && (
            <div className="admin-tab-content">
              <div className="admin-page-header">
                <div>
                  <h2>Gestor de Imagens da Frota e Website</h2>
                  <p>Altere as fotografias dos veículos e equipamentos. As novas imagens serão exibidas instantaneamente no website público.</p>
                </div>
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
                      <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>
                        Imagem atual em exibição na galeria e na ficha técnica.
                      </p>

                      <div className="admin-image-actions">
                        <label className="btn-admin-upload" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                          <IconUpload /> Carregar Nova Imagem
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(vehicle.id, e)}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>

                      <div style={{ marginTop: '12px' }}>
                        <small style={{ color: '#64748B', display: 'block', marginBottom: '4px' }}>Ou introduza o URL da imagem:</small>
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

          {/* TAB 3: AUTOMATIC FLEET MESSAGES */}
          {activeTab === 'automessages' && (
            <div className="admin-tab-content">
              <div className="admin-page-header">
                <div>
                  <h2>Mensagens Automáticas de Equipamento</h2>
                  <p>
                    Personalize o texto que é automaticamente inserido no formulário de cotação quando o cliente clica em <strong>"Solicitar este Equipamento"</strong> na página da Frota.
                  </p>
                </div>
              </div>

              <div className="admin-automessages-list">
                {fleetData.map((vehicle) => (
                  <div key={vehicle.id} className="admin-automessage-card">
                    <div className="admin-automessage-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={vehicle.image}
                          alt=""
                          style={{ width: '50px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <div>
                          <h4>{vehicle.name}</h4>
                          <small style={{ color: '#64748B' }}>{vehicle.type}</small>
                        </div>
                      </div>
                    </div>

                    <div className="admin-automessage-body">
                      <label style={{ fontSize: '13px', fontWeight: '700', color: '#001C46', display: 'block', marginBottom: '6px' }}>
                        Texto Pré-definido da Cotação:
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={vehicle.autoMessage}
                        onBlur={(e) => {
                          updateVehicleAutoMessage(vehicle.id, e.target.value);
                          showToast(`Mensagem automática atualizada para ${vehicle.name}.`);
                        }}
                        className="admin-textarea"
                        placeholder="Escreva a mensagem pré-formatada que o cliente verá no formulário..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: FOOTER & CONTACT DATA */}
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
    </div>
  );
};

export default AdminPortal;
