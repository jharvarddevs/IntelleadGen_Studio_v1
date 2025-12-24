import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { MultiStepForm } from '../components/contact-form/MultiStepForm';

export const Contact: React.FC = () => {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your online presence? Let's start with a conversation.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <MultiStepForm />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Email Us</h3>
              <a
                href="mailto:hello@intelleadgen.io"
                className="text-primary-600 hover:text-black transition-colors text-sm"
              >
                hello@intelleadgen.io
              </a>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Call Us</h3>
              <a
                href="tel:+12158092808"
                className="text-primary-600 hover:text-black transition-colors text-sm"
              >
                (215) 809-2808
              </a>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Book Directly</h3>
              <a
                href="https://calendly.com/intelleadgen/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-black transition-colors text-sm"
              >
                Schedule Now →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          title="Serving Business Owners Nationwide"
          subtitle="Primary service areas with on-site availability"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {[
            'Philadelphia, PA',
            'Miami, FL',
            'New York, NY',
            'Horsham, PA',
            'Washington, DC',
            'Boston, MA',
          ].map((city, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-secondary-200 text-center hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <MapPin className="w-5 h-5 text-primary-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-secondary-900">{city}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-secondary-600 mt-8 max-w-2xl mx-auto">
          While we're based in the Philadelphia area, we work with clients across the United
          States. Remote collaboration is seamless with our modern tools and processes.
        </p>
      </Section>
    </div>
  );
};
