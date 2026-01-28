import React, { useState } from 'react';
import { Shield, Home, CheckCircle, Ruler, AlertTriangle, CloudRain } from 'lucide-react';
import { Button } from './Button';

interface RoofingData {
    roofType: string;
    propertyAge: string;
    urgency: 'emergency' | 'repair' | 'replacement' | 'inspection';
    sqft: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export const RoofingEstimator: React.FC = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<RoofingData>({
        roofType: '',
        propertyAge: '',
        urgency: 'inspection',
        sqft: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">What's the current situation?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { id: 'emergency', label: 'Active Leak / Storm Damage', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
                                { id: 'repair', label: 'Minor Repair Needed', icon: CloudRain, color: 'text-blue-600', bg: 'bg-blue-50' },
                                { id: 'replacement', label: 'Full Replacement Quote', icon: Home, color: 'text-green-600', bg: 'bg-green-50' },
                                { id: 'inspection', label: 'Routine Inspection', icon: Shield, color: 'text-primary-600', bg: 'bg-primary-50' },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { setData({ ...data, urgency: item.id as any }); nextStep(); }}
                                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] ${data.urgency === item.id ? 'border-primary-600 bg-primary-50/10' : 'border-gray-100'}`}
                                >
                                    <item.icon className={`w-8 h-8 mb-4 ${item.color}`} />
                                    <h3 className="font-bold text-lg">{item.label}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Property Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Estimated Roof Area (sq. ft.)</label>
                                <div className="relative">
                                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="number"
                                        value={data.sqft}
                                        onChange={e => setData({ ...data, sqft: e.target.value })}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-600"
                                        placeholder="e.g. 2500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {['Asphalt Shingle', 'Metal', 'Tile', 'Flat / Rubber'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setData({ ...data, roofType: type })}
                                        className={`p-4 rounded-xl border-2 text-sm font-bold ${data.roofType === type ? 'border-primary-600 bg-primary-50/50' : 'border-gray-100'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" onClick={prevStep} className="flex-1">Back</Button>
                            <Button onClick={nextStep} className="flex-1" disabled={!data.sqft || !data.roofType}>Continue</Button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Where should we send the estimate?</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                placeholder="Property Address"
                                value={data.address}
                                onChange={e => setData({ ...data, address: e.target.value })}
                                className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-600"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                    className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-600"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={data.phone}
                                    onChange={e => setData({ ...data, phone: e.target.value })}
                                    className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-600"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={data.email}
                                onChange={e => setData({ ...data, email: e.target.value })}
                                className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-primary-600"
                            />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" onClick={prevStep} className="flex-1">Back</Button>
                            <Button onClick={nextStep} className="flex-1" disabled={!data.address || !data.name || !data.email}>Get Estimate</Button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Urgent Review Initiated</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            We've received your {data.urgency === 'emergency' ? 'EMERGENCY' : ''} roofing request for **{data.address}**.
                            {data.urgency === 'emergency' ? ' Our team has been alerted via priority SMS.' : ' We are running a satellite roof analysis now.'}
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl text-left max-w-md mx-auto mb-8 border border-gray-200">
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Preliminary Score</span>
                                <span className="text-primary-600 font-bold">READY FOR DISPATCH</span>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex justify-between text-sm"><span>Est. Area:</span> <span className="font-bold">{data.sqft} sqft</span></li>
                                <li className="flex justify-between text-sm"><span>Material:</span> <span className="font-bold">{data.roofType}</span></li>
                                <li className="flex justify-between text-sm"><span>Urgency:</span> <span className="font-bold capitalize text-red-600">{data.urgency}</span></li>
                            </ul>
                        </div>
                        <Button size="lg" onClick={() => window.location.reload()}>Return to Hub</Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 p-8 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center mb-1">
                            <Shield className="w-6 h-6 mr-3 text-primary-400" />
                            Roofing Claims & Quote System
                        </h2>
                        <p className="text-primary-100 text-sm">Instant satellite-assisted estimate and damage review.</p>
                    </div>
                    <div className="hidden sm:block">
                        <div className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm">
                            SATELLITE ENABLED
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12">
                {/* Step Indicator */}
                {step < 4 && (
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3].map(i => (
                            <div
                                key={i}
                                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-primary-600' : 'bg-gray-100'}`}
                            />
                        ))}
                    </div>
                )}

                <div className="min-h-[300px]">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
};
