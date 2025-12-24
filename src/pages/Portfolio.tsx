import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { PortfolioCard } from '../components/PortfolioCard';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { SEO } from '../components/SEO';
import { MessageCircle } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'IntelleadGen Platform',
      industry: 'SaaS',
      description: 'Complete B2B lead generation platform with 6 integrated AI tools, Chrome extension, and email automation systems.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: '95% email accuracy rate',
      link: 'https://intelleadgen.io/',
    },
    {
      id: 2,
      title: 'The Acts Foundation',
      industry: 'Nonprofit',
      description: 'Mission-driven website for Philadelphia nonprofit with integrated donation system and volunteer recruitment features.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: '1,000+ families served monthly',
      link: 'https://theactsfoundation.org/',
    },
    {
      id: 3,
      title: 'BR Hardscape Design',
      industry: 'Landscaping',
      description: 'Professional portfolio website with project galleries, lead capture forms, and mobile-optimized design.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: 'Modern portfolio showcase',
      link: 'https://brhardscapedesign.com/',
    },
    {
      id: 4,
      title: 'Royal Wealth Investments',
      industry: 'Real Estate',
      description: 'Conversion-focused website for real estate investment company with optimized lead capture and clear value proposition.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: 'Fast-loading lead generation',
      link: 'https://www.royalwealthinvestments.com/',
    },
    {
      id: 5,
      title: 'Elements Insights',
      industry: 'Consulting',
      description: 'Modern React-based web application for business consulting firm with clean, professional interface.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: 'Modern SPA architecture',
      link: 'https://www.elementsinsights.com/',
    },
  ];

  const industries = ['all', 'SaaS', 'Nonprofit', 'Landscaping', 'Real Estate', 'Consulting'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.industry === activeFilter);

  return (
    <>
      <SEO
        title="Portfolio"
        description="See our work: Custom websites and AI automation systems for SaaS, nonprofits, real estate, and more."
        canonical="https://intelleadgen.io/studio#portfolio"
      />
      <FloatingActionButton
        icon={MessageCircle}
        href="#contact"
        label="Start Your Project"
        position="bottom-right"
        showAfterScroll={300}
      />
      <div className="pt-16 md:pt-20">
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Real projects. Real results. See how we've helped businesses like yours thrive online.
            </p>
          </div>
        </section>

        <Section>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeFilter === industry
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                industry={project.industry}
                description={project.description}
                image={project.image}
                metrics={project.metrics}
                link={project.link}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 text-lg">
                No projects found in this category. Check back soon!
              </p>
            </div>
          )}
        </Section>

        <Section background="gray">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Results That Speak for Themselves</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2 break-words">5+</div>
                <p className="text-secondary-600">Industries Served</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2 break-words">1,000+</div>
                <p className="text-secondary-600">Lives Impacted</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2 break-words">100%</div>
                <p className="text-secondary-600">Custom Built</p>
              </div>
            </div>
            <p className="text-lg text-secondary-600 mb-8">
              Every project is custom-built to meet your specific needs and goals. No templates. No shortcuts. Just beautiful, high-performing websites.
            </p>
            <Button size="lg" href="#contact">
              Start Your Project Today
            </Button>
          </div>
        </Section>

        <Section background="dark">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white mb-6">Your Success Story Starts Here</h2>
            <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
              Ready to see results like these for your business? Let's talk about what we can build together.
            </p>
            <Button size="lg" href="#contact">
              Book Your Free Discovery Call
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
};
