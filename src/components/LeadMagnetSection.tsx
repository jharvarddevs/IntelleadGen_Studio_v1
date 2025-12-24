import React, { useState, useRef } from 'react';
import { CheckCircle, Zap, TrendingUp, Clock, Loader, Target } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const LeadMagnetSection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringForm, setIsHoveringForm] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        websiteUrl: '',
        email: '',
        name: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!formRef.current) return;
        const rect = formRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address');
            setLoading(false);
            return;
        }

        try {
            const { error: submitError } = await supabase.from('lead_magnet_submissions').insert({
                website_url: formData.websiteUrl,
                email: formData.email,
                name: formData.name,
                audit_type: 'website-performance-ai-audit',
                created_at: new Date().toISOString(),
            });

            if (submitError) throw submitError;
            setSubmitted(true);
        } catch (err) {
            console.error('Submission error:', err);
            setError('Something went wrong. Please try again or email us at hello@intelleadgen.com');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="relative py-16 md:py-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">You're All Set! 🎉</h2>
                        <p className="text-xl text-gray-300 mb-6">
                            We've received your request for a free website audit.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                            <h3 className="font-semibold text-white mb-3">What happens next?</h3>
                            <ol className="space-y-3 text-left text-gray-300">
                                <li className="flex items-start space-x-3">
                                    <span className="font-semibold text-primary-300">1.</span>
                                    <span>We'll analyze your website (performance, SEO, mobile, AI opportunities)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="font-semibold text-primary-300">2.</span>
                                    <span>You'll receive your custom audit report within 24-48 hours</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="font-semibold text-primary-300">3.</span>
                                    <span>We'll highlight quick wins you can implement immediately</span>
                                </li>
                            </ol>
                        </div>
                        <p className="text-sm text-gray-400">
                            Check your email ({formData.email}) for confirmation.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-20 md:py-28 bg-black overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 opacity-60">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 via-primary-600 to-purple-600 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-primary-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {/* Glow effects */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-20"></div>

            {/* Floating orbs with parallax */}
            <div
                className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl transition-transform duration-700 ease-out"
                style={{
                    transform: isHoveringForm ? `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(1.2)` : 'translate(0, 0) scale(1)',
                    boxShadow: '0 0 60px rgba(79, 70, 229, 0.3)'
                }}
            ></div>
            <div
                className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl transition-transform duration-700 ease-out"
                style={{
                    transform: isHoveringForm ? `translate(${-mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04}px) scale(1.2)` : 'translate(0, 0) scale(1)',
                    boxShadow: '0 0 80px rgba(168, 85, 247, 0.3)'
                }}
            ></div>

            {/* Spotlight effect following mouse */}
            {isHoveringForm && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(1000px circle at ${mousePosition.x + 500}px ${mousePosition.y + 300}px, rgba(79, 70, 229, 0.1), transparent 50%)`
                    }}
                />
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Copy with glow effects */}
                    <div className="text-white space-y-8">
                        {/* Badge with glow */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg shadow-primary-500/20">
                            <Zap className="w-4 h-4 text-primary-300" />
                            <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent font-semibold">
                                100% Free. No Credit Card Required.
                            </span>
                        </div>

                        {/* Headline with gradient */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                                Get a Free Website Performance & AI Audit
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Discover exactly what's costing you leads right now. We'll analyze your site and show you the{' '}
                            <span className="text-primary-300 font-semibold">quick wins</span>.
                        </p>

                        {/* Benefits with icons and glow */}
                        <div className="space-y-5">
                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow duration-300">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">Speed & Performance Analysis</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Find out how fast your site really loads (and where you're losing visitors)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">SEO & Visibility Check</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">See how you rank vs. competitors and what's hurting your Google visibility</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">AI Automation Opportunities</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Identify which tasks you could automate to save 10+ hours per week</p>
                                </div>
                            </div>
                        </div>

                        {/* Delivery time badge */}
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-primary-400/30">
                            <Clock className="w-5 h-5 text-primary-300" />
                            <span className="text-white font-medium">Delivered within 24-48 hours</span>
                        </div>
                    </div>

                    {/* Right side - Form with premium white card and glow */}
                    <div
                        ref={formRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHoveringForm(true)}
                        onMouseLeave={() => setIsHoveringForm(false)}
                        className="relative group"
                    >
                        {/* Glow effect behind card - intensifies on hover */}
                        <div
                            className="absolute -inset-1 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl transition-all duration-500"
                            style={{
                                opacity: isHoveringForm ? 0.65 : 0.35,
                                transform: isHoveringForm ? 'scale(1.05)' : 'scale(1)'
                            }}
                        ></div>

                        {/* Main form card */}
                        <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-12 overflow-hidden border border-gray-100">
                            {/* Animated border gradient that tracks mouse - subtle */}
                            {isHoveringForm && (
                                <div
                                    className="pointer-events-none absolute -inset-[2px] rounded-3xl transition-opacity duration-300"
                                    style={{
                                        opacity: 0.5,
                                        background: `
                                            radial-gradient(
                                                400px circle at ${mousePosition.x}px ${mousePosition.y}px,
                                                rgba(79, 70, 229, 0.6),
                                                rgba(168, 85, 247, 0.4) 40%,
                                                transparent 70%
                                            )
                                        `,
                                        maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        maskComposite: 'exclude',
                                        WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        padding: '2px',
                                    }}
                                />
                            )}

                            {/* Gradient spotlight that follows mouse - small and subtle */}
                            {isHoveringForm && (
                                <div
                                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        opacity: 0.08,
                                        background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.3), rgba(168, 85, 247, 0.15) 50%, transparent 100%)`,
                                    }}
                                />
                            )}

                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-black mb-2 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                                        Claim Your Free Audit
                                    </h3>
                                    <p className="text-gray-600 text-lg">Takes 30 seconds. Zero obligation.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Your Website URL *
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.websiteUrl}
                                            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                                            placeholder="https://yourwebsite.com"
                                            required
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all hover:border-gray-300 text-gray-900 placeholder-gray-400 text-base"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Smith"
                                            required
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all hover:border-gray-300 text-gray-900 placeholder-gray-400 text-base"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@company.com"
                                            required
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all hover:border-gray-300 text-gray-900 placeholder-gray-400 text-base"
                                        />
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm font-medium">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 text-white px-6 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader className="w-6 h-6 animate-spin" />
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Get My Free Audit</span>
                                                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                                        We respect your privacy. Unsubscribe anytime. No spam, ever.
                                    </p>
                                </form>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="flex items-center justify-center space-x-8 text-sm font-medium">
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>No Credit Card</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>100% Free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
