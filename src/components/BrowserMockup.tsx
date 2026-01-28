import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface BrowserMockupProps {
    url: string;
    className?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ url, className = '' }) => {
    return (
        <div className={`relative w-full h-full min-h-[400px] flex flex-col rounded-xl overflow-hidden shadow-2xl bg-white border border-white/10 ${className}`}>
            {/* Browser Header/Title Bar */}
            <div className="flex items-center space-x-2 px-4 py-3 bg-secondary-50 border-b border-secondary-200">
                <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-md mx-auto flex items-center space-x-2 px-3 py-1 bg-white border border-secondary-200 rounded-md shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-xs text-secondary-500 font-medium truncate select-none">
                        {url.replace(/^https?:\/\//, '')}
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-secondary-200"></div>
                    <div className="w-4 h-4 rounded-full bg-secondary-200"></div>
                </div>
            </div>

            {/* Browser Content */}
            <div className="flex-1 relative bg-secondary-100/30 overflow-hidden">
                <iframe
                    src={url}
                    className="w-full h-full border-0 absolute inset-0"
                    title="Website Preview"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                />

                {/* Overlay to catch clicks if needed, or keeping it interactive */}
                {/* <div className="absolute inset-0 z-10 pointer-events-none"></div> */}

                {/* Live Indicator */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    <span>Live Demo</span>
                </div>
            </div>
        </div>
    );
};
