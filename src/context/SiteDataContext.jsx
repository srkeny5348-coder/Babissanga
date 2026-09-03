import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const SiteDataContext = createContext();

const STORAGE_KEYS = {
  FOOTER: 'babissanga_footer_data_v2',
  FLEET: 'babissanga_fleet_data_v2',
  MESSAGES: 'babissanga_messages_v2',
  AUTH: 'babissanga_auth_v2',
  ADMIN_CREDENTIALS: 'babissanga_admin_cred_v2',
  HERO_SLIDES: 'babissanga_hero_slides_v2',
  FREIGHT_RATES: 'babissanga_freight_rates_v1',
  SERVICES: 'babissanga_services_v1',
  PARTNERS: 'babissanga_partners_v1'
};

const SUPABASE_ROW_ID = 'main';

const DEFAULT_PARTNERS = [
  { id: 'part_1', name: 'Porto de Luanda', logo: '/NLogo.png' },
  { id: 'part_2', name: 'Sonangol Logistics', logo: '/NLogo.png' },
  { id: 'part_3', name: 'Terminal Multiusos', logo: '/NLogo.png' }
];

const DEFAULT_SERVICES = [
  { id: 'srv_1', name: 'Transporte Rodoviário', description: 'Frotas dedicadas de camiões pesados e comerciais ligeiros. Gestão de cargas completas (FTL) e distribuição urbana regional ágil.' },
  { id: 'srv_2', name: 'Logística Marítima', description: 'Gestão integrada de contentores, consolidação de carga, desalfandegamento expedito e coordenação portuária eficiente.' },
  { id: 'srv_3', name: 'Carga Aérea', description: 'Segurança máxima e velocidade prioritária para cargas urgentes, documentos de alto valor e bens perecíveis.' },
  { id: 'srv_4', name: 'Projectos Especiais', description: 'Planeamento técnico logístico complexo para cargas de dimensões fora do padrão, sector de energia e infraestruturas.' }
];

const DEFAULT_HERO_SLIDES = [
  { id: 'slide_1', url: '/bg1.jpg', label: 'Operação Portuária & Carga Pesada' },
  { id: 'slide_2', url: '/bg2.jpg', label: 'Frota & Equipa Babissanga' },
  { id: 'slide_3', url: '/bg3.jpeg', label: 'Logística de Contentores & Aduana' }
];

const DEFAULT_FOOTER = {
  phone: '+244 921 508 050',
  phoneDisplay: '+244 921 508 050',
  whatsappNumber: '244933870999',
  whatsappUrl: 'https://wa.me/p/28141082612189463/244933870999',
  email: 'geral@babissanga.com',
  baseLocation: 'Luanda, Angola',
  operationalHours: 'Disponibilidade operacional 24 / 7',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/',
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/'
};

