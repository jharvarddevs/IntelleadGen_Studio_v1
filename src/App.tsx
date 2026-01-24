import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { IntelligenceHub } from './pages/IntelligenceHub';
import { ServicePage } from './pages/ServicePage';
import { JoinTeam } from './pages/JoinTeam';
import { OnboardingPortal } from './pages/OnboardingPortal';
import { SEO } from './components/SEO';
import { LocalBusinessSchema } from './components/LocalBusinessSchema';
import { EliteTrustBar } from './components/EliteTrustBar';
import { getServiceBySlug } from './lib/servicesData';
import { trackEvent } from './lib/supabase';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    if (hash) {
      setCurrentPage(hash);
      trackEvent('page_view', window.location.pathname, { page: hash });
    }
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    trackEvent('navigation', window.location.pathname, { to: page });
  };

  const renderPage = () => {
    const service = getServiceBySlug(currentPage);
    if (service) {
      return <ServicePage service={service} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'intelligence-hub':
        return <IntelligenceHub />;
      case 'join-team':
        return <JoinTeam />;
      case 'onboarding':
        return <OnboardingPortal />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href?.startsWith('#') && href !== '#') {
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (targetId === 'contact') {
            handleNavigate('contact');
          } else if (['services', 'portfolio', 'intelligence-hub', 'about', 'join-team', 'onboarding'].includes(targetId)) {
            handleNavigate(targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <LocalBusinessSchema />
      <div className="fixed top-0 left-0 right-0 z-50">
        <EliteTrustBar />
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
      <main className="pt-[104px] md:pt-[128px]">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
