import React from 'react';
import { Zap, ShieldCheck, Cpu, Globe, ArrowUpRight, MapPin } from 'lucide-react';

const Metric: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="flex items-center space-x-2 whitespace-nowrap px-4 md:px-8 border-r border-white/10 h-10 md:h-12">
        <div className="text-primary-500 flex-shrink-0">{icon}</div>
        <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-widest font-black">{label}:</span>
        <span className="text-white text-[10px] md:text-xs font-black">{value}</span>
    </div>
);

export const EliteTrustBar: React.FC = () => {
    return (
        <div className="w-full bg-black/95 backdrop-blur-md border-b border-white/5 overflow-hidden flex-shrink-0">
            <div className="flex animate-marquee items-center">
                {/* Original items */}
                <Metric label="PRESENCE" value="PHILADELPHIA" icon={<MapPin className="w-3 h-3 text-primary-500" />} />
                <Metric label="Avg Site Load" value="0.8s" icon={<Zap className="w-3 h-3" />} />
                <Metric label="Lead Capture Efficiency" value="+180%" icon={<ArrowUpRight className="w-3 h-3" />} />
                <Metric label="AI Search" value="ELITE" icon={<Cpu className="w-3 h-3" />} />
                <Metric label="Data Sovereignty" value="100% SECURE" icon={<ShieldCheck className="w-3 h-3" />} />
                <Metric label="Global Edge" value="ACTIVE" icon={<Globe className="w-3 h-3" />} />

                {/* Duplicates for seamless loop */}
                <Metric label="PRESENCE" value="PHILADELPHIA" icon={<MapPin className="w-3 h-3 text-primary-500" />} />
                <Metric label="Avg Site Load" value="0.8s" icon={<Zap className="w-3 h-3" />} />
                <Metric label="Lead Capture Efficiency" value="+180%" icon={<ArrowUpRight className="w-3 h-3" />} />
                <Metric label="AI Search" value="ELITE" icon={<Cpu className="w-3 h-3" />} />
                <Metric label="Data Sovereignty" value="100% SECURE" icon={<ShieldCheck className="w-3 h-3" />} />
                <Metric label="Global Edge" value="ACTIVE" icon={<Globe className="w-3 h-3" />} />
            </div>
        </div>
    );
};
