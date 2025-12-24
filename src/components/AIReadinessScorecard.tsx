import React, { useState } from 'react';
import { Button } from './Button';
import { ClipboardCheck, Sparkles, AlertCircle, CheckCircle2, ArrowRight, RefreshCcw, Share2, Check } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "How long until a new lead gets a human response?",
        options: [
            { text: "Under 5 minutes", score: 10, feedback: "Excellent! You're in the top 1%." },
            { text: "5-30 minutes", score: 7, feedback: "Good, but you're still losing ~15% of leads." },
            { text: "1-4 hours", score: 4, feedback: "Critical. Competitors are likely stealing your leads." },
            { text: "Next day or longer", score: 0, feedback: "Severe revenue leakage. Immediate automation needed." }
        ]
    },
    {
        id: 2,
        question: "How are your appointments booked?",
        options: [
            { text: "Fully automated (no human needed)", score: 10, feedback: "Max efficiency. Great job!" },
            { text: "Hybrid (online request + manual call)", score: 5, feedback: "Substantial friction. Automation can double bookings." },
            { text: "All manual (phone/email back-and-forth)", score: 0, feedback: "Massive bottleneck. You're bleeding potential cases." }
        ]
    },
    {
        id: 3,
        question: "Is your lead data centralized in a CRM?",
        options: [
            { text: "Yes, fully automated sync", score: 10, feedback: "Perfect data visibility." },
            { text: "Partial / Manual entry", score: 5, feedback: "Inconsistent data. High risk of human error." },
            { text: "No, we use spreadsheets/email", score: 0, feedback: "Strategic blindness. Automation ROI will be exponential here." }
        ]
    },
    {
        id: 4,
        question: "Do you use AI for lead qualification?",
        options: [
            { text: "Yes, automated screening", score: 10, feedback: "Strategic leverage at its best." },
            { text: "No, we talk to everyone", score: 0, feedback: "You're wasting 40% of your staff's time on low-value leads." }
        ]
    }
];

export const AIReadinessScorecard: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = `I just scored ${calculateFinalScore()}% on the IntelleadGen AI Readiness Audit! 🚀 Check your efficiency leakage here: ${window.location.href}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleOptionSelect = (score: number) => {
        const newScores = [...scores, score];
        setScores(newScores);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const calculateFinalScore = () => {
        const total = scores.reduce((a, b) => a + b, 0);
        const max = questions.length * 10;
        return Math.round((total / max) * 100);
    };

    const getScoreCategory = (score: number) => {
        if (score >= 90) return { title: 'Elite Operator', color: 'text-green-600', bg: 'bg-green-50', message: 'You are highly efficient, but there are still edge-case optimizations that can drive an extra 10% in ROI.' };
        if (score >= 60) return { title: 'Strategic Improver', color: 'text-blue-600', bg: 'bg-blue-50', message: 'You have the basics down, but manual friction is capping your growth. Phase 2 Automation is your next step.' };
        return { title: 'High Leakage Risk', color: 'text-red-600', bg: 'bg-red-50', message: 'Your systems are costing you significant revenue every month. Immediate architectural overhaul is recommended.' };
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScores([]);
        setShowResults(false);
    };

    const finalScore = calculateFinalScore();
    const category = getScoreCategory(finalScore);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {!showResults ? (
                    <div className="p-8 md:p-12">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-primary-100 rounded-lg">
                                    <ClipboardCheck className="w-6 h-6 text-primary-600" />
                                </div>
                                <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">Step {currentStep + 1} of {questions.length}</span>
                            </div>
                            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-600 transition-all duration-500"
                                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                            {questions[currentStep].question}
                        </h3>

                        <div className="space-y-4">
                            {questions[currentStep].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(option.score)}
                                    className="w-full group text-left p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 flex items-center justify-between"
                                >
                                    <span className="text-lg font-medium text-gray-700 group-hover:text-primary-700">{option.text}</span>
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-primary-500 group-hover:bg-primary-500 flex items-center justify-center transition-all">
                                        <CheckCircle2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="p-8 md:p-12 text-center animate-fade-in">
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-sm mb-6 ${category.bg} ${category.color}`}>
                            <Sparkles className="w-4 h-4" />
                            <span>{category.title}</span>
                        </div>

                        <div className="relative inline-block mb-8">
                            <svg className="w-32 h-32 transform -rotate-90">
                                <circle
                                    className="text-gray-100"
                                    strokeWidth="8"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="58"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className={category.color.replace('text-', 'stroke-')}
                                    strokeWidth="8"
                                    strokeDasharray={364.4}
                                    strokeDashoffset={364.4 - (364.4 * finalScore) / 100}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="58"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black text-gray-900">{finalScore}%</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Your AI Readiness Audit</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                            {category.message}
                        </p>

                        <div className="bg-black text-white p-6 rounded-2xl mb-8 border border-primary-500/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-12 h-12" />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2">Official Benchmark</p>
                            <h4 className="text-xl font-bold mb-1">{category.title}</h4>
                            <p className="text-sm text-gray-400">Validated by IntelleadGen Studio Intelligence Hub</p>
                        </div>

                        <div className="text-left mb-10 max-w-md mx-auto">
                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center">
                                <span className="mr-3">Next 3 Elite Actions</span>
                                <div className="h-px flex-grow bg-gray-100"></div>
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">01</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Secure Your AI Identity (GEO)</p>
                                        <p className="text-xs text-gray-500 mt-1">Deploy structured data clusters to ensure ChatGPT and Gemini cite your brand as a market leader.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">02</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Plug Revenue Leakage</p>
                                        <p className="text-xs text-gray-500 mt-1">Implement a &lt;5-min automated response engine to stop leads from hiring competitors during the delay.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">03</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Automate the "Yes"</p>
                                        <p className="text-xs text-gray-500 mt-1">Deploy an autonomous appointment booking skill to remove human friction from your sales cycle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                            <button
                                onClick={handleCopy}
                                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-all font-bold text-sm"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                                <span>{copied ? 'Copied to Clipboard' : 'Share My Result'}</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            <button
                                onClick={resetQuiz}
                                className="flex items-center justify-center space-x-2 p-4 rounded-2xl border-2 border-gray-100 text-gray-500 hover:bg-gray-50 transition-all font-bold"
                            >
                                <RefreshCcw className="w-4 h-4" />
                                <span>Retake Audit</span>
                            </button>
                            <Button size="lg" className="w-full" href="#contact">
                                Get Strategy Blueprint
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>

                        <div className="pt-8 border-t border-gray-50 flex items-center justify-center space-x-2 text-xs text-gray-400">
                            <AlertCircle className="w-4 h-4" />
                            <span>Confidential Diagnosis for IntelleadGen Studio Clients</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
