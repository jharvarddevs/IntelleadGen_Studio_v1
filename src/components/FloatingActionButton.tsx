import React, { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  href?: string;
  label: string;
  position?: 'bottom-right' | 'bottom-left';
  showAfterScroll?: number;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon: Icon,
  onClick,
  href,
  label,
  position = 'bottom-right',
  showAfterScroll = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfterScroll]);

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
  };

  const buttonContent = (
    <button
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="group relative w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
      aria-label={label}
    >
      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />

      {showTooltip && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/95 backdrop-blur-md text-white px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-2xl border border-primary-400/30 animate-slide-up-fade">
          {label}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/95"></div>
        </div>
      )}

      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

      <div className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-0 animate-ping group-hover:animate-none"></div>
    </button>
  );

  if (!isVisible) return null;

  if (href) {
    return (
      <a
        href={href}
        className={`fixed ${positionClasses[position]} z-50 animate-slide-up-fade`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="group relative w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95">
          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />

          {showTooltip && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/95 backdrop-blur-md text-white px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-2xl border border-primary-400/30 animate-slide-up-fade">
              {label}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/95"></div>
            </div>
          )}

          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

          <div className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-0 animate-ping group-hover:animate-none"></div>
        </div>
      </a>
    );
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 animate-slide-up-fade`}>
      {buttonContent}
    </div>
  );
};
