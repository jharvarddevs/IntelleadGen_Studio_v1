import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Zap, Calendar, Search } from 'lucide-react';

interface Notification {
    id: number;
    location: string;
    action: string;
    icon: React.ReactNode;
    time: string;
}

const locations = [
    "Philadelphia, PA",
    "Horsham, PA",
    "Cherry Hill, NJ",
    "Blue Bell, PA",
    "Conshohocken, PA",
    "King of Prussia, PA",
    "Yardley, PA",
    "Newtown, PA",
    "Doylestown, PA",
    "Ambler, PA"
];

const actions = [
    { text: "booked a Discovery Call", icon: <Calendar className="w-4 h-4 text-primary-500" /> },
    { text: "requested a Free Website Audit", icon: <Search className="w-4 h-4 text-primary-500" /> },
    { text: "started an AI Readiness Scorecard", icon: <Zap className="w-4 h-4 text-primary-500" /> },
    { text: "viewed the MedSpa Automation Demo", icon: <Users className="w-4 h-4 text-primary-500" /> },
    { text: "used the Construction ROI Calculator", icon: <Zap className="w-4 h-4 text-primary-500" /> }
];

export const VisitorTrustNotification: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

    const generateNotification = () => {
        const location = locations[Math.floor(Math.random() * locations.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];

        const newNotification: Notification = {
            id: Date.now(),
            location,
            action: action.text,
            icon: action.icon,
            time: "just now"
        };

        setCurrentNotification(newNotification);
        setIsVisible(true);

        // Hide after 6 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 6000);
    };

    useEffect(() => {
        // Initial delay
        const initialTimer = setTimeout(() => {
            generateNotification();
        }, 8000);

        // Repeat every 20-35 seconds
        const interval = setInterval(() => {
            generateNotification();
        }, Math.random() * (35000 - 20000) + 20000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[60] pointer-events-none sm:block hidden">
            <AnimatePresence>
                {isVisible && currentNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
                        className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-start space-x-4 max-w-[320px] pointer-events-auto group hover:border-primary-500/30 transition-colors"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                                {currentNotification.icon}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full animate-pulse"></div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1 mb-0.5">
                                <MapPin className="w-3 h-3 text-gray-500" />
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                    {currentNotification.location}
                                </span>
                            </div>
                            <p className="text-[13px] text-white leading-tight font-medium">
                                Someone <span className="text-primary-400">{currentNotification.action}</span>
                            </p>
                            <span className="text-[10px] text-gray-600 font-medium mt-1 inline-block">
                                {currentNotification.time}
                            </span>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-600 hover:text-white transition-colors"
                        >
                            <Zap className="w-3 h-3 rotate-45 opacity-20 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
