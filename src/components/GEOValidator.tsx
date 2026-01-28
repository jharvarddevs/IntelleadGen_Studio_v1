import React, { useState } from 'react';
import { Search, Loader2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './Button';

export const GEOValidator: React.FC = () => {

    const [businessName, setBusinessName] = useState('');
    const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
    const [risk, setRisk] = useState<'high' | 'medium' | 'low'>('high');

    const aiEntities = [
        {
            name: 'ChatGPT',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-[#10a37f]',
            position: 'group-hover:-translate-x-[420px] group-hover:-translate-y-32',
            delay: '0'
        },
        {
            name: 'Claude',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6.3 16.3L12 6.7l-6.3 9.6h12.6z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-[#D97757]',
            position: 'group-hover:-translate-x-[480px] group-hover:translate-y-0',
            delay: '100'
        },
        {
            name: 'Gemini',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-[#4285F4]',
            position: 'group-hover:-translate-x-[420px] group-hover:translate-y-32',
            delay: '200'
        },
        {
            name: 'Copilot',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500',
            position: 'group-hover:translate-x-[420px] group-hover:-translate-y-32',
            delay: '300'
        },
        {
            name: 'Perplexity',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 3v10l6.5-5-6.5-5z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-[#20808D]',
            position: 'group-hover:translate-x-[480px] group-hover:translate-y-0',
            delay: '400'
        },
        {
            name: 'Grok',
            icon: (props: any) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            color: 'text-white',
            bg: 'bg-black',
            position: 'group-hover:translate-x-[420px] group-hover:translate-y-32',
            delay: '500'
        },
    ];

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!businessName.trim()) return;

        setStatus('scanning');

        setTimeout(() => {
            const length = businessName.length;
            if (length % 3 === 0) setRisk('medium');
            else if (length % 5 === 0) setRisk('low');
            else setRisk('high');

            setStatus('result');
        }, 2500);
    };

    return (
        <>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            <div className="w-full max-w-2xl mx-auto">
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-700"></div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {aiEntities.map((entity, index) => (
                            <div
                                key={index}
                                className={`absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-0 z-0 ${entity.bg} ${entity.color} ${entity.position} group-hover:opacity-100 group-hover:scale-100 rounded-2xl shadow-2xl border border-white/20`}
                                style={{ transitionDelay: `${entity.delay}ms` }}
                            >
                                <div
                                    className="relative w-full h-full flex flex-col items-center justify-center animate-float"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <entity.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 rounded text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-white/10 pointer-events-none">
                                        {entity.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {status === 'idle' && (
                        <div className="relative z-10 animate-fade-in">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-primary-500/20 rounded-xl overflow-hidden">
                                    {/* --- UPDATED ICON HERE --- */}
                                    <img
                                        src="https://z-cdn-media.chatglm.cn/files/638f1f49-a60c-4dd4-a22e-a4f71604e484.png?auth_key=1866470619-c47401d44b2d4fa5ab16b754f651c2a8-0-65e27844d139175a8ca88fefecd4b8d2"
                                        alt="GEO Network Icon"
                                        width="24"
                                        height="24"
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-1">GEO Visibility Check</h3>
                                    <p className="text-gray-400 text-sm">How does ChatGPT & Gemini see your business?</p>
                                </div>
                            </div>

                            <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Business Name or Niche..."
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                                    />
                                </div>
                                <Button type="submit" className="whitespace-nowrap py-4 px-8 shadow-lg shadow-primary-500/20">
                                    Scan AI Identity
                                </Button>
                            </form>
                            <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest text-center">
                                Real-time Simulation of Generative Engine Optimization (GEO) Algorithms
                            </p>
                        </div>
                    )}

                    {status === 'scanning' && (
                        <div className="relative z-10 py-12 flex flex-col items-center justify-center animate-pulse">
                            <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2 italic">Scanning LLM Indices...</h3>
                            <div className="flex space-x-1">
                                <span className="text-xs text-primary-400 font-mono">Analyzing Semantic Entities</span>
                                <span className="dot-animation-1">.</span>
                                <span className="dot-animation-2">.</span>
                                <span className="dot-animation-3">.</span>
                            </div>
                        </div>
                    )}

                    {status === 'result' && (
                        <div className="relative z-10 animate-scale-up">
                            <div className="flex flex-col items-center text-center">
                                <div className={`p-4 rounded-full mb-6 ${risk === 'high' ? 'bg-red-500/20 text-red-400' :
                                    risk === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-green-500/20 text-green-400'
                                    }`}>
                                    {risk === 'high' ? <AlertTriangle className="w-10 h-10" /> :
                                        risk === 'medium' ? <Zap className="w-10 h-10" /> :
                                            <ShieldCheck className="w-10 h-10" />}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Scan Complete: {businessName}
                                </h3>

                                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 font-mono text-sm">
                                    <span className="text-gray-400 uppercase tracking-tighter">AI Search Risk:</span>
                                    <span className={`font-black uppercase tracking-widest ${risk === 'high' ? 'text-red-500' :
                                        risk === 'medium' ? 'text-yellow-500' :
                                            'text-green-500'
                                        }`}>
                                        {risk}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm mb-8 max-w-md">
                                    {risk === 'high' ?
                                        "ChatGPT and Gemini are failing to associate your brand with high-intent search queries. You are currently invisible to the conversational web." :
                                        risk === 'medium' ?
                                            "Limited semantic presence detected. You are inconsistently cited in AI results, leading to lost lead opportunities." :
                                            "Solid foundation detected, but your competitors are still out-ranking you in deep-reasoning LLM queries."
                                    }
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <Button className="w-full py-4" href="#contact">
                                        Fix My AI Identity
                                    </Button>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold"
                                    >
                                        Run New Scan
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};