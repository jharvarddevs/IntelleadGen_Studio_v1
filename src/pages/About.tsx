import React from 'react';
import { Button } from '../components/Button';
import { Section, SectionHeader } from '../components/Section';
import { Heart, Target, Users, Zap, Code, ExternalLink, Rocket } from 'lucide-react';
import { FounderAuthority } from '../components/FounderAuthority';

export const About: React.FC = () => {
  return (
    <div className="pt-0">
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-8 md:pt-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">About IntelleadGen Studio</h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We built IntelleadGen Studio for people who want smart systems without the complexity.
          </p>
        </div>
      </section>

      <FounderAuthority />

      <Section background="gray">
        <SectionHeader
          title="Our Mission"
          subtitle="Empower entrepreneurs with websites that think ahead"
          centered
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-secondary-600 text-center leading-relaxed mb-12">
            We believe that technology should simplify your life, not complicate it. Our mission is
            to deliver world-class websites and automation to busy business owners who deserve
            better than what the market typically offers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
              <p className="text-secondary-600">
                We limit our client roster to ensure every project gets the attention it deserves.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership First</h3>
              <p className="text-secondary-600">
                Your success is our success. We're invested in your long-term growth, not just a
                project delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Always</h3>
              <p className="text-secondary-600">
                We stay on the cutting edge so you don't have to. AI, automation, and modern tech
                done right.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="The Boutique Difference"
          subtitle="Why working with a focused studio beats working with a big agency"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Direct Access</h3>
                <p className="text-secondary-600">
                  Talk directly to the people building your site. No layers of account managers or
                  project coordinators.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Laser Focus</h3>
                <p className="text-secondary-600">
                  We only take on projects we know we can knock out of the park. Quality beats
                  volume every time.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Modern Tech Stack</h3>
                <p className="text-secondary-600">
                  React, Tailwind, Supabase, GPT, Claude. We use the best tools to build the best
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Long-Term Partnership</h3>
                <p className="text-secondary-600">
                  We're here for the long haul. Ongoing support, updates, and optimization included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="We Practice What We Preach"
          subtitle="Our own SaaS platform proves our technical expertise"
          centered
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-secondary-900">intelleadgen.io Platform</h3>
                <p className="text-lg text-secondary-600 mb-4 leading-relaxed">
                  We don't just build for clients. We built our own AI-powered lead generation platform from scratch. This is how we know what works, what scales, and what business owners actually need.
                </p>
                <p className="text-secondary-700 font-medium mb-6">
                  When you work with us, you're working with developers who have launched real products, not just websites.
                </p>
                <a
                  href="https://intelleadgen.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-800 transition-all duration-300 hover:shadow-lg"
                >
                  <span>Check Out Our Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          title="Our Technology Stack"
          subtitle="Built with the best tools in the industry"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            'React',
            'Tailwind CSS',
            'Supabase',
            'Vercel',
            'Framer',
            'Glide',
            'GPT-4',
            'Claude AI',
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-secondary-200 text-center hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <p className="font-semibold text-secondary-900">{tech}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
            If you're a business owner earning $250K+ per year and you're ready for a website that
            actually works, let's talk.
          </p>
          <Button size="lg" variant="secondary" href="#contact">
            Book Your Free Discovery Call
          </Button>
          <p className="mt-6 text-secondary-400">
            Limited availability. We only work with a handful of clients at a time.
          </p>
        </div>
      </Section>
    </div>
  );
};
