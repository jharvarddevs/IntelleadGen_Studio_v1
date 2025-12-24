import React from 'react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { AIReadinessScorecard } from '../components/AIReadinessScorecard';
import { BookOpen, BarChart3, Presentation, Lock, Download, ArrowRight, ShieldCheck } from 'lucide-react';

const resources = [
    {
        title: 'The 2025 AI-Legal Framework',
        type: 'Whitepaper',
        icon: ShieldCheck,
        description: 'A deep dive into how law firms are leveraging AI while maintaining strict compliance and data security.',
        tag: 'Law Firms',
        premium: true
    },
    {
        title: 'Medical Aesthetics ROI Blueprint',
        type: 'Strategy Guide',
        icon: BarChart3,
        description: 'The exact systems the top 1% of MedSpas use to automate patient acquisition and double their CLV.',
        tag: 'Medical',
        premium: true
    },
    {
        title: 'Digital Authority Mastery',
        type: 'Video Series',
        icon: Presentation,
        description: '5-part series on dominating local search and building a brand that attracts high-ticket clients.',
        tag: 'All Industries',
        premium: false
    },
    {
        title: 'Lead Magnet Physics',
        type: 'E-Book',
        icon: BookOpen,
        description: 'Why 99% of lead magnets fail and how to build one that pre-qualifies your ideal clients on autopilot.',
        tag: 'Marketing',
        premium: false
    }
];

export const IntelligenceHub: React.FC = () => {
    return (
        <>
            <SEO
                title="Intelligence Hub"
                description="Exclusive strategic resources for high-ticket business owners. AI frameworks, revenue blueprints, and digital authority guides."
            />

            <div className="pt-0">
                <section className="bg-gray-950 pt-8 md:pt-12 pb-20 md:pb-32 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 blur-[120px] rounded-full"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full text-primary-400 text-sm font-semibold mb-8">
                            <Lock className="w-4 h-4" />
                            <span>Exclusive Strategic Assets</span>
                        </div>
                        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black mb-8">
                            The <span className="text-primary-500">Intelligence</span> Hub
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We provide the frameworks. You reap the rewards. Access our vault of high-ticket strategy guides,
                            AI frameworks, and revenue optimization blueprints.
                        </p>
                    </div>
                </section>

                <Section background="gray">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic AI Audit</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Diagnose your firm's automation gaps in 60 seconds. Get an immediate readiness score
                            and a custom strategic growth path.
                        </p>
                    </div>
                    <AIReadinessScorecard />
                </Section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {resources.map((resource, index) => (
                            <div key={index} className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                                {resource.premium && (
                                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-6 py-1.5 rounded-bl-2xl text-xs font-bold uppercase tracking-widest shadow-lg">
                                        Premium
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-8">
                                    <div className={`p-4 rounded-2xl bg-gray-50 text-gray-900 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500`}>
                                        <resource.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{resource.type}</span>
                                </div>

                                <div className="mb-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold mb-4">
                                        {resource.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {resource.description}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                                    <Button variant="outline" className="group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 py-3">
                                        {resource.premium ? 'Unlock Guide' : 'Download Now'}
                                        <Download className="w-4 h-4 ml-2" />
                                    </Button>
                                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-2 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-8">Looking for Bespoke Strategy?</h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Our specialists develop custom AI and marketing blueprints tailored to your specific
                            practice or firm. Skip the guides and go straight to the architecture.
                        </p>
                        <Button size="lg" href="#contact">
                            Book a Strategy Architect Call
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </Section>
            </div>
        </>
    );
};
