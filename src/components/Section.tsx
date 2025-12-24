import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-primary-50',
    dark: 'bg-black text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  dark = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`mb-4 ${dark ? 'text-white' : 'text-black'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-primary-400' : 'text-primary-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