const DEFAULT_FLEET = [
  {
    id: 'volvo',
    name: 'Camiões Volvo FM',
    type: 'Pesado de Longo Curso',
    description: 'Camiões de alta capacidade ideais para contentores de grande porte e logística inter-regional. Equipados com suspensão avançada e motores de alta eficiência para estradas exigentes.',
    image: '/volvo.jpeg',
    specs: {
      'Capacidade': '40 Toneladas',
      'Motor': '420 CV / Volvo D13',
      'Tração': '6x4',
      'Ideal Para': 'Contentores Refrigerados e Carga Geral',
      'Estado': 'Operacional'
    },
    badge: 'Destaque',
    badgeColor: 'accent',
    autoMessage: 'Gostaria de solicitar cotação para o equipamento: Camiões Volvo FM (Pesado de Longo Curso).'
  },
  {
    id: 'sinotruck',
    name: 'Camiões SinoTruck HOWO 420',
    type: 'Pesado de Carga Geral',
    description: 'Frotas dedicadas para transporte de contentores e cargas a granel. Robustez comprovada para as estradas e rotas mais exigentes de Angola, garantindo durabilidade extrema.',
    image: '/sinotruck.jpeg',
    specs: {
      'Capacidade': '35 Toneladas',
      'Motor': '420 CV / WD615',
      'Tração': '6x4',
      'Ideal Para': 'Transporte Portuário e Granéis',
      'Estado': 'Operacional'
    },
    badge: 'Alta Capacidade',
    badgeColor: 'primary',
    autoMessage: 'Gostaria de solicitar cotação para o equipamento: Camiões SinoTruck HOWO 420 (Pesado de Carga Geral).'
  },
  {
    id: 'steelbro',
    name: 'Carregador Lateral Steelbro',
    type: 'Equipamento Porta-Contentores',
    description: 'Semi-reboque auto-carregador lateral para contentores de 20 e 40 pés. Permite carga e descarga autónoma diretamente no chão, sem necessidade de gruas adicionais no cliente.',
    image: '/steelbro.jpeg',
    specs: {
      'Capacidade de Elevação': '36 Toneladas',
      'Alcance': '4.0 metros',
      'Compatibilidade': '20 e 40 Pés',
      'Tipo': 'Auto-carregador lateral (Side Lifter)',
      'Estado': 'Operacional'
    },
    badge: 'Especializado',
    badgeColor: 'accent',
    autoMessage: 'Gostaria de solicitar cotação para o equipamento: Carregador Lateral Steelbro (Equipamento Porta-Contentores).'
  },
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    type: 'Comercial Ligeiro',
    description: 'Carrinhas versáteis para distribuição de encomendas urbanas, entregas rápidas e cargas fracionadas no centro das cidades de Angola com agilidade superior.',
    image: '/hiace.jpeg',
    specs: {
      'Capacidade': '1.5 Toneladas',
      'Motor': '2.5L Diesel',
      'Volume de Carga': '6.0 m³',
      'Ideal Para': 'Logística Urbana e Encomendas Rápidas',
      'Estado': 'Operacional'
    },
    badge: 'Urbano',
    badgeColor: 'primary',
    autoMessage: 'Gostaria de solicitar cotação para o veículo: Toyota Hiace (Comercial Ligeiro para distribuição urbana).'
  },
  {
    id: 'hino',
    name: 'Toyota Hino 300',
    type: 'Camião de Distribuição Média',
    description: 'Camião de médio porte ideal para distribuição comercial de mercadorias, abastecimento de lojas e transporte regional de média distância com alta economia de combustível.',
    image: '/hino.png',
    specs: {
      'Capacidade': '3.5 Toneladas',
      'Motor': '4.0L Turbodiesel',
      'Plataforma': 'Caixa Aberta / Fechada',
      'Ideal Para': 'Distribuição de Mercadorias e Retalho',
      'Estado': 'Operacional'
    },
    badge: 'Versátil',
    badgeColor: 'primary',
    autoMessage: 'Gostaria de solicitar cotação para o veículo: Toyota Hino 300 (Camião de Distribuição Média 3.5 Tn).'
  },
  {
    id: 'hummerlift',
    name: 'Empilhadeiras HummerLift',
    type: 'Movimentação de Carga',
    description: 'Equipamentos industriais robustos para operações de armazém, carga e descarga rápida de camiões e consolidação de contentores em terminais logísticos.',
    image: '/hummerlift.jpeg',
    specs: {
      'Capacidade de Elevação': '3.0 Toneladas',
      'Altura Máx. Elevação': '4.5 metros',
      'Combustível': 'Diesel / Gasóleo',
      'Operação': 'Armazéns e Terminais de Contentores',
      'Estado': 'Operacional'
    },
    badge: 'Armazém',
    badgeColor: 'primary',
    autoMessage: 'Gostaria de solicitar cotação para o equipamento: Empilhadeira HummerLift (Movimentação de Carga 3.0T).'
  }
];

const INITIAL_SAMPLE_MESSAGES = [
  {
    id: 'msg_sample_1',
    nome: 'Manuel Santos',
    email: 'manuel.santos@empresa.ao',
    empresa: 'Logística Atlântico Lda',
    servico: 'Transporte Rodoviário',
    mensagem: 'Necessitamos de cotação para transporte contínuo de contentores de 40 pés do Porto de Luanda para a província de Benguela.',
    date: '2026-08-22T14:30:00Z',
    status: 'Novo'
  },
  {
    id: 'msg_sample_2',
    nome: 'Dra. Ana Silva',
    email: 'ana.silva@comercio.ao',
    empresa: 'Distribuição Central Angola',
    servico: 'Logística Marítima',
    mensagem: 'Gostaria de consultar tarifas aduaneiras e coordenação portuária para 3 contentores refrigerados com chegada prevista para o próximo mês.',
    date: '2026-08-21T09:15:00Z',
    status: 'Em Análise'
  }
];

