import { useState, useEffect } from 'react';
import { SiteDataProvider } from './context/SiteDataContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import AdminPortal from './pages/AdminPortal';

function MainApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialMessage, setInitialMessage] = useState('');

  // Function to resolve current route from both hash and pathname
  const resolveRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
    const pathname = window.location.pathname.replace(/^\//, '').toLowerCase().trim();

    // Priority to hash if set, else pathname
    const target = hash || pathname;

    if (
      [
        'portal-interno',
        'gestao-bja',
        'painel-interno'
      ].includes(target)
    ) {
      return 'portal-interno';
    }
    if (['sobre', 'empresa', 'quem-somos'].includes(target)) return 'sobre';
    if (['servicos', 'solucoes'].includes(target)) return 'servicos';
    if (['frota', 'equipamentos', 'veiculos'].includes(target)) return 'frota';
    if (['contacto', 'contactos', 'cotacao'].includes(target)) return 'contacto';
    return 'home';
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const route = resolveRoute();
      setCurrentPage(route);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    // Initial check
    handleRouteChange();

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleSelectEquipment = (vehicle, simulationResult) => {
    let message =
      vehicle.autoMessage ||
      `Gostaria de solicitar cotação para o equipamento: ${vehicle.name} (${vehicle.type}).`;

    if (simulationResult) {
      const formattedTotal = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: simulationResult.currency || 'AOA',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(simulationResult.total);

      message += `\n\n[SIMULAÇÃO DE FRETE REALIZADA]\n• Origem: ${simulationResult.origin}\n• Destino: ${simulationResult.destination}\n• Distância: ${simulationResult.distanceKm} km\n• Estimativa de Frete: ${formattedTotal}`;
    }

    setInitialMessage(message);
    window.location.hash = '#/contacto';
  };

  // Clear initial message once contact page renders it
  useEffect(() => {
    if (currentPage !== 'contacto') {
      setInitialMessage('');
    }
  }, [currentPage]);

  // If in Admin Portal route, render only the AdminPortal without public header and footer
  if (currentPage === 'portal-interno') {
    return <AdminPortal />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre':
        return <About />;
      case 'servicos':
        return <Services />;
      case 'frota':
        return <Fleet onSelectEquipment={handleSelectEquipment} />;
      case 'contacto':
        return <Contact initialMessage={initialMessage} />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <SiteDataProvider>
      <MainApp />
    </SiteDataProvider>
  );
}

export default App;
