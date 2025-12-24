import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getAllServices } from '../lib/servicesData';

interface MegaMenuProps {
  isOpen: boolean;
  onNavigate: (page: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onNavigate, onClose }) => {
  const services = getAllServices();

  if (!isOpen) return null;

  const handleServiceClick = (slug: string) => {
    onNavigate(slug);
    onClose();
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-black shadow-2xl animate-fade-in z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-primary-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-primary-600" />
        </button>
        <div className="mb-6 pr-12">
          <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
            Our Services
          </h3>
          <p className="text-lg text-black">
            Solutions for busy business owners who value their time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {['Foundation', 'Growth', 'Domination'].map((suite) => (
            <div key={suite} className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-primary-100 pb-2 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">
                  {suite === 'Foundation' ? 'Phase 01' : suite === 'Growth' ? 'Phase 02' : 'Phase 03'}
                </span>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  {suite}
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {services.filter(s => s.suite === suite).map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.slug)}
                      className="group flex items-center space-x-3 p-3 rounded-xl border border-transparent hover:border-primary-100 hover:bg-primary-50/50 transition-all duration-200 text-left"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors truncate">
                          {service.name}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-primary-200 text-center">
          <p className="text-primary-600 mb-4">
            Not sure which service you need?
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
