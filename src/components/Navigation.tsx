import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { MegaMenu } from './MegaMenu';
import { getAllServices } from '../lib/servicesData';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  const services = getAllServices();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuOpen &&
        megaMenuRef.current &&
        servicesButtonRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && megaMenuOpen) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [megaMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services', hasMegaMenu: true },
    { name: 'Platform', id: 'platform', isExternal: true, url: 'https://intelleadgen.io' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Intelligence', id: 'intelligence-hub' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="relative z-50 w-full bg-white/95 backdrop-blur-md border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
              setMegaMenuOpen(false);
            }}
            className="flex items-center group"
          >
            <img
              src="/ILG_logo_03-27-2023-black.png"
              alt="IntelleadGen Studio"
              width="200"
              height="56"
              className="h-10 md:h-14 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                ref={item.hasMegaMenu ? servicesButtonRef : null}
                onMouseEnter={item.hasMegaMenu ? handleMouseEnter : undefined}
                onMouseLeave={item.hasMegaMenu ? handleMouseLeave : undefined}
              >
                {item.isExternal ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors duration-300 flex items-center space-x-1 text-primary-600 hover:text-black group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      if (item.hasMegaMenu) {
                        setMegaMenuOpen(!megaMenuOpen);
                      } else {
                        onNavigate(item.id);
                        setMegaMenuOpen(false);
                      }
                    }}
                    className={`text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${currentPage === item.id || (item.hasMegaMenu && megaMenuOpen)
                      ? 'text-black'
                      : 'text-primary-600 hover:text-black'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>
                )}
              </div>
            ))}
            <Button size="sm" href="#contact" shimmer>
              Book Discovery Call
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={megaMenuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu
          isOpen={megaMenuOpen}
          onNavigate={onNavigate}
          onClose={() => setMegaMenuOpen(false)}
        />
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-200 animate-slide-down max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.hasMegaMenu ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors text-primary-600 hover:bg-primary-100"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={service.id}
                              onClick={() => {
                                onNavigate(service.slug);
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg text-sm hover:bg-primary-100 transition-colors"
                            >
                              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-primary-700">{service.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : item.isExternal ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors text-primary-600 hover:bg-primary-100"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === item.id
                      ? 'bg-black text-white'
                      : 'text-primary-600 hover:bg-primary-100'
                      }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <Button fullWidth size="sm" onClick={() => setMobileMenuOpen(false)} href="#contact">
              Book Discovery Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
