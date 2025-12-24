import React from 'react';
import { Button } from '../components/Button';
import { Section, SectionHeader } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { LeadMagnetSection } from '../components/LeadMagnetSection';
import { ROICalculator } from '../components/ROICalculator';
import { SuccessRoadmap } from '../components/SuccessRoadmap';
import { SEO } from '../components/SEO';
import { Zap, TrendingUp, Palette, Clock, Award, Users, ArrowRight, CheckCircle, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { GEOValidator } from '../components/GEOValidator';
import { HPAPhaseShift } from '../components/HPAPhaseShift';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Boutique web development and AI automation for high-income business owners. We build beautiful, AI-powered websites that generate leads and boost local SEO."
        canonical="https://intelleadgen.io/studio"
      />
      <FloatingActionButton
        icon={MessageCircle}
        href="#contact"
        label="Book a Discovery Call"
        position="bottom-right"
        showAfterScroll={300}
      />
      <div className="pt-0">
        <section className="relative bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden pt-8 md:pt-12 pb-20 md:pb-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="magic-gradient-vignette"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Zap className="w-4 h-4" />
                <span>Boutique Web Development & AI Automation</span>
              </div>
              <div className="relative mb-6">
                <h1 className="animate-slide-up text-balance relative z-10">
                  Stop Wasting Your Ad Spend. <br className="hidden sm:inline" />Convert More Leads.
                </h1>

                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute top-0 left-[10%] animate-float-slow opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#61DAFB]">⚛</span>
                    </div>
                  </div>

                  <div className="absolute top-[20%] right-[15%] animate-float-delayed opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#38BDF8]">⚡</span>
                    </div>
                  </div>

                  <div className="absolute bottom-[10%] left-[15%] animate-float-slow-delayed opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#3ECF8E]">🗄️</span>
                    </div>
                  </div>

                  <div className="absolute bottom-[20%] right-[10%] animate-float opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">🤖</span>
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-[5%] animate-float-delayed opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#000000]">▲</span>
                    </div>
                  </div>

                  <div className="absolute top-[50%] right-[8%] animate-float-slow opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#06B6D4]">🎨</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-secondary-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up">
                We build high-performance lead systems for Medical & Legal practices that stop the "leaky bucket" and turn traffic into profit.
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Button size="lg" href="#contact">
                  Book a Discovery Call
                </Button>
                <Button size="lg" variant="outline-light" href="#services">
                  Explore Services
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-secondary-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Fast-Loading Sites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>AI Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Local SEO Optimized</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <Section id="the-problem">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>The "Leaky Bucket" Problem</span>
            </div>
            <h2 className="mb-6">You're Paying for Clicks. <br />Are You Actually Converting Them?</h2>
            <p className="text-lg text-secondary-600 mb-12">
              The average MedSpa or Law Firm loses <strong>60% of their leads</strong> due to slow follow-up and confusing websites.
              If a lead doesn't get a response in 5 minutes, your competition already has them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">9+ Seconds</div>
                <p className="text-sm font-medium text-secondary-900 mb-1">Slow Load Time</p>
                <p className="text-xs text-secondary-500">Visitors leave before the page even loads. Complete waste of ad budget.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">6+ Hours</div>
                <p className="text-sm font-medium text-secondary-900 mb-1">Human Delay</p>
                <p className="text-xs text-secondary-500">Waiting for a human to call back gives leads time to find your competitor.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-sm font-medium text-secondary-900 mb-1">Missing Info</p>
                <p className="text-xs text-secondary-500">Confusion is a conversion killer. If they can't book in 2 clicks, they won't.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-secondary-400 mb-10">Instant Diagnostic Scan</h3>
            <GEOValidator />
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-secondary-900 mb-6">We fix the leaks so your ad spend actually works.</p>
            <Button size="lg" href="#calculator">
              Calculate Your Lost Revenue
            </Button>
          </div>
        </Section>
        <Section id="what-we-do">
          <SectionHeader
            title="What We Do"
            subtitle="Three core pillars that make your business unstoppable online"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Zap}
              title="AI Automation"
              description="Streamline your workflows with intelligent automation. From contact follow-ups to appointment scheduling, let AI handle the repetitive tasks."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Local SEO"
              description="Get found by customers in your area. We optimize your site and Google Business Profile to dominate local search results."
            />
            <ServiceCard
              icon={Palette}
              title="Beautiful Design"
              description="Stand out with elegant, conversion-focused design. Clean interfaces that load fast and look stunning on every device."
            />
          </div>
        </Section>

        <Section background="gray" id="who-we-serve">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Built For Busy Business Owners</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                You're earning $250K+ per year. You don't have time to mess with tech. You need a
                website that works as hard as you do.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                We work with medical clinics, law firms, real estate brokers, contractors, medspas,
                coaches, and personal brands who want smart systems without the complexity.
              </p>
              <Button size="lg" href="#contact">
                Let's Talk About Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-white p-6 rounded-xl shadow-lg hover-lift cursor-default">
                <Users className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">$250K+</div>
                <p className="text-sm text-secondary-600">Annual Revenue</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover-lift cursor-default">
                <Clock className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">2-4 weeks</div>
                <p className="text-sm text-secondary-600">Launch Timeline</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover-lift cursor-default">
                <Award className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">100%</div>
                <p className="text-sm text-secondary-600">Custom Built</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover-lift cursor-default">
                <TrendingUp className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">1,000+</div>
                <p className="text-sm text-secondary-600">Families Impacted</p>
              </div>
            </div>
          </div>
        </Section>

        <Section background="dark" id="roadmap">
          <SectionHeader
            title="The HPA Evolution"
            subtitle="The 90-day roadmap from manual struggle to automated market dominance"
            centered
            className="text-white"
          />
          <HPAPhaseShift />
        </Section>

        <ROICalculator />
        <SuccessRoadmap />

        <Section id="why-choose-us">
          <SectionHeader
            title="Why Choose IntelleadGen Studio"
            subtitle="We're not your typical agency. We're boutique, focused, and obsessed with results."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-secondary-600">
                Sites built on modern JAMstack architecture. Load times under 2 seconds guaranteed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">White-Glove Service</h3>
              <p className="text-secondary-600">
                Direct access to your developer. No project managers. No runaround. Just results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-secondary-600">
                From SaaS platforms to nonprofit sites, we deliver measurable impact across diverse industries.
              </p>
            </div>
          </div>
        </Section>

        <LeadMagnetSection />

        <Section background="gray" id="testimonials">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Real results from real business owners"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="IntelleadGen transformed our online presence. We're now getting 3x more appointment requests, and the site practically runs itself."
              author="Dr. Sarah Mitchell"
              role="Founder"
              company="Radiance MedSpa"
            />
            <TestimonialCard
              quote="Finally, a developer who speaks my language. No tech jargon, just clear communication and a website that converts like crazy."
              author="James Rodriguez"
              role="Managing Partner"
              company="Rodriguez Law Group"
            />
            <TestimonialCard
              quote="The AI automation alone saved us 15 hours per week. This is the best investment we've made in our business."
              author="Emily Chen"
              role="CEO"
              company="Premier Real Estate"
            />
          </div>
        </Section>

        <Section id="case-study">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Case Study
                </div>
                <h2 className="text-white mb-6">How a Philadelphia Nonprofit Now Serves 1,000+ Families Monthly</h2>
                <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                  The Acts Foundation needed a professional online presence to accept donations, recruit volunteers, and share their impact story. We built them a mission-focused website that helps fight food insecurity in Philadelphia.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">1,000+</div>
                    <p className="text-primary-100">Families Served Monthly</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p className="text-primary-100">Impact-Driven Design</p>
                  </div>
                </div>
                <Button variant="secondary" size="lg" href="https://theactsfoundation.org/" target="_blank" rel="noopener noreferrer">
                  Visit Their Website
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="h-64 lg:h-auto bg-primary-700/30 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <Users className="w-20 h-20 mx-auto mb-4" />
                  <p>Nonprofit Website</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="platform-section">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl overflow-hidden border border-primary-200 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Self-Service Platform</span>
                  </div>
                  <h2 className="mb-4">Prefer to Do It Yourself?</h2>
                  <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                    Not ready for full-service? Try our intelleadgen.io platform. Build AI-powered lead generation systems, manage campaigns, and automate workflows on your own terms.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'AI-powered lead scoring and qualification',
                      'Automated workflow builder',
                      'Campaign management tools',
                      'Analytics and reporting dashboard',
                      'Flexible pricing for any budget',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://intelleadgen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-800 transition-all duration-300 hover:shadow-lg"
                  >
                    <span>Explore Our Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-primary-100/50 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <Zap className="w-20 h-20 mx-auto mb-4" />
                    <p className="font-medium text-lg">intelleadgen.io</p>
                    <p className="text-sm text-primary-600 mt-2">Self-Service Lead Gen Platform</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-secondary-500">
                <strong className="text-secondary-700">Not sure which is right for you?</strong> Book a discovery call and we'll help you decide.
              </p>
            </div>
          </div>
        </Section>

        <Section background="dark" id="final-cta">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
              Book a free 30-minute discovery call. We'll discuss your business goals and show you
              exactly how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" href="#contact">
                Book Your Discovery Call
              </Button>
              <Button size="lg" variant="outline" href="#portfolio">
                View Our Work
              </Button>
            </div>
            <p className="mt-8 text-secondary-400 text-sm">
              No pressure. No obligation. Just a conversation about your business.
            </p>
          </div>
        </Section>
      </div >
    </>
  );
};
