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
            streetAddress: 'Philadelphia Region',
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
        description: 'Premier AI Automation and Web Development for Law Firms, Medical Offices, and High-Ticket Service Businesses.',
        services: [
            {
                '@type': 'Service',
                name: 'AI Automation for Law Firms',
                description: 'Automated lead follow-up and appointment scheduling for personal injury and family law firms.'
            },
            {
                '@type': 'Service',
                name: 'Medical Marketing Automation',
                description: 'Patient acquisition and retention systems for MedSpas and medical clinics.'
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};
