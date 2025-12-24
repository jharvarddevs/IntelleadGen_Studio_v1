import React from 'react';
import { Target, Zap, Crown, CheckCircle2, ArrowRight } from 'lucide-react';

const phases = [
    {
        id: 'foundation',
        title: 'Phase 1: Authority Foundation',
        timeline: 'Months 1-3',
        icon: Target,
        color: 'blue',
        description: 'We stop the bleeding and establish absolute local dominance.',
        milestones: [
            'High-Performance Digital Architecture',
            'Local SEO Aggression & Dominance',
            'Revenue Leakage Identification',
            'ROI Tracker Implementation'
        ],
        outcome: 'Immediate Lead Growth'
    },
    {
        id: 'automation',
        title: 'Phase 2: Efficiency At Scale',
        timeline: 'Months 4-9',
        icon: Zap,
        color: 'amber',
        description: 'We replace manual busywork with intelligent AI systems.',
        milestones: [
            '24/7 AI Receptionist & Appointment Booking',
            'Automated Multi-Channel Lead Nurturing',
            'CRM & Workflow Synchronization',
            'Predictive Analytics Dashboard'
        ],
        outcome: '60% Reduction in Admin Overhead'
    },
    {
        id: 'domination',
        title: 'Phase 3: Market Domination',
        timeline: 'Months 10-24',
        icon: Crown,
        color: 'purple',
        description: 'We build custom assets that make you the untouchable leader.',
        milestones: [
            'Custom SaaS / Tool Development',
            'Advanced AI Agent Integration',
            'Nationwide Authority Campaigns',
            'Self-Sustaining Revenue Ecosystem'
        ],
        outcome: 'Industry Leader Status'
    }
];

export const SuccessRoadmap: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="roadmap">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        The IntelleadGen <span className="text-primary-600">Growth Roadmap</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We don't just build websites. We architect long-term revenue engines.
                        Here is your strategic path from digital presence to market domination.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-amber-500 to-purple-500 transform -translate-x-1/2 rounded-full opacity-20"></div>

                    <div className="space-y-16">
                        {phases.map((phase, index) => (
                            <div key={phase.id} className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <div className="w-full lg:w-5/12 group">
                                    <div className={`p-8 rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border-${phase.color}-100 hover:border-${phase.color}-300`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-sm font-bold uppercase tracking-widest text-${phase.color}-600`}>
                                                {phase.timeline}
                                            </span>
                                            <phase.icon className={`w-8 h-8 text-${phase.color}-500`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {phase.description}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {phase.milestones.map((milestone, mIdx) => (
                                                <li key={mIdx} className="flex items-start space-x-3 text-sm text-gray-700">
                                                    <CheckCircle2 className={`w-5 h-5 text-${phase.color}-500 flex-shrink-0 mt-0.5`} />
                                                    <span>{milestone}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className={`pt-6 border-t border-gray-100 flex items-center justify-between`}>
                                            <span className="text-xs font-semibold text-gray-400 uppercase">Core Outcome:</span>
                                            <span className={`text-sm font-bold text-${phase.color}-600`}>{phase.outcome}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                                    <div className={`w-12 h-12 rounded-full bg-${phase.color}-500 border-4 border-white shadow-xl flex items-center justify-center animate-pulse`}>
                                        <div className="w-4 h-4 rounded-full bg-white"></div>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden lg:block lg:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all hover:scale-105 shadow-xl group">
                        Download Full Strategic Blueprint (PDF)
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-sm text-gray-500 mt-4">For businesses generating $250k+ ARR only.</p>
                </div>
            </div>
        </section>
    );
};
