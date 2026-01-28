import React, { useState } from 'react';
import {
    Hammer,
    Wind,
    Utensils,
    Home as HomeIcon,
    Layers,
    Mountain,
    Ruler,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
} from 'lucide-react';
import { Button } from './Button';

interface EstimatorData {
    trade: string;
    projectScale: string;
    urgency: string;
    details: string;
    name: string;
    email: string;
    phone: string;
}

const trades = [
    { id: 'kitchen-bath', label: 'Kitchen & Bath', icon: Utensils, desc: 'Full remodels & upgrades' },
    { id: 'hvac', label: 'HVAC', icon: Wind, desc: 'Heating, cooling & air quality' },
    { id: 'decks', label: 'Decks & Patios', icon: Layers, desc: 'Outdoor living spaces' },
    { id: 'basement', label: 'Basement Finishing', icon: HomeIcon, desc: 'Expand your living area' },
    { id: 'hardscape', label: 'Hardscaping', icon: Mountain, desc: 'Stone, pavers & retaining walls' },
    { id: 'general', label: 'General Remodeling', icon: Hammer, desc: 'Additions & structural work' },
];

export const ConstructionEstimator: React.FC = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<EstimatorData>({
        trade: '',
        projectScale: '',
        urgency: '',
        details: '',
        name: '',
        email: '',
        phone: ''
    });

    const updateData = (field: keyof EstimatorData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const totalSteps = 4;

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Select Your Trade</h2>
                        <p className="text-gray-500 mb-8 text-lg">What type of project are you planning?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trades.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        updateData('trade', item.id);
                                        setStep(2);
                                    }}
                                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${data.trade === item.id ? 'border-primary-600 bg-primary-50/10' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <item.icon className="w-10 h-10 mb-4 text-primary-600" />
                                    <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Scope</h2>
                        <p className="text-gray-500 mb-8 text-lg">Help us understand the size and urgency.</p>
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Estimated Budget / Scale</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {['Minor Repair', '$5k - $15k', '$15k - $50k', '$50k+'].map((scale) => (
                                        <button
                                            key={scale}
                                            onClick={() => updateData('projectScale', scale)}
                                            className={`py-4 rounded-xl border-2 font-bold transition-all ${data.projectScale === scale ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-100 hover:border-gray-300'
                                                }`}
                                        >
                                            {scale}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Timeline</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {['Emergency', 'Within 2 Weeks', '1-3 Months', 'Just Inquiry'].map((urgency) => (
                                        <button
                                            key={urgency}
                                            onClick={() => updateData('urgency', urgency)}
                                            className={`py-4 rounded-xl border-2 font-bold transition-all ${data.urgency === urgency ? 'border-primary-600 bg-primary-50 text-primary-600' : 'border-gray-100 hover:border-gray-300'
                                                }`}
                                        >
                                            {urgency}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Details</h2>
                        <p className="text-gray-500 mb-8 text-lg">Where should we send your custom HPA preliminary quote?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Full Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-600 transition-all outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-600 transition-all outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Phone Number</label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => updateData('phone', e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-600 transition-all outline-none"
                                    placeholder="(555) 000-0000"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="text-center animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary-200">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Site Analysis Initiated</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Thank you, **{data.name.split(' ')[0]}**. We've received your **{data.trade.replace('-', ' ')}** inquiry. Our HPA system is now running a preliminary cost analysis for a **{data.projectScale}** project.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 text-left max-w-xl mx-auto mb-8 border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="bg-primary-100 text-primary-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-tighter">Priority: {data.urgency}</span>
                            </div>
                            <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                                <Ruler className="w-5 h-5 mr-2 text-primary-600" />
                                Preliminary Scope Summary:
                            </h4>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-500 font-medium">Primary Trade:</span>
                                    <span className="font-bold text-secondary-900 capitalize italic">{data.trade.replace('-', ' ')}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-500 font-medium">Estimated Scale:</span>
                                    <span className="font-bold text-secondary-900">{data.projectScale}</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-500 font-medium">Project ID:</span>
                                    <span className="font-mono text-xs font-bold text-primary-600 tracking-widest uppercase">#{Math.random().toString(36).substr(2, 9)}</span>
                                </div>
                            </div>
                        </div>
                        <Button size="lg" onClick={() => window.location.reload()}>Return to Hub</Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            {/* Progress Bar */}
            {step < 4 && (
                <div className="flex justify-between mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-primary-600 -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                        style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    ></div>
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 font-bold ${s <= step ? 'bg-primary-600 text-white scale-110' : 'bg-gray-100 text-gray-400'
                                }`}
                        >
                            {s < step ? <CheckCircle className="w-5 h-5" /> : s}
                        </div>
                    ))}
                </div>
            )}

            <div className="min-h-[400px]">
                {renderStep()}
            </div>

            {/* Navigation */}
            {step < 4 && (
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
                        disabled={
                            (step === 1 && !data.trade) ||
                            (step === 2 && (!data.projectScale || !data.urgency)) ||
                            (step === 3 && (!data.name || !data.email || !data.phone))
                        }
                    >
                        {step === 3 ? 'GENERATE ESTIMATE' : 'CONTINUE'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            )}
        </div>
    );
};
