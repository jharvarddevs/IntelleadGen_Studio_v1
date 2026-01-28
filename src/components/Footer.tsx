import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Philadelphia, PA',
    'Miami, FL',
    'New York, NY',
    'Horsham, PA',
    'Washington, DC',
    'Boston, MA',
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <img
              src="/ILG_logo_03-27-2023-black.png"
              alt="IntelleadGen Studio"
              width="170"
              height="48"
              className="h-10 md:h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-400 text-sm mb-4">
              Smarter Sites. Simpler Systems.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Join Our Team'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item === 'Join Our Team' ? 'join-team' : item.toLowerCase())}
                    className="text-primary-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://intelleadgen.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-white transition-colors flex items-center space-x-1 group"
                >
                  <span>intelleadgen.io</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li className="text-primary-500 text-xs">
                Self-Service Lead Gen Platform
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('website-design')}
                  className="text-primary-400 hover:text-white transition-colors text-left"
                >
                  Website Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-automation')}
                  className="text-primary-400 hover:text-white transition-colors text-left"
                >
                  AI Workflow Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('local-seo')}
                  className="text-primary-400 hover:text-white transition-colors text-left"
                >
                  Local SEO Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('google-business')}
                  className="text-primary-400 hover:text-white transition-colors text-left"
                >
                  Google Business Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('funnel-building')}
                  className="text-primary-400 hover:text-white transition-colors text-left"
                >
                  Funnel Building
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@intelleadgen.com" className="hover:text-white transition-colors">
                  hello@intelleadgen.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a href="tel:+2158092808" className="hover:text-white transition-colors">
                  (215) 809-2808
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Serving the Philadelphia Region</span>
                  <span className="text-xs text-primary-400">Center City • Horsham • Main Line</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-400">
              © {currentYear} IntelleadGen Studio. All rights reserved.
            </p>
            <div className="text-sm text-primary-400">
              <span className="font-medium">Service Areas:</span>{' '}
              {serviceAreas.slice(0, 3).join(' • ')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
