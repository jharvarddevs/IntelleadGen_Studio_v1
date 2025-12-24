import React from 'react';
import { Button } from '../components/Button';
import { Section, SectionHeader } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { SuccessRoadmap } from '../components/SuccessRoadmap';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { SEO } from '../components/SEO';
import {
  Globe,
  Bot,
  TrendingUp,
  MapPin,
  Filter,
  Zap,
  CheckCircle,
  ArrowRight,
  Code2,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Expert AI automation, local SEO, and custom website design services for medspas, law firms, and high-income business owners."
        canonical="https://intelleadgen.io/studio#services"
      />
      <FloatingActionButton
        icon={MessageCircle}
        href="#contact"
        label="Book Your Discovery Call"
        position="bottom-right"
        showAfterScroll={300}
      />
      <div className="pt-0">
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-8 md:pt-12 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions that transform how you do business online
            </p>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white border-2 border-primary-300 rounded-xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-secondary-900">Looking for Self-Service?</h3>
                      <p className="text-sm text-secondary-600">Try our intelleadgen.io platform for DIY lead generation</p>
                    </div>
                  </div>
                  <a
                    href="https://intelleadgen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-secondary-800 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 1: Foundation */}
        <Section background="gray">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b-2 border-gray-200 mb-16">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">
                Phase 1: Authority Foundation
              </span>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Fix the Foundation. Stop the Bleeding.</h2>
              <p className="text-lg text-gray-600">
                Strategic architecture and local SEO dominance designed to recapture lost revenue and establish
                immediate market authority.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic text-blue-800 text-sm">
              "We took our site from page 4 to page 1 and tripled our lead volume in 90 days."
            </div>
          </div>

          {/* Website Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h2 className="mb-6">Website Design & Development</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Your website is your digital storefront. We build custom sites that are beautiful,
                blazing fast, and built to convert visitors into paying customers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom design tailored to your brand',
                  'Mobile-responsive across all devices',
                  'Lightning-fast load times (under 2 seconds)',
                  'Built on modern JAMstack architecture',
                  'Easy content management',
                  'Secure hosting included',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 bg-secondary-100 rounded-2xl p-8 flex items-center justify-center h-96">
              <div className="text-center text-secondary-400">
                <Globe className="w-20 h-20 mx-auto mb-4" />
                <p>Website Preview</p>
              </div>
            </div>
          </div>

          {/* Local SEO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="mb-6">Local SEO Setup & Optimization</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Show up when customers search for businesses like yours. We optimize every element of
                your online presence to dominate local search results.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Complete on-page SEO optimization',
                  'Local keyword research and targeting',
                  'Schema markup implementation',
                  'Mobile optimization',
                  'Site speed optimization',
                  'Ongoing performance monitoring',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" href="#contact">
                Boost Your Rankings
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 bg-secondary-100 rounded-2xl p-8 flex items-center justify-center h-96">
              <div className="text-center text-secondary-400">
                <TrendingUp className="w-20 h-20 mx-auto mb-4" />
                <p>SEO Analytics</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Phase 2: Growth */}
        <Section background="white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b-2 border-gray-200 mb-16">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-widest mb-4">
                Phase 2: High-Efficiency Growth
              </span>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Scale Output. Not Overhead.</h2>
              <p className="text-lg text-gray-600">
                Advanced AI automation and conversion funnels that replace manual grunt work with
                self-optimizing revenue machines.
              </p>
            </div>
            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 italic text-amber-800 text-sm">
              "Automation saved us 20 hours a week and ensured not a single lead ever slipped through the cracks again."
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-secondary-100 rounded-2xl p-8 flex items-center justify-center h-96">
              <div className="text-center text-secondary-400">
                <Bot className="w-20 h-20 mx-auto mb-4" />
                <p>Automation Dashboard</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h2 className="mb-6">AI Workflow Automation</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Stop wasting time on repetitive tasks. Our AI-powered automation handles the busywork
                so you can focus on what matters: growing your business.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Automated contact form follow-ups',
                  'AI-powered appointment scheduling',
                  'Lead qualification and routing',
                  'Email sequence automation',
                  'Client onboarding workflows',
                  'Custom integrations with your existing tools',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" href="#contact">
                Automate Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Section>

        {/* Phase 3: Domination */}
        <Section background="dark">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b-2 border-primary-800 mb-16">
            <div className="max-w-xl text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-bold uppercase tracking-widest mb-4 border border-primary-500/20">
                Phase 3: Market Domination
              </span>
              <h2 className="text-4xl font-black text-white mb-4">Proprietary Assets. Absolute Authority.</h2>
              <p className="text-lg text-primary-300">
                Custom AI infrastructure and enterprise-scale digital assets that turn your business
                into an untouchable industry leader.
              </p>
            </div>
            <div className="p-8 bg-primary-500/5 rounded-3xl border border-primary-500/10 italic text-primary-400 text-sm">
              "Building our proprietary AI intake system was the turning point. We no longer compete on price; we compete on technology."
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 text-left">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-white mb-6">Enterprise AI & Custom SaaS</h2>
              <p className="text-lg text-primary-300 mb-6 leading-relaxed">
                We build proprietary AI assets and custom software that transform your business into
                an untouchable market leader.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom AI Agent Development',
                  'Proprietary SaaS Tool Incubation',
                  'Enterprise-Wide AI Integration',
                  'Nationwide Authority Architecture',
                  'Custom LLM Fine-Tuning',
                  'Predictive Revenue Systems',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" href="#contact">
                Architect Your Domination
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 bg-primary-900/50 rounded-2xl p-8 border border-primary-800 flex items-center justify-center h-96">
              <div className="text-center text-primary-500">
                <Sparkles className="w-20 h-20 mx-auto mb-4 animate-pulse" />
                <p className="font-bold">Enterprise Logic Engine</p>
              </div>
            </div>
          </div>
        </Section>

        <Section background="gray" id="additional-services">
          <SectionHeader
            title="Additional Services"
            subtitle="Complete solutions for your digital presence"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Code2}
              title="Custom Web Applications"
              description="Need more than a website? We build custom SaaS platforms, web apps, Chrome extensions, and API integrations tailored to your unique business needs."
            />
            <ServiceCard
              icon={MapPin}
              title="Google Business Profile Management"
              description="We optimize and manage your Google Business Profile to increase visibility in local search and Google Maps, driving more foot traffic and calls to your business."
            />
            <ServiceCard
              icon={Filter}
              title="Funnel Building"
              description="From lead magnets to client onboarding, we build conversion-focused funnels that turn visitors into customers. Includes quizzes, landing pages, and email sequences."
            />
            <ServiceCard
              icon={Zap}
              title="Performance Optimization"
              description="Speed matters. We audit and optimize your existing site for maximum performance, improving load times, Core Web Vitals, and overall user experience."
            />
            <ServiceCard
              icon={Bot}
              title="Chatbot Integration"
              description="Add an AI-powered chatbot to your site that answers questions, qualifies leads, and books appointments 24/7, even when you're asleep."
            />
          </div>
        </Section>

        <SuccessRoadmap />
        <Section id="process">
          <SectionHeader
            title="Our Process"
            subtitle="Simple, transparent, and designed for busy business owners"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We learn about your business, goals, and challenges in a 30-minute call.',
              },
              {
                step: '02',
                title: 'Strategy & Design',
                description: 'We create a custom plan and design that aligns with your brand and goals.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your site using cutting-edge technology and best practices.',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We launch your site and provide ongoing support to ensure success.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section background="dark">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
              Every project starts with a conversation. Book your free discovery call and let's
              discuss how we can help your business thrive online.
            </p>
            <Button size="lg" variant="secondary" href="#contact">
              Book Your Free Discovery Call
            </Button>
          </div>
        </Section>
      </div >
    </>
  );
};
