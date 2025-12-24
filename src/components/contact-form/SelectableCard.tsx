import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface SelectableCardProps {
  icon?: LucideIcon;
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;

}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  icon: Icon,
  label,
  description,
  selected,
  onClick,

}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left w-full ${selected
          ? 'bg-black text-white border-black'
          : 'bg-white text-black border-primary-200 hover:border-black'
        }`}
    >
      {selected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-black" />
          </div>
        </div>
      )}

      <div className="flex items-center space-x-3">
        {Icon && (
          <div
            className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${selected ? 'bg-white/20' : 'bg-black'
              }`}
          >
            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${selected ? 'text-white' : 'text-white'}`} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-sm md:text-base leading-tight break-words ${selected ? 'text-white' : 'text-black'}`}>
            {label}
          </h3>
          {description && (
            <p className={`text-xs md:text-sm mt-0.5 ${selected ? 'text-white/80' : 'text-primary-600'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};
