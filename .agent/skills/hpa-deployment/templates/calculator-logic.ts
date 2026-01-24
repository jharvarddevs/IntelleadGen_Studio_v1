export const CALCULATOR_LOGIC_TEMPLATE = {
    calculateLostRevenue: (leads, conversionRate, clientValue) => {
        const currentConversions = leads * (conversionRate / 100);
        const optimizedConversions = leads * 0.15; // Target HPA 15% conversion rate
        const lostLeads = Math.max(0, optimizedConversions - currentConversions);
        return Math.round(lostLeads * clientValue);
    },
    formatCurrency: (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    }
};
