import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CoveragePage } from './pages/CoveragePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ContactPcPage } from './pages/ContactPcPage';
import { PrivacyPage } from './pages/PrivacyPage';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderActivePage = () => {
    switch (currentPath) {
      case '/servicos':
        return <ServicesPage />;
      case '/area-atendimento':
        return <CoveragePage />;
      case '/como-funciona':
        return <HowItWorksPage />;
      case '/sobre':
        return <AboutPage />;
      case '/contato':
        return <ContactPage />;
      case '/contatopc':
        return <ContactPcPage />;
      case '/privacidade':
        return <PrivacyPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#10263D] text-[#F6F5F1]">
      <Header />
      <main className="flex-1">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
