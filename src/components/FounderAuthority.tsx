import React from 'react';
import { Shield, Award, Building2, GraduationCap, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from './Button';

export const FounderAuthority: React.FC = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Narrative Column */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
                            <Shield className="w-4 h-4" />
                            <span>Digital Infrastructure with Structural Integrity</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-secondary-900 mb-8 leading-tight">
                            A Foundation Built on <br />
                            <span className="text-primary-600">Precision and Trust.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-secondary-600 mb-10 leading-relaxed">
                            <p>
                                As an <span className="text-secondary-900 font-bold underline decoration-primary-400 decoration-2">Air Force Structures Civil Engineer Journeyman
                                </span>, I was trained to build things that cannot fail. I brought that same discipline into the private sector, managing multi-million dollar real estate developments encompassing over 50 units.
                            </p>
                            <p>
                                In construction, a weak foundation leads to collapse. In the digital world, a weak lead-gen system leads to wasted ad spend and missed revenue.
                            </p>
                            <p className="font-medium text-secondary-900 italic">
                                "I help high-ticket business owners bridge the gap between their operations and modern technology using the same elite standards I applied to physical infrastructure."
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" href="#contact">
                                Work with a Specialist
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <div className="flex items-center space-x-4 px-6 py-3 border-2 border-gray-100 rounded-xl">
                                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                                <span className="text-sm font-bold text-gray-500">Faith • Family • Foundations</span>
                            </div>
                        </div>
                    </div>

                    {/* Credential Cards Column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-primary-100/50 rounded-3xl -rotate-2 -z-10 scale-105"></div>

                        {/* Real Estate PM */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover-lift">
                            <Building2 className="w-10 h-10 text-primary-600 mb-4" />
                            <div className="text-2xl font-black text-secondary-900 mb-2">50+ Units</div>
                            <p className="text-sm text-secondary-600 font-medium leading-relaxed">
                                Managed multi-million dollar real estate developments from ground zero to completion.
                            </p>
                        </div>

                        {/* Military Background */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover-lift sm:translate-y-8">
                            <Star className="w-10 h-10 text-primary-600 mb-4" />
                            <div className="text-2xl font-black text-secondary-900 mb-2">USAF Veteran</div>
                            <p className="text-sm text-secondary-600 font-medium leading-relaxed">
                                Air Force Structures Civil Engineer Journeyman. Trained in military-grade precision.
                            </p>
                        </div>

                        {/* Harvard / Warrior Scholar */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover-lift">
                            <GraduationCap className="w-10 h-10 text-primary-600 mb-4" />
                            <div className="text-2xl font-black text-secondary-900 mb-2">Harvard WSP</div>
                            <p className="text-sm text-secondary-600 font-medium leading-relaxed">
                                Warrior-Scholar Project (Harvard College) Summer 2024. Elite leadership and academic rigor.
                            </p>
                        </div>

                        {/* Featured In */}
                        <div className="bg-black p-8 rounded-2xl shadow-xl hover-lift sm:translate-y-8 text-white">
                            <Award className="w-10 h-10 text-primary-400 mb-4" />
                            <div className="text-xl font-bold mb-2 italic">"A recap of Philly Startup Weekend..."</div>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed mb-4">
                                Recognized by **Al Día News** for contributions to local entrepreneurship and innovation.
                            </p>
                            <a
                                href="https://aldianews.com/en/leadership/entrepreneurs/philly-startup-weekend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-black text-primary-400 flex items-center hover:text-primary-300 transition-colors"
                            >
                                READ THE ARTICLE
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Visual Trust Bar */}
                <div className="mt-24 pt-12 border-t border-gray-100">
                    <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-secondary-400 mb-10">Trusted via Elite Backgrounds</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Note: In a real app, these would be actual SVG logos */}
                        <div className="flex items-center space-x-3 grayscale">
                            <span className="text-2xl font-black text-secondary-900">U.S. AIR FORCE</span>
                        </div>
                        <div className="flex items-center space-x-3 grayscale">
                            <span className="text-2xl font-black text-[#A51C30]">HARVARD</span>
                        </div>
                        <div className="flex items-center space-x-2 grayscale">
                            <span className="text-2xl font-serif font-black">AL DÍA</span>
                        </div>
                        <div className="flex items-center space-x-3 grayscale">
                            <span className="text-xl font-black tracking-tighter">PHILLY STARTUP</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
