import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  industry: string;
  description: string;
  image: string;
  metrics?: string;
  link?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  industry,
  description,
  image,
  metrics,
  link,
}) => {
  const CardContent = (
    <div className="group relative overflow-hidden rounded-xl bg-white border-2 border-primary-200 hover:border-black transition-all duration-300 hover-lift">
      <div className="aspect-video overflow-hidden bg-primary-100 relative">
        <img
          src={image}
          alt={title}
          width="800"
          height="450"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full group-hover:scale-110 transition-transform duration-300">
            {industry}
          </span>
          <ExternalLink className="w-5 h-5 text-primary-400 group-hover:text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
        <p className="text-primary-600 mb-3">{description}</p>
        {metrics && (
          <div className="pt-3 border-t border-primary-200">
            <p className="text-sm font-semibold text-black group-hover:text-primary-600 transition-colors duration-300">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
