import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Users, Target, Rocket, ShieldCheck, Mail, Loader, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const JoinTeam: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'associate',
        linkedin: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: submitError } = await supabase.from('lead_magnet_submissions').insert({
                name: formData.name,
                email: formData.email,
                website_url: formData.linkedin, // Reusing field for LinkedIn
                audit_type: `career-interest-${formData.role}`,
                created_at: new Date().toISOString(),
            });

            if (submitError) throw submitError;
            setSubmitted(true);
        } catch (err) {
            console.error('Submission error:', err);
            setError('Something went wrong. Please try again or email us at careers@intelleadgen.com');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="pt-20">
                <Section background="dark">
                    <div className="max-w-3xl mx-auto text-center py-20">
                        <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary-500/30">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-white mb-6">Application Received</h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            We've received your interest. Our team reviews every application for "Elite Alignment."
                            If you pass the initial screen, we'll reach out via email with the next steps.
                        </p>
                        <Button variant="secondary" href="/">Return Home</Button>
                    </div>
                </Section>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Join Our Team"
                description="Become part of the IntelleadGen Studio elite. We are looking for high-performance SDRs, Associates, and Executives to architect the future of consulting."
            />

            <div className="pt-0">
                {/* Hero Section */}
                <section className="bg-gray-950 pt-8 md:pt-12 pb-20 md:pb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-600/10 blur-[100px] rounded-full"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full text-primary-400 text-sm font-semibold mb-8">
                                    <Users className="w-4 h-4" />
                                    <span>Elite Talent Network</span>
                                </div>
                                <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">
                                    Architect the <br />
                                    <span className="text-primary-500">Future</span> of Influence
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                                    We don't hire "employees." We partner with high-performance operators who want to
                                    master the HPA Framework and dominate the consulting landscape.
                                </p>
                            </div>

                            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                    <Target className="w-8 h-8 text-primary-500 mb-4" />
                                    <h3 className="text-white text-lg font-bold mb-2">High Authority</h3>
                                    <p className="text-gray-400 text-sm">We only work with the top 1% of firms. No commodity work.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                    <Rocket className="w-8 h-8 text-purple-500 mb-4" />
                                    <h3 className="text-white text-lg font-bold mb-2">Exponential Growth</h3>
                                    <p className="text-gray-400 text-sm">Master AI systems and automation to scale your own value.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                    <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                                    <h3 className="text-white text-lg font-bold mb-2">Ownership Culture</h3>
                                    <p className="text-gray-400 text-sm">We value results over hours. Complete autonomy for A-players.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                    <Users className="w-8 h-8 text-blue-500 mb-4" />
                                    <h3 className="text-white text-lg font-bold mb-2">Global Impact</h3>
                                    <p className="text-gray-400 text-sm">Join a mission to redefine digital architecture globally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="mb-8">Application for <span className="text-primary-600">Elite Partnership</span></h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                IntelleadGen is a private revenue studio. We accept a limited number of team members each quarter
                                to ensure absolute quality control. Complete the initial interest form below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 font-bold">01</div>
                                    <span className="font-semibold text-gray-900">Initial Screen (LinkedIn & Performance History)</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 font-bold">02</div>
                                    <span className="font-semibold text-gray-900">"The Gatekeeper" Passphrase Interview</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 font-bold">03</div>
                                    <span className="font-semibold text-gray-900">Onboarding Portal & Mission Immersion</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="John Wick"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="john@wick.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Target Role *</label>
                                    <select
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    >
                                        <option value="associate">Strategic Associate</option>
                                        <option value="sdr">Sales Development Rep (SDR)</option>
                                        <option value="executive">Account Executive</option>
                                        <option value="partner">Channel Partner</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">LinkedIn Profile URL *</label>
                                    <input
                                        type="url"
                                        required
                                        value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Why IntelleadGen? (Short)</label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="What excites you about architecting the future?"
                                    />
                                </div>

                                {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gray-950 text-white font-bold py-4 rounded-xl hover:bg-primary-600 transition-all shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <Loader className="w-5 h-5 animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Interest</span>
                                            <Mail className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};
