import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialMessage, setInitialMessage] = useState('');

  // Listening to Hash change for multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      
      switch (hash) {
        case 'sobre':
          setCurrentPage('sobre');
          break;
        case 'servicos':
          setCurrentPage('servicos');
          break;
        case 'frota':
          setCurrentPage('frota');
          break;
        case 'contacto':
          setCurrentPage('contacto');
          break;
        case '':
        case 'inicio':
        default:
          setCurrentPage('home');
          break;
      }
      
      // Auto scroll to top when page changes
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Init router
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectEquipment = (vehicle) => {
    setInitialMessage(`Gostaria de solicitar cotação para o equipamento: ${vehicle.name} (${vehicle.type}).`);
    window.location.hash = '#/contacto';
  };

  // Clear initial message once contact page renders it
  useEffect(() => {
    if (currentPage !== 'contacto') {
      setInitialMessage('');
    }
  }, [currentPage]);

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
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
