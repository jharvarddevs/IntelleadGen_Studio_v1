import React from 'react';
import { Shield, Zap, Target, CheckCircle2 } from 'lucide-react';

interface PhaseProps {
    number: string;
    title: string;
    subtitle: string;
    items: string[];
    icon: React.ReactNode;
    isActive?: boolean;
}

const Phase: React.FC<PhaseProps> = ({ number, title, subtitle, items, icon, isActive }) => (
    <div className={`relative p-8 rounded-3xl border transition-all duration-500 group ${isActive
        ? 'bg-black border-primary-500/50 shadow-2xl shadow-primary-500/10'
        : 'bg-white/5 border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
        }`}>
        <div className="absolute top-0 right-0 p-4 font-mono text-5xl font-black text-white/5 group-hover:text-primary-500/10 transition-colors">
            {number}
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isActive ? 'bg-primary-500 text-white' : 'bg-white/10 text-gray-400'
            }`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-primary-400 text-sm font-bold uppercase tracking-widest mb-6">{subtitle}</p>

        <div className="space-y-4">
            {items.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${isActive ? 'text-primary-500' : 'text-gray-600'}`} />
                    <span className="text-sm text-gray-400">{item}</span>
                </div>
            ))}
        </div>
    </div>
);

export const HPAPhaseShift: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Phase
                    number="01"
                    title="Foundation"
                    subtitle="Stop the Bleeding"
                    icon={<Shield className="w-8 h-8" />}
                    items={[
                        "Instant Load Architecture (<1.2s)",
                        "Local Map-Pack Domination",
                        "Technical SEO Hardening",
                        "24/7 Threat Monitoring"
                    ]}
                />
                <Phase
                    number="02"
                    title="Growth"
                    subtitle="Scalable Momentum"
                    isActive={true}
                    icon={<Zap className="w-8 h-8" />}
                    items={[
                        "AI Agent Workflow Integration",
                        "High-Conversion Application Funnels",
                        "Direct CRM Logic Sync",
                        "Automated Multi-Channel Engagement"
                    ]}
                />
                <Phase
                    number="03"
                    title="Domination"
                    subtitle="Market Transcendence"
                    icon={<Target className="w-8 h-8" />}
                    items={[
                        "Proprietary AI Skill Development",
                        "White-Label SaaS Infrastructure",
                        "Predictive Revenue Engines",
                        "Nationwide Authority Clusters"
                    ]}
                />
            </div>

            <div className="mt-12 flex flex-col items-center justify-center text-center">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="h-px w-12 bg-gray-800"></div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-black">Velocity Driven</span>
                    <div className="h-px w-12 bg-gray-800"></div>
                </div>
                <p className="text-gray-400 mb-8 max-w-2xl italic">
                    "The biggest mistake most businesses make is trying to scale an unstable foundation. We shift your business from manual struggle to automated dominance in 90 days."
                </p>
            </div>
        </div>
    );
};
