import React from 'react';
import { Zap, ShieldCheck, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const Metric: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="flex items-center space-x-2 whitespace-nowrap px-8 border-r border-white/10 h-full">
        <div className="text-primary-500">{icon}</div>
        <span className="text-gray-500 text-[10px] uppercase tracking-widest font-black">{label}:</span>
        <span className="text-white text-xs font-black">{value}</span>
    </div>
);

export const EliteTrustBar: React.FC = () => {
    return (
        <div className="w-full bg-black/95 backdrop-blur-md border-y border-white/5 py-3 overflow-hidden">
            <div className="flex animate-marquee">
                {/* Original items */}
                <Metric label="Avg Site Load" value="0.8s" icon={<Zap className="w-3 h-3" />} />
                <Metric label="Lead Capture Efficiency" value="+180%" icon={<ArrowUpRight className="w-3 h-3" />} />
                <Metric label="AI Search Visibility Index" value="ELITE" icon={<Cpu className="w-3 h-3" />} />
                <Metric label="Data Sovereignty" value="100% SECURE" icon={<ShieldCheck className="w-3 h-3" />} />
                <Metric label="Global Edge Deployment" value="ACTIVE" icon={<Globe className="w-3 h-3" />} />

                {/* Duplicates for seamless loop */}
                <Metric label="Avg Site Load" value="0.8s" icon={<Zap className="w-3 h-3" />} />
                <Metric label="Lead Capture Efficiency" value="+180%" icon={<ArrowUpRight className="w-3 h-3" />} />
                <Metric label="AI Search Visibility Index" value="ELITE" icon={<Cpu className="w-3 h-3" />} />
                <Metric label="Data Sovereignty" value="100% SECURE" icon={<ShieldCheck className="w-3 h-3" />} />
                <Metric label="Global Edge Deployment" value="ACTIVE" icon={<Globe className="w-3 h-3" />} />

                {/* Extra Duplicates for larger screens */}
                <Metric label="Avg Site Load" value="0.8s" icon={<Zap className="w-3 h-3" />} />
                <Metric label="Lead Capture Efficiency" value="+180%" icon={<ArrowUpRight className="w-3 h-3" />} />
                <Metric label="AI Search Visibility Index" value="ELITE" icon={<Cpu className="w-3 h-3" />} />
                <Metric label="Data Sovereignty" value="100% SECURE" icon={<ShieldCheck className="w-3 h-3" />} />
                <Metric label="Global Edge Deployment" value="ACTIVE" icon={<Globe className="w-3 h-3" />} />
            </div>
        </div>
    );
};
