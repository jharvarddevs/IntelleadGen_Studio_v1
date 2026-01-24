import React from 'react';
import { Helmet } from 'react-helmet-async';

export const LocalBusinessSchema: React.FC = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'IntelleadGen Studio',
        image: 'https://intelleadgen.io/ILG-Logo_991x148_wht_world-p-500.webp',
        '@id': 'https://intelleadgen.io/studio/#organization',
        url: 'https://intelleadgen.io/studio',
        telephone: '+1-215-809-2808',
        priceRange: '$$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Philadelphia',
            addressRegion: 'PA',
            postalCode: '19102',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.9526,
            longitude: -75.1652,
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Philadelphia',
                sameAs: 'https://www.wikidata.org/wiki/Q1345'
            },
            {
                '@type': 'City',
                name: 'Horsham',
                sameAs: 'https://www.wikidata.org/wiki/Q5905187'
            },
            {
                '@type': 'City',
                name: 'New York',
                sameAs: 'https://www.wikidata.org/wiki/Q60'
            },
            {
                '@type': 'City',
                name: 'Miami',
                sameAs: 'https://www.wikidata.org/wiki/Q12142'
            }
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        sameAs: [
            'https://linkedin.com/company/intelleadgen',
            'https://twitter.com/intelleadgen'
        ],
        description: 'Elite AI Automation and High-Performance Web Development for Philadelphia-based Law Firms, Medical Offices, and High-Ticket Service Businesses.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Local SEO & AI Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Local SEO & Map Pack Optimization',
                        description: 'Dominate Philadelphia local search results and the Google Map Pack.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'AI Lead Follow-up Systems',
                        description: 'Automated 24/7 lead nurturing for medical and legal practices.'
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};
