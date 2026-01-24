export const SAB_SCHEMA_TEMPLATE = (businessData) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessData.name,
    image: businessData.logo,
    '@id': `${businessData.url}/#organization`,
    url: businessData.url,
    telephone: businessData.phone,
    priceRange: businessData.priceRange || '$$$',
    address: {
        '@type': 'PostalAddress',
        addressLocality: businessData.city,
        addressRegion: businessData.state,
        postalCode: businessData.zip,
        addressCountry: 'US',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: businessData.lat,
        longitude: businessData.lng,
    },
    areaServed: businessData.regions.map(region => ({
        '@type': 'City',
        name: region.name,
        sameAs: region.wikiLink
    })),
    description: businessData.description,
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: businessData.services.map(service => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: service.name,
                description: service.description
            }
        }))
    }
});
