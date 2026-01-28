import React, { useState } from 'react';
import {
    Sparkles,
    Heart,
    User,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    Thermometer,
    Zap,
    Target
} from 'lucide-react';
import { Button } from './Button';

interface ConsultantData {
    goal: string;
    timeline: string;
    experience: string;
    concerns: string[];
    name: string;
    email: string;
    phone: string;
}

export const MedSpaConsultant: React.FC = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<ConsultantData>({
        goal: '',
        timeline: '',
        experience: '',
        concerns: [],
        name: '',
        email: '',
        phone: ''
    });

    const updateData = (field: keyof ConsultantData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const totalSteps = 5;

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-primary-600 -translate-y-1/2 z-0 transition-all duration-500"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
                {[1, 2, 3, 4, 5].map((s) => (
                    <div
                        key={s}
                        className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${s <= step ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                            }`}
                    >
                        {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                    </div>
                ))}
            </div>

            <div className="min-h-[400px]">
                {/* Step 1: Goal */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">What is your aesthetic goal?</h2>
                        <p className="text-gray-500 mb-8 text-lg">Select the area you'd like to focus on for your aesthetic journey.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { id: 'skin', label: 'Skin Rejuvenation', icon: Sparkles, desc: 'Glow, texture & tone' },
                                { id: 'body', label: 'Body Contouring', icon: Target, desc: 'Sculpt & define' },
                                { id: 'injectables', label: 'Injectables', icon: Thermometer, desc: 'Refresh & smooth' },
                                { id: 'laser', label: 'Laser Treatments', icon: Zap, desc: 'Advanced precision' },
                                { id: 'wellness', label: 'Wellness', icon: Heart, desc: 'Inner & outer health' },
                                { id: 'other', label: 'Custom Plan', icon: User, desc: 'Discuss with expert' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        updateData('goal', item.id);
                                        setStep(2);
                                    }}
                                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${data.goal === item.id ? 'border-primary-600 bg-primary-50/50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <item.icon className="w-10 h-10 mb-4 text-primary-600" />
                                    <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Timeline */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Timing & Urgency</h2>
                        <p className="text-gray-500 mb-8 text-lg">When would you like to see your results?</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { id: 'asap', label: 'ASAP', desc: 'Ready to start now' },
                                { id: '3months', label: 'Within 3 Months', desc: 'Preparing for an event' },
                                { id: 'planning', label: 'Just Planning', desc: 'Gathering information' },
                            ].map((time) => (
                                <button
                                    key={time.id}
                                    onClick={() => updateData('timeline', time.id)}
                                    className={`p-8 rounded-xl border-2 text-center transition-all ${data.timeline === time.id ? 'border-primary-600 bg-primary-50/50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <h4 className="font-bold text-xl mb-2">{time.label}</h4>
                                    <p className="text-sm text-gray-500">{time.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Experience */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Previous Experience</h2>
                        <p className="text-gray-500 mb-8 text-lg">Have you had professional aesthetic treatments before?</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { id: 'regular', label: 'Yes, Regularly', desc: 'I have a routine' },
                                { id: 'sometimes', label: 'Yes, Long Ago', desc: 'Been a while' },
                                { id: 'never', label: 'Never', desc: 'First timer' },
                            ].map((exp) => (
                                <button
                                    key={exp.id}
                                    onClick={() => updateData('experience', exp.id)}
                                    className={`p-6 rounded-xl border-2 text-left transition-all ${data.experience === exp.id ? 'border-primary-600 bg-primary-50/50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <h4 className="font-bold">{exp.label}</h4>
                                    <p className="text-xs text-gray-500">{exp.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Contact */}
                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personalize Your Plan</h2>
                        <p className="text-gray-500 mb-8 text-lg">Where should we send your customized aesthetic blueprint?</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Full Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-600 transition-all outline-none"
                                    placeholder="Jane Smith"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-600 transition-all outline-none"
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                    <div className="text-center animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Sparkles className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Glow-Up Plan is Ready!</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Fantastic! We've analyzed your goals. A consultant will reach out via **{data.email}** to schedule your comprehensive assessment.
                        </p>
                        <div className="bg-primary-50 rounded-2xl p-8 text-left max-w-xl mx-auto mb-8 border border-primary-100">
                            <h4 className="font-bold text-primary-900 mb-4 flex items-center">
                                <Target className="w-5 h-5 mr-2" />
                                Custom Analysis:
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex justify-between"><span>Focus Area:</span> <span className="font-bold capitalize">{data.goal.replace('-', ' ')}</span></li>
                                <li className="flex justify-between"><span>Priority:</span> <span className="font-bold capitalize">{data.timeline}</span></li>
                                <li className="flex justify-between"><span>Status:</span> <span className="font-bold">{data.experience === 'never' ? 'New Patient' : 'Returning Patient'}</span></li>
                            </ul>
                        </div>
                        <Button size="lg" onClick={() => window.location.reload()}>Return to Gallery</Button>
                    </div>
                )}
            </div>

            {/* Navigation */}
            {step < 5 && (
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="flex items-center text-gray-400 hover:text-primary-600 font-bold transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            PREVIOUS
                        </button>
                    ) : <div></div>}

                    <Button
                        onClick={() => setStep(step + 1)}
                        disabled={(step === 1 && !data.goal) || (step === 2 && !data.timeline) || (step === 3 && !data.experience) || (step === 4 && (!data.name || !data.email))}
                    >
                        {step === 4 ? 'GENERATE MY PLAN' : 'CONTINUE'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            )}
        </div>
    );
};
