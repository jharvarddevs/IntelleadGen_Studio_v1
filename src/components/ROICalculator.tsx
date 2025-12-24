import React, { useState, useEffect } from 'react';
import { TrendingDown, Clock, DollarSign, AlertTriangle, ArrowRight, Zap } from 'lucide-react';
import { Button } from './Button';

export const ROICalculator: React.FC = () => {
    const [monthlyTraffic, setMonthlyTraffic] = useState<string>('2000');
    const [avgCustomerValue, setAvgCustomerValue] = useState<string>('3000');
    const [monthlyAdSpend, setMonthlyAdSpend] = useState<string>('5000');
    const [showResults, setShowResults] = useState(false);

    // Calculate lost revenue based on industry benchmarks
    const calculateLostRevenue = () => {
        const traffic = parseInt(monthlyTraffic) || 0;
        const customerValue = parseInt(avgCustomerValue) || 0;
        const adSpend = parseInt(monthlyAdSpend) || 0;

        // Industry benchmarks for Medical/Legal:
        // - High CPC leads to high cost per acquisition if conversion is low
        // - Average conversion rate for high-ticket is often lower but value is higher

        const currentConversion = 0.01; // Poor conversion (1%)
        const potentialConversion = 0.035; // Optimized (3.5%)

        const currentRevenue = traffic * currentConversion * customerValue;
        const potentialRevenue = traffic * potentialConversion * customerValue;
        const lostRevenue = potentialRevenue - currentRevenue;

        // Ad waste calculation: 60% of leads lost to slow follow-up
        const adWaste = adSpend * 0.6;

        const yearlyLoss = lostRevenue * 12;
        const visitsLost = Math.floor(traffic * 0.53);
        const conversionsLost = Math.floor((potentialConversion - currentConversion) * traffic);

        return {
            monthlyLoss: Math.round(lostRevenue),
            yearlyLoss: Math.round(yearlyLoss),
            adWaste: Math.round(adWaste),
            visitsLost,
            conversionsLost,
            currentRevenue: Math.round(currentRevenue),
            potentialRevenue: Math.round(potentialRevenue)
        };
    };

    const results = calculateLostRevenue();

    useEffect(() => {
        if (monthlyTraffic && avgCustomerValue) {
            setShowResults(true);
        }
    }, [monthlyTraffic, avgCustomerValue]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden" id="calculator">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-red-500/20 mb-6">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-red-300 font-semibold">Ad Spend Waste Calculator</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        How Much Ad Spend Are You{' '}
                        <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                            Throwing Away?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Medical and Legal practices waste up to 60% of their ad budget on slow follow-up. Let's see your numbers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Input Section */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Your Numbers</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                    Monthly Google/Meta Ad Spend
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                                        $
                                    </div>
                                    <input
                                        type="number"
                                        value={monthlyAdSpend}
                                        onChange={(e) => setMonthlyAdSpend(e.target.value)}
                                        placeholder="5000"
                                        className="w-full pl-10 pr-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500 text-lg font-semibold"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                    Monthly Website Traffic
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={monthlyTraffic}
                                        onChange={(e) => setMonthlyTraffic(e.target.value)}
                                        placeholder="2000"
                                        className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500 text-lg font-semibold"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                        visitors/mo
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                    Average Case/Patient Value
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                                        $
                                    </div>
                                    <input
                                        type="number"
                                        value={avgCustomerValue}
                                        onChange={(e) => setAvgCustomerValue(e.target.value)}
                                        placeholder="3000"
                                        className="w-full pl-10 pr-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500 text-lg font-semibold"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Industry Benchmarks:</h4>
                                <ul className="space-y-2 text-xs text-gray-500">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-400">•</span>
                                        <span>60% of leads are lost if not contacted in 5 minutes</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-400">•</span>
                                        <span>Current conversion rate: 1% (industry average for slow follow-up)</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-400">•</span>
                                        <span>Potential conversion rate: 3.5%+ (with AI response automation)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        {showResults ? (
                            <>
                                {/* Main Loss Card */}
                                <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-orange-700 rounded-2xl p-8 md:p-10 shadow-2xl border border-red-500/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <TrendingDown className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">You're Losing</h3>
                                        </div>

                                        <div className="mb-6">
                                            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-2">
                                                {formatCurrency(results.monthlyLoss)}
                                            </div>
                                            <p className="text-2xl text-red-100 font-semibold uppercase tracking-wider">MONTHLY REVENUE LOST</p>
                                        </div>

                                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 mb-6 border border-red-500/30">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                                    <span className="text-red-200 text-sm font-bold uppercase tracking-widest">Monthly Ad Waste</span>
                                                </div>
                                                <span className="text-red-500 text-3xl font-black">{formatCurrency(results.adWaste)}</span>
                                            </div>
                                            <p className="text-xs text-red-200 opacity-80 leading-relaxed">
                                                *Based on 60% lead loss due to industry-average follow-up delays (5+ mins). You are paying for clicks that never reach your intake desk.
                                            </p>
                                        </div>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                                            <div className="flex items-center justify-between">
                                                <span className="text-red-100 text-sm font-medium uppercase tracking-widest">Annual Potential Loss</span>
                                                <span className="text-white text-2xl font-bold">{formatCurrency(results.yearlyLoss)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Clock className="w-5 h-5 text-orange-400" />
                                            <h4 className="text-sm font-semibold text-gray-300">Visitors Lost</h4>
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">{formatNumber(results.visitsLost)}</div>
                                        <p className="text-xs text-gray-400">bounce due to slow load</p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <DollarSign className="w-5 h-5 text-red-400" />
                                            <h4 className="text-sm font-semibold text-gray-300">Lost Conversions</h4>
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">{formatNumber(results.conversionsLost)}</div>
                                        <p className="text-xs text-gray-400">customers per month</p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-center">
                                    <h4 className="text-2xl font-bold text-white mb-3">Ready to Stop the Bleeding?</h4>
                                    <p className="text-primary-100 mb-6">
                                        Let's fix your website and start capturing that lost revenue.
                                    </p>
                                    <Button size="lg" variant="secondary" href="#contact">
                                        Get Your Free Audit
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 text-center">
                                <Zap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400 text-lg">
                                    Enter your numbers to see how much you're losing
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
