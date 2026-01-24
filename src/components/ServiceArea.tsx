import React from 'react';
import { MapPin, CheckCircle, Navigation, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from './Section';

export const ServiceArea: React.FC = () => {
    const mainArea = {
        name: 'Greater Philadelphia Area',
        address: 'Serving Center City, Horsham, and surrounding regions',
        description: 'Boutique service model specializing in legal and medical AI systems across the tri-state area.'
    };

    const secondaryAreas = [
        'Horsham, PA',
        'Miami, FL',
        'New York, NY',
        'Washington, DC',
        'Boston, MA'
    ];

    return (
        <Section id="locations" background="gray">
            <SectionHeader
                title="Areas We Serve"
                subtitle="Local presence. Global standards. Dominating the Philadelphia market and beyond."
                centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Map & Local Signal */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>

                    <div className="relative bg-white rounded-2xl shadow-xl border border-primary-200 overflow-hidden">
                        <div className="aspect-video w-full bg-primary-50 grayscale hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4239855855!2d-75.16644!3d39.9520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62ec03c09dd%3A0x6a9fdc2f5dcca0!2sCenter%20City%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1706115000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="IntelleadGen Studio - Serving Greater Philadelphia"
                                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                            ></iframe>
                        </div>

                        <div className="p-6 md:p-8 bg-white/80 backdrop-blur-md">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary-600 rounded-xl shadow-lg shadow-primary-500/30">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900 mb-1">{mainArea.name}</h4>
                                    <p className="text-secondary-600 text-sm mb-4">{mainArea.address}</p>
                                    <div className="flex items-center space-x-2 text-primary-600 font-semibold text-sm group/link cursor-pointer">
                                        <Navigation className="w-4 h-4" />
                                        <span>View Service Coverage</span>
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Area List & Expansion */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                            Strategic Local Partnerships
                        </h3>
                        <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                            While our HQ is in the heart of **Philadelphia**, our AI systems operate globally. We specialize in dominating local "Map Packs" for high-ticket service industries across the East Coast.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {secondaryAreas.map((area) => (
                            <div
                                key={area}
                                className="flex items-center space-x-3 p-4 bg-white/50 border border-primary-100 rounded-xl hover:border-primary-400 hover:bg-white transition-all duration-300 group shadow-sm"
                            >
                                <CheckCircle className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
                                <span className="font-medium text-secondary-800">{area}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-primary-600 rounded-2xl text-white shadow-xl shadow-primary-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
                        <h4 className="text-lg font-bold mb-2 relative z-10">Don't see your city?</h4>
                        <p className="text-primary-100 text-sm mb-4 relative z-10">
                            Our AI optimization works for any competitive local market. Book a call to discuss your territory.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center space-x-2 text-white font-bold text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors relative z-10"
                        >
                            <span>Inquire for Your Market</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);