const DEFAULT_FREIGHT_RATES = [
  { id: 'route_1', origin: 'Luanda', destination: 'Benguela', pricePerKm: 850, baseFee: 120000, currency: 'AOA', distanceKm: 692 },
  { id: 'route_2', origin: 'Luanda', destination: 'Huambo', pricePerKm: 900, baseFee: 150000, currency: 'AOA', distanceKm: 600 },
  { id: 'route_3', origin: 'Luanda', destination: 'Lobito', pricePerKm: 850, baseFee: 130000, currency: 'AOA', distanceKm: 720 },
  { id: 'route_4', origin: 'Luanda', destination: 'Cabinda', pricePerKm: 1100, baseFee: 180000, currency: 'AOA', distanceKm: 480 },
  { id: 'route_5', origin: 'Luanda', destination: 'Malanje', pricePerKm: 800, baseFee: 100000, currency: 'AOA', distanceKm: 420 },
  { id: 'route_6', origin: 'Luanda', destination: 'Soyo', pricePerKm: 1000, baseFee: 160000, currency: 'AOA', distanceKm: 450 },
  { id: 'route_7', origin: 'Luanda', destination: 'Namibe', pricePerKm: 950, baseFee: 170000, currency: 'AOA', distanceKm: 960 },
  { id: 'route_8', origin: 'Luanda', destination: 'Lubango', pricePerKm: 900, baseFee: 160000, currency: 'AOA', distanceKm: 1005 }
];

