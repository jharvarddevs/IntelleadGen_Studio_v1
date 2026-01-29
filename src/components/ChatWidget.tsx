import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Minus, Calendar, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hello! I'm the IntelleadGen Studio expert. How can I help you stop wasting ad spend and start converting more leads today?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && !isMinimized) {
            scrollToBottom();
        }
    }, [messages, isOpen, isMinimized]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const { data, error } = await supabase.functions.invoke('chat-assistant', {
                body: { messages: [...messages, userMessage] }
            });

            if (error) {
                console.error('[Chat Widget] Edge Function Error:', error);
                throw error;
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
        } catch (error: any) {
            console.error('[Chat Widget] Unexpected Error:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code,
                stack: error.stack
            });
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again or book a discovery call for expert advice."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickAction = (action: string) => {
        let query = "";
        if (action === 'pricing') query = "How much do your services cost?";
        if (action === 'audit') query = "Tell me more about the free website audit.";
        if (action === 'book') query = "I'd like to book a discovery call.";

        setInput(query);
        // Auto-send would be nice, but manual lets them edit
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-16 h-16 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-primary-100"
                aria-label="Open AI Assistant"
            >
                <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-600 rounded-full border-2 border-white animate-pulse"></div>

                {/* Tooltip */}
                <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-primary-800">
                    Ask our AI Expert
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black"></div>
                </div>
            </button>
        );
    }

    return (
        <div
            className={`fixed z-50 transition-all duration-500 ease-in-out
        ${isMinimized ? 'bottom-8 right-8 w-72' : 'bottom-8 right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh]'}
      `}
        >
            <div className="flex flex-col h-full bg-white rounded-2xl shadow-2xl border border-primary-200 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-black text-white">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-400/30">
                            <Bot className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold tracking-tight">Studio Expert</h3>
                            <div className="flex items-center space-x-1">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] text-primary-300 uppercase font-black tracking-widest">Always Active</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-primary-50/30">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                                >
                                    <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-2`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm
                      ${msg.role === 'user' ? 'bg-primary-600 text-white' : 'bg-black text-white'}
                    `}>
                                            {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                        </div>
                                        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-white text-secondary-800 border border-primary-100 rounded-tl-none'}
                    `}>
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start animate-fade-in">
                                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-2xl border border-primary-100 shadow-sm">
                                        <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                                        <span className="text-xs text-primary-500 font-medium italic">Expert is typing...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-6 py-3 bg-white border-t border-primary-100 flex flex-wrap gap-2">
                            <button
                                onClick={() => handleQuickAction('audit')}
                                className="text-xs font-bold px-3 py-1.5 bg-primary-50 text-black border border-primary-200 rounded-full hover:bg-primary-100 transition-colors flex items-center space-x-1"
                            >
                                <Search className="w-3 h-3" />
                                <span>Free Website Audit</span>
                            </button>
                            <button
                                onClick={() => handleQuickAction('pricing')}
                                className="text-xs font-bold px-3 py-1.5 bg-primary-50 text-black border border-primary-200 rounded-full hover:bg-primary-100 transition-colors flex items-center space-x-1"
                            >
                                <span>Pricing?</span>
                            </button>
                            <button
                                onClick={() => handleQuickAction('book')}
                                className="text-xs font-bold px-3 py-1.5 bg-black text-white rounded-full hover:bg-primary-800 transition-colors flex items-center space-x-1"
                            >
                                <Calendar className="w-3 h-3" />
                                <span>Book a Call</span>
                            </button>
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white border-t border-primary-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask a question..."
                                    className="w-full pl-4 pr-12 py-3 bg-primary-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black transition-all placeholder:text-primary-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className={`absolute right-2 p-2 rounded-lg transition-all
                    ${input.trim() && !isLoading ? 'bg-black text-white hover:scale-105 active:scale-95' : 'text-primary-300'}
                  `}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="mt-4 text-[10px] text-center text-primary-400 font-medium">
                                AI Expert may provide general estimates. Always book a Discovery Call for exact quotes.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
