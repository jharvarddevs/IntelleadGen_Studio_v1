import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Lock, Unlock, Zap, Target, Crown, ShieldCheck, Heart, TrendingUp, ArrowRight } from 'lucide-react';

const PASSPHRASE = 'Intelleadgen Elite';

export const OnboardingPortal: React.FC = () => {
    const [passphrase, setPassphrase] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState('');

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (passphrase.trim().toLowerCase() === PASSPHRASE.toLowerCase()) {
            setIsUnlocked(true);
            setError('');
        } else {
            setError('Unauthorized Access. Invalid Passphrase.');
            setPassphrase('');
        }
    };

    if (!isUnlocked) {
        return (
            <>
                <SEO title="Secure Onboarding Login" description="Restricted Access Area for IntelleadGen Associates." />
                <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
                    <div className="max-w-md w-full">
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
                            <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary-500/30">
                                <Lock className="w-8 h-8 text-primary-500" />
                            </div>
                            <h1 className="text-white text-3xl font-bold mb-4">Internal Portal</h1>
                            <p className="text-gray-400 mb-8">Enter the "Elite Gatekeeper" passphrase to access the mission architecture.</p>

                            <form onSubmit={handleUnlock} className="space-y-6">
                                <input
                                    type="password"
                                    value={passphrase}
                                    onChange={(e) => setPassphrase(e.target.value)}
                                    placeholder="Passphrase"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-center focus:border-primary-500 outline-none transition-all placeholder-gray-600 font-mono"
                                />
                                {error && <p className="text-red-500 text-sm font-semibold animate-pulse">{error}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-primary-500 transition-all shadow-lg"
                                >
                                    Unlock Portal
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO title="Onboarding Portal | IntelleadGen Studio" description="Official onboarding portal for IntelleadGen Associates." />

            <div className="pt-0">
                {/* Header / Mission Area */}
                <section className="bg-gray-950 pt-8 md:pt-12 pb-20 md:pb-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-green-400 text-sm font-semibold mb-8">
                            <Unlock className="w-4 h-4" />
                            <span>Access Authorized: Elite Level</span>
                        </div>
                        <h1 className="text-white text-5xl md:text-6xl font-black mb-8">
                            The Architecture of <span className="text-primary-500">Influence</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                            "We don't just build websites. We architect the digital command centers of the world's most
                            influential firms. Welcome to the inner circle."
                        </p>
                    </div>
                </section>

                {/* Core Pillars */}
                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold">Our <span className="text-primary-600">Mission</span></h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To eliminate digital mediocrity. We exist to provide the top 1% of service providers
                                with the technology they deserve but rarely find. Our mission is to transform
                                "Consultants" into "Untouchable Industry Leaders" through High-Performance Architecture.
                            </p>
                            <div className="p-6 bg-primary-50 rounded-2xl border-l-4 border-primary-600">
                                <p className="text-primary-900 font-bold uppercase tracking-widest text-xs mb-2">Our North Star</p>
                                <p className="text-primary-800 text-xl font-semibold">100% Conversion Efficiency. 0% Waste.</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold">Our <span className="text-primary-600">Vision</span></h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By 2026, IntelleadGen Studio will be the gold standard for high-ticket service architecture.
                                We are building a global network of "Elite Growth Strategists" who leverage AI and automation
                                to deliver results that shouldn't be possible at current human scale.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <TrendingUp className="w-6 h-6 text-primary-600 mb-2" />
                                    <p className="text-sm font-bold">Market Dominance</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <Zap className="w-6 h-6 text-amber-500 mb-2" />
                                    <p className="text-sm font-bold">Instant Scaling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* The Offerings & HPA Framework */}
                <Section background="dark">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-4xl font-bold mb-4 uppercase tracking-tighter">The HPA Framework</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">This is how we win. Every team member must master these four pillars.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Foundation', icon: ShieldCheck, color: 'blue', desc: 'Digital Architecture, Local SEO, and Speed.' },
                            { title: 'Growth', icon: Zap, color: 'amber', desc: 'AI Automation, Chatbots, and Funnels.' },
                            { title: 'Domination', icon: Crown, color: 'purple', desc: 'Nationwide Authority & Strategic SaaS.' },
                            { title: 'Momentum', icon: ShieldCheck, color: 'red', desc: 'Viral Loops & Shareable Authority.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                                <item.icon className={`w-10 h-10 text-${item.color}-500 mb-6 group-hover:scale-110 transition-transform`} />
                                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Rewards of Dominance */}
                <section className="bg-black py-24 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-4xl font-bold mb-4">Rewards of <span className="text-primary-500">Dominance</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto italic">Scale your earnings as we scale the mission. No ceilings, no mediocrity.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    label: 'Account Revenue Share',
                                    value: '25% MRR',
                                    desc: 'Direct profit share on all portfolios under your management core.',
                                    icon: TrendingUp,
                                    sub: 'Consistent Cashflow'
                                },
                                {
                                    label: 'Growth Bounties',
                                    value: '100%',
                                    desc: 'Earn the entire first month\'s revenue for every new architecture close.',
                                    icon: Zap,
                                    sub: 'High-Impact Rewards'
                                },
                                {
                                    label: 'Profit Participation',
                                    value: '10% Pool',
                                    desc: 'Quarterly distributions based on total Studio net profit performance.',
                                    icon: ShieldCheck,
                                    sub: 'Owner Aligned'
                                },
                                {
                                    label: 'Virtual Equity',
                                    value: 'Units',
                                    desc: 'Vested stake in the Studio\'s enterprise value and future liquidity.',
                                    icon: Crown,
                                    sub: 'Legacy Building'
                                }
                            ].map((reward, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden group hover:border-primary-500/50 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <reward.icon className="w-12 h-12 text-white" />
                                    </div>
                                    <p className="text-primary-500 font-bold text-xs uppercase tracking-widest mb-2">{reward.sub}</p>
                                    <h3 className="text-gray-400 text-sm font-medium mb-4">{reward.label}</h3>
                                    <div className="text-white text-4xl font-black mb-4 group-hover:scale-110 transition-transform">{reward.value}</div>
                                    <p className="text-gray-500 text-xs leading-relaxed">{reward.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl text-center max-w-3xl mx-auto">
                            <p className="text-gray-400 italic">
                                "We don't pay for time. We pay for impact. If the Studio wins, you win.
                                We empower you to build the company as if you were an owner, because on the
                                balance sheet of impact, you are."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits of the Mission */}
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-16 font-black scale-110">Why Back This Mission?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">High-Stakes Mastery</h3>
                                    <p className="text-gray-600 leading-relaxed">You aren't selling websites. You are selling freedom, time, and legacy to the world's most important service providers.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Exponential Leverage</h3>
                                    <p className="text-gray-600 leading-relaxed">Our internal AI tools give you 10x the output of a traditional associate. You learn the future while others stay in the past.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <Target className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Freedom Through Results</h3>
                                    <p className="text-gray-600 leading-relaxed">We don't track hours. We track impact. Deliver for the studio, and the studio delivers a lifestyle of ultimate autonomy for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Mastery Curriculum */}
                <Section background="gray">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Elite <span className="text-primary-600">Mastery Curriculum</span></h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Master these four core tracks to graduate from Associate to Strategic Architect.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
                                <h3 className="text-2xl font-bold mb-4">HPA Framework Mastery</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>The 5 Pillars Deep-Dive: Architecture to Momentum.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Diagnostic Protocols: Using the Scorecard & ROI tools.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
                                <h3 className="text-2xl font-bold mb-4">Strategic Sales Architecture</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Advisory Conversion: Sell the Roadmap, not the product.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Authority Positioning: ILG Systems vs Standard Agencies.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
                                <h3 className="text-2xl font-bold mb-4">The Tech-Stack Blueprint</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Automation Systems: Understanding the Growth Suite.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Builder Leverage: High-Authority asset generation tools.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">04</div>
                                <h3 className="text-2xl font-bold mb-4">Client Lifecycle Operations</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>The Phase-Shift Protocol: Lifecycle Management.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Quality of Standard: The "Zero Waste" Delivery Checklist.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Call to Action for Associates */}
                <Section background="white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-8">Ready to Commit?</h2>
                        <p className="text-xl text-gray-600 mb-10">
                            The path to Associate Lead starts with Phase 1 Mastery. Review your assigned training modules
                            now and prepare your first HPA audit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">Access Training Drive <ArrowRight className="w-5 h-5 ml-2" /></Button>
                            <Button size="lg" variant="outline-light">Request Strategy Session</Button>
                        </div>
                    </div>
                </Section>
            </div >
        </>
    );
};