export const SiteDataProvider = ({ children }) => {
  const [supabaseReady, setSupabaseReady] = useState(false);
  // Footer Data
  const [footerData, setFooterData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FOOTER);
      return saved ? JSON.parse(saved) : DEFAULT_FOOTER;
    } catch {
      return DEFAULT_FOOTER;
    }
  });

  // Fleet Data
  const [fleetData, setFleetData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FLEET);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure valid images
        return parsed.map((item, idx) => ({
          ...DEFAULT_FLEET[idx],
          ...item,
          image: item.image || DEFAULT_FLEET[idx]?.image || '/NLogo.png'
        }));
      }
      return DEFAULT_FLEET;
    } catch {
      return DEFAULT_FLEET;
    }
  });

  // Messages Data
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : INITIAL_SAMPLE_MESSAGES;
    } catch {
      return INITIAL_SAMPLE_MESSAGES;
    }
  });

  // Hero Background Slides
  const [heroSlides, setHeroSlides] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HERO_SLIDES);
      return saved ? JSON.parse(saved) : DEFAULT_HERO_SLIDES;
    } catch {
      return DEFAULT_HERO_SLIDES;
    }
  });

  // Freight Rates (admin-defined)
  const [freightRates, setFreightRates] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FREIGHT_RATES);
      return saved ? JSON.parse(saved) : DEFAULT_FREIGHT_RATES;
    } catch {
      return DEFAULT_FREIGHT_RATES;
    }
  });

  // Services Data (admin-defined)
  const [servicesData, setServicesData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
    } catch {
      return DEFAULT_SERVICES;
    }
  });

  // Partners Data (admin-defined)
  const [partnersData, setPartnersData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PARTNERS);
      return saved ? JSON.parse(saved) : DEFAULT_PARTNERS;
    } catch {
      return DEFAULT_PARTNERS;
    }
  });

  useEffect(() => {
    if (!supabase) {
      setSupabaseReady(true);
      return;
    }

    const loadMessages = async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('data')
        .order('created_at', { ascending: false });

      if (!error && data?.length) setMessages(data.map(row => row.data));
      if (error) console.error('Error loading contact messages', error);
    };

    const loadSiteData = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const { data, error } = await supabase
        .from('site_data')
        .select('data')
        .eq('id', SUPABASE_ROW_ID)
        .maybeSingle();

      if (error) {
        console.error('Error loading site data from Supabase', error);
      } else if (data?.data) {
        const remote = data.data;
        if (remote.footerData) setFooterData(remote.footerData);
        if (remote.fleetData) setFleetData(remote.fleetData);
        if (remote.heroSlides) setHeroSlides(remote.heroSlides);
        if (remote.freightRates) setFreightRates(remote.freightRates);
        if (remote.servicesData) setServicesData(remote.servicesData);
        if (remote.partnersData) setPartnersData(remote.partnersData);
      }

      if (sessionData.session) await loadMessages();

      setSupabaseReady(true);
    };

    loadSiteData();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) loadMessages();
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !supabaseReady) return;

    const saveSiteData = async () => {
      const { error } = await supabase.from('site_data').upsert({
        id: SUPABASE_ROW_ID,
        data: {
          footerData,
          fleetData,
          heroSlides,
          freightRates,
          servicesData,
          partnersData
        },
        updated_at: new Date().toISOString()
      });

      if (error) console.error('Error saving site data to Supabase', error);
    };

    saveSiteData();
  }, [supabaseReady, footerData, fleetData, messages, heroSlides, freightRates, servicesData, partnersData]);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FOOTER, JSON.stringify(footerData));
    } catch (e) {
      console.error('Error saving footer data', e);
    }
  }, [footerData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FLEET, JSON.stringify(fleetData));
    } catch (e) {
      console.error('Error saving fleet data', e);
    }
  }, [fleetData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    } catch (e) {
      console.error('Error saving messages', e);
    }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HERO_SLIDES, JSON.stringify(heroSlides));
    } catch (e) {
      console.error('Error saving hero slides', e);
    }
  }, [heroSlides]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FREIGHT_RATES, JSON.stringify(freightRates));
    } catch (e) {
      console.error('Error saving freight rates', e);
    }
  }, [freightRates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(servicesData));
    } catch (e) {
      console.error('Error saving services data', e);
    }
  }, [servicesData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(partnersData));
    } catch (e) {
      console.error('Error saving partners data', e);
    }
  }, [partnersData]);

  // Actions
  const addMessage = async (msg) => {
    const newMessage = {
      ...msg,
      id: 'msg_' + Date.now(),
      date: new Date().toISOString(),
      status: 'Novo'
    };

    if (supabase) {
      const { error } = await supabase.from('contact_messages').insert({
        id: newMessage.id,
        data: newMessage,
        created_at: newMessage.date
      });
      if (error) {
        console.error('Error saving contact message', error);
        throw error;
      }
    }

    setMessages(prev => [newMessage, ...prev]);
    return newMessage;
  };

  const updateMessageStatus = async (id, newStatus) => {
    if (supabase) {
      const message = messages.find(item => item.id === id);
      if (message) {
        const { error } = await supabase
          .from('contact_messages')
          .update({ data: { ...message, status: newStatus } })
          .eq('id', id);
        if (error) console.error('Error updating contact message', error);
      }
    }
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
  };

  const deleteMessage = async (id) => {
    if (supabase) {
      const { error } = await supabase.from('contact_messages').delete().eq('id', id);
      if (error) console.error('Error deleting contact message', error);
    }
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const updateFooter = (newData) => {
    setFooterData(prev => ({ ...prev, ...newData }));
  };

  const uploadImage = async (dataUrl, folder) => {
    if (!supabase) {
      throw new Error('O Supabase não está configurado neste ambiente.');
    }

    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const extension = blob.type === 'image/png' ? 'png' : 'jpg';
    const filePath = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const { error } = await supabase.storage
      .from('site-images')
      .upload(filePath, blob, { contentType: blob.type, upsert: false });

    if (error) {
      console.error('Error uploading image to Supabase Storage', error);
      throw new Error('Não foi possível guardar a imagem no Supabase.');
    }

    const { data } = supabase.storage.from('site-images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const updateVehicleImage = (id, newImage) => {
    setFleetData(prev => prev.map(v => v.id === id ? { ...v, image: newImage } : v));
  };

  const updateVehicleAutoMessage = (id, newAutoMessage) => {
    setFleetData(prev => prev.map(v => v.id === id ? { ...v, autoMessage: newAutoMessage } : v));
  };

  const updateVehicleDetails = (id, details) => {
    setFleetData(prev => prev.map(v => v.id === id ? { ...v, ...details } : v));
  };

  const addVehicle = (vehicleData) => {
    const newVehicle = {
      id: 'v_' + Date.now(),
      name: vehicleData.name || 'Novo Veículo',
      type: vehicleData.type || 'Equipamento Logístico',
      description: vehicleData.description || 'Descrição das especificações técnicas do veículo.',
      image: vehicleData.image || '/volvo.jpeg',
      specs: vehicleData.specs || {
        'Capacidade': 'Sob Consulta',
        'Estado': 'Operacional'
      },
      badge: vehicleData.badge || 'Frota BJA',
      badgeColor: vehicleData.badgeColor || 'primary',
      autoMessage: vehicleData.autoMessage || `Gostaria de solicitar cotação para o equipamento: ${vehicleData.name || 'Novo Veículo'}.`
    };
    setFleetData(prev => [...prev, newVehicle]);
    return newVehicle;
  };

  const deleteVehicle = (id) => {
    setFleetData(prev => prev.filter(v => v.id !== id));
  };

  // Hero Slide Actions
  const addHeroSlide = (slideData) => {
    const newSlide = {
      id: 'slide_' + Date.now(),
      url: slideData.url || '/bg1.jpg',
      label: slideData.label || 'Nova Imagem do Fundo'
    };
    setHeroSlides(prev => [...prev, newSlide]);
    return newSlide;
  };

  const deleteHeroSlide = (id) => {
    setHeroSlides(prev => prev.filter(s => s.id !== id));
  };

  const updateHeroSlide = (id, slideData) => {
    setHeroSlides(prev => prev.map(s => s.id === id ? { ...s, ...slideData } : s));
  };

  // Freight Rate Actions
  const addFreightRate = (rateData) => {
    const newRate = {
      id: 'route_' + Date.now(),
      origin: rateData.origin || 'Luanda',
      destination: rateData.destination || '',
      pricePerKm: Number(rateData.pricePerKm) || 0,
      baseFee: Number(rateData.baseFee) || 0,
      currency: rateData.currency || 'AOA',
      distanceKm: Number(rateData.distanceKm) || 0
    };
    setFreightRates(prev => [...prev, newRate]);
    return newRate;
  };

  const updateFreightRate = (id, rateData) => {
    setFreightRates(prev => prev.map(r => r.id === id ? { ...r, ...rateData } : r));
  };

  const deleteFreightRate = (id) => {
    setFreightRates(prev => prev.filter(r => r.id !== id));
  };

  // Service Actions
  const addService = (serviceData) => {
    const newService = {
      id: 'srv_' + Date.now(),
      name: serviceData.name || 'Novo Serviço',
      description: serviceData.description || 'Descrição do novo serviço.'
    };
    setServicesData(prev => [...prev, newService]);
    return newService;
  };

  const updateService = (id, serviceData) => {
    setServicesData(prev => prev.map(s => s.id === id ? { ...s, ...serviceData } : s));
  };

  const deleteService = (id) => {
    setServicesData(prev => prev.filter(s => s.id !== id));
  };

  // Partner Actions
  const addPartner = (partnerData) => {
    const newPartner = {
      id: 'part_' + Date.now(),
      name: partnerData.name || 'Novo Parceiro',
      logo: partnerData.logo || ''
    };
    setPartnersData(prev => [...prev, newPartner]);
    return newPartner;
  };

  const updatePartner = (id, partnerData) => {
    setPartnersData(prev => prev.map(p => p.id === id ? { ...p, ...partnerData } : p));
  };

  const deletePartner = (id) => {
    setPartnersData(prev => prev.filter(p => p.id !== id));
  };

  const resetAllToDefaults = () => {
    setFooterData(DEFAULT_FOOTER);
    setFleetData(DEFAULT_FLEET);
    setHeroSlides(DEFAULT_HERO_SLIDES);
    setFreightRates(DEFAULT_FREIGHT_RATES);
    setServicesData(DEFAULT_SERVICES);
    setPartnersData(DEFAULT_PARTNERS);
    localStorage.removeItem(STORAGE_KEYS.FOOTER);
    localStorage.removeItem(STORAGE_KEYS.FLEET);
    localStorage.removeItem(STORAGE_KEYS.HERO_SLIDES);
    localStorage.removeItem(STORAGE_KEYS.FREIGHT_RATES);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.PARTNERS);
  };

  return (
    <SiteDataContext.Provider
      value={{
        footerData,
        fleetData,
        messages,
        heroSlides,
        freightRates,
        servicesData,
        partnersData,
        addMessage,
        updateMessageStatus,
        deleteMessage,
        updateFooter,
        uploadImage,
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
        addPartner,
        updatePartner,
        deletePartner,
        resetAllToDefaults
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
