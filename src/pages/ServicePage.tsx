import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Section, SectionHeader } from '../components/Section';
import { TestimonialCard } from '../components/TestimonialCard';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { ServiceData, getRelatedServices } from '../lib/servicesData';

interface ServicePageProps {
  service: ServiceData;
  onNavigate: (page: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate }) => {
  const Icon = service.icon;
  const relatedServices = getRelatedServices(service.id);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.shortDescription,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'IntelleadGen Studio'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'price': service.pricingStartsAt?.replace(/[^0-9]/g, '') || '0'
    }
  };

  return (
    <>
      <SEO
        title={service.name}
        description={service.shortDescription}
        canonical={`https://intelleadgen.io/studio#${service.slug}`}
        structuredData={serviceSchema}
      />
      <div className="pt-16 md:pt-20">
        <section className="relative bg-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03),transparent_50%)]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex items-center text-sm text-primary-600 mb-6">
              <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">
                Home
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <button onClick={() => onNavigate('services')} className="hover:text-black transition-colors">
                Services
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black">{service.name}</span>
            </div>

            <div className="max-w-4xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 animate-scale-in">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="mb-6 animate-slide-up">{service.heroTagline}</h1>
              <p className="text-xl md:text-2xl text-primary-600 mb-8 leading-relaxed animate-slide-up">
                {service.longDescription}
              </p>
              {service.pricingStartsAt && (
                <p className="text-lg text-black font-semibold mb-8">
                  Starting at {service.pricingStartsAt}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="secondary" href="#how-it-works">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {service.caseStudyHighlight && (
          <Section background="gray">
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary-200 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-3 leading-tight break-words whitespace-pre-line">
                    {service.caseStudyHighlight.metric}
                  </div>
                  <p className="text-lg text-primary-600">
                    {service.caseStudyHighlight.description}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Icon className="w-32 h-32 text-primary-300" />
                </div>
              </div>
            </div>
          </Section>
        )}

        <Section id="why-you-need-it">
          <SectionHeader
            title="Why You Need This"
            subtitle="The business benefits that matter most"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-black">{benefit.title}</h3>
                <p className="text-primary-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section background="gray" id="whats-included">
          <SectionHeader
            title="What's Included"
            subtitle="Everything you get with this service"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-primary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="how-it-works">
          <SectionHeader
            title="How It Works"
            subtitle="Our simple, proven process"
            centered
          />
          <div className={`grid grid-cols-1 md:grid-cols-2 ${service.processSteps.length === 3 ? 'lg:grid-cols-3 max-w-5xl' :
            service.processSteps.length === 2 ? 'lg:grid-cols-2 max-w-4xl' :
              'lg:grid-cols-4 max-w-6xl'
            } gap-12 mx-auto`}>
            {service.processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{step.title}</h3>
                <p className="text-primary-600 leading-relaxed mb-6">{step.description}</p>

                {step.subTopics && (
                  <ul className="space-y-2 text-left bg-gray-50 rounded-xl p-4 border border-gray-100">
                    {step.subTopics.map((topic, i) => (
                      <li key={i} className="flex items-center text-sm text-primary-700">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              quote={service.testimonial.quote}
              author={service.testimonial.author}
              role={service.testimonial.role}
              company={service.testimonial.company}
            />
          </div>
        </Section>

        <Section id="faq">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border-2 border-primary-200 hover:border-black transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-black">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-primary-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-primary-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </Section>

        {relatedServices.length > 0 && (
          <Section background="gray">
            <SectionHeader
              title="Related Services"
              subtitle="Other services that complement this one"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <button
                    key={relatedService.id}
                    onClick={() => onNavigate(relatedService.slug)}
                    className="group bg-white p-6 rounded-xl border-2 border-primary-200 hover:border-black transition-all duration-300 text-left"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <RelatedIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black">{relatedService.name}</h3>
                    <p className="text-sm text-primary-600 mb-3">{relatedService.shortDescription}</p>
                    <span className="text-sm text-black font-medium flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                );
              })}
            </div>
          </Section>
        )}

        <Section background="dark">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-400 mb-8 leading-relaxed">
              Book a free 30-minute discovery call and let's discuss how this service can transform
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
                Book Your Discovery Call
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('services')}>
                View All Services
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
