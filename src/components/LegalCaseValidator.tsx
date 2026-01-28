import React, { useState } from 'react';
import {
    Scale,
    Gavel,
    ShieldCheck,
    Briefcase,
    FileText,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    AlertCircle,
    Search
} from 'lucide-react';
import { Button } from './Button';

interface CaseValidatorData {
    practiceArea: string;
    incidentDate: string;
    goal: string;
    description: string;
    name: string;
    email: string;
    phone: string;
}

export const LegalCaseValidator: React.FC = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<CaseValidatorData>({
        practiceArea: '',
        incidentDate: '',
        goal: '',
        description: '',
        name: '',
        email: '',
        phone: ''
    });

    const updateData = (field: keyof CaseValidatorData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const totalSteps = 5;

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-secondary-900 -translate-y-1/2 z-0 transition-all duration-500"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
                {[1, 2, 3, 4, 5].map((s) => (
                    <div
                        key={s}
                        className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${s <= step ? 'bg-secondary-900 text-white' : 'bg-gray-200 text-gray-500'
                            }`}
                    >
                        {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                    </div>
                ))}
            </div>

            <div className="min-h-[400px]">
                {/* Step 1: Practice Area */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Identify Your Practice Area</h2>
                        <p className="text-gray-500 mb-8 text-lg">Select the area of law that best describes your situation.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { id: 'injury', label: 'Personal Injury', icon: ShieldCheck, desc: 'Accidents & injuries' },
                                { id: 'estate', label: 'Estate Planning', icon: FileText, desc: 'Wills, trusts & probate' },
                                { id: 'family', label: 'Family Law', icon: Gavel, desc: 'Divorce & custody' },
                                { id: 'business', label: 'Business Lit.', icon: Briefcase, desc: 'Contract disputes' },
                                { id: 'criminal', label: 'Criminal Defense', icon: Scale, desc: 'DUI & legal defense' },
                                { id: 'other', label: 'Other Matters', icon: Search, desc: 'General inquiries' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        updateData('practiceArea', item.id);
                                        setStep(2);
                                    }}
                                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${data.practiceArea === item.id ? 'border-secondary-900 bg-secondary-50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <item.icon className="w-10 h-10 mb-4 text-secondary-900" />
                                    <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Date */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">When did this occur?</h2>
                        <p className="text-gray-500 mb-8 text-lg">Statute of limitations may apply. Please provide an estimate.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { id: 'recent', label: 'Within 30 Days', desc: 'Recent incident' },
                                { id: 'mid', label: '1-6 Months Ago', desc: 'Slightly delayed' },
                                { id: 'old', label: 'Over 6 Months', desc: 'Aged matter' },
                            ].map((time) => (
                                <button
                                    key={time.id}
                                    onClick={() => updateData('incidentDate', time.id)}
                                    className={`p-8 rounded-xl border-2 text-center transition-all ${data.incidentDate === time.id ? 'border-secondary-900 bg-secondary-50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <h4 className="font-bold text-xl mb-2">{time.label}</h4>
                                    <p className="text-sm text-gray-500">{time.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Goal */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Desired Outcome</h2>
                        <p className="text-gray-500 mb-8 text-lg">What is your primary goal for seeking legal counsel?</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { id: 'comp', label: 'Compensation', desc: 'Recovery of damages' },
                                { id: 'advice', label: 'Legal Advice', desc: 'Strategic consultation' },
                                { id: 'dispute', label: 'Dispute Res.', desc: 'Mediation / Litigation' },
                            ].map((g) => (
                                <button
                                    key={g.id}
                                    onClick={() => updateData('goal', g.id)}
                                    className={`p-6 rounded-xl border-2 text-left transition-all ${data.goal === g.id ? 'border-secondary-900 bg-secondary-50' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <h4 className="font-bold">{g.label}</h4>
                                    <p className="text-xs text-gray-500">{g.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Contact */}
                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Secure Consultation</h2>
                        <p className="text-gray-500 mb-8 text-lg">Your information is handled with absolute confidentiality.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Full Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-secondary-900 transition-all outline-none"
                                    placeholder="Michael Ross"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-secondary-900 transition-all outline-none"
                                    placeholder="mross@example.com"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                    <div className="text-center animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Scale className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Analysis Initiated.</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Understood. We've tagged your case for immediate review. A senior partner or legal strategist will reach out to **{data.name}** within 4 hours.
                        </p>
                        <div className="bg-secondary-50 rounded-2xl p-8 text-left max-w-xl mx-auto mb-8 border border-secondary-100">
                            <h4 className="font-bold text-secondary-900 mb-4 flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                Case File #LG-{Math.floor(Math.random() * 9000) + 1000}:
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex justify-between"><span>Practice Area:</span> <span className="font-bold capitalize">{data.practiceArea}</span></li>
                                <li className="flex justify-between"><span>Timeline:</span> <span className="font-bold capitalize">{data.incidentDate.replace('-', ' ')}</span></li>
                                <li className="flex justify-between"><span>Primary Goal:</span> <span className="font-bold capitalize">{data.goal.replace('-', ' ')}</span></li>
                            </ul>
                        </div>
                        <Button size="lg" onClick={() => window.location.reload()}>Close Case File</Button>
                    </div>
                )}
            </div>

            {/* Navigation */}
            {step < 5 && (
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="flex items-center text-gray-400 hover:text-secondary-900 font-bold transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            PREVIOUS
                        </button>
                    ) : <div></div>}

                    <Button
                        onClick={() => setStep(step + 1)}
                        disabled={(step === 1 && !data.practiceArea) || (step === 2 && !data.incidentDate) || (step === 3 && !data.goal) || (step === 4 && (!data.name || !data.email))}
                    >
                        {step === 4 ? 'SUBMIT CASE FOR REVIEW' : 'CONTINUE'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            )}
        </div>
    );
};
