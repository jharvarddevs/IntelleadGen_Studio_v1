export interface LeadData {
  annualRevenue?: string;
  budgetRange?: string;
  timeline?: string;
  servicesInterested?: string[];
  currentWebsite?: string;
  biggestPainPoint?: string;
  companySize?: string;
}

export interface LeadScore {
  score: number;
  status: 'hot' | 'warm' | 'cold';
  breakdown: {
    revenue: number;
    budget: number;
    timeline: number;
    services: number;
    completion: number;
  };
}

export const calculateLeadScore = (data: LeadData): LeadScore => {
  let revenueScore = 0;
  let budgetScore = 0;
  let timelineScore = 0;
  let servicesScore = 0;
  let completionScore = 0;

  // Score annual revenue (max 30 points)
  switch (data.annualRevenue) {
    case '$5M+':
      revenueScore = 30;
      break;
    case '$1M-$5M':
      revenueScore = 25;
      break;
    case '$500K-$1M':
      revenueScore = 20;
      break;
    case '$250K-$500K':
      revenueScore = 15;
      break;
    case 'Under $250K':
      revenueScore = 5;
      break;
    default:
      revenueScore = 0;
  }

  // Score budget range (max 25 points)
  switch (data.budgetRange) {
    case '$50K+':
    case 'Custom':
      budgetScore = 25;
      break;
    case '$25K':
      budgetScore = 20;
      break;
    case '$15K':
      budgetScore = 15;
      break;
    case '$10K':
      budgetScore = 10;
      break;
    case '$5K':
      budgetScore = 5;
      break;
    default:
      budgetScore = 0;
  }

  // Score timeline (max 20 points)
  switch (data.timeline) {
    case 'ASAP (1-2 weeks)':
      timelineScore = 20;
      break;
    case 'Soon (1-2 months)':
      timelineScore = 15;
      break;
    case 'Planning (3-6 months)':
      timelineScore = 10;
      break;
    case 'Just exploring':
      timelineScore = 5;
      break;
    default:
      timelineScore = 0;
  }

  // Score number of services selected (max 15 points)
  const servicesCount = data.servicesInterested?.length || 0;
  if (servicesCount >= 3) {
    servicesScore = 15;
  } else if (servicesCount === 2) {
    servicesScore = 10;
  } else if (servicesCount === 1) {
    servicesScore = 5;
  }

  // Score form completion quality (max 10 points)
  if (data.currentWebsite) {
    completionScore += 5;
  }
  if (data.biggestPainPoint && data.biggestPainPoint.length >= 50) {
    completionScore += 5;
  }

  // Calculate total score
  const totalScore = revenueScore + budgetScore + timelineScore + servicesScore + completionScore;

  // Determine lead status
  let status: 'hot' | 'warm' | 'cold';
  if (totalScore >= 75) {
    status = 'hot';
  } else if (totalScore >= 50) {
    status = 'warm';
  } else {
    status = 'cold';
  }

  return {
    score: totalScore,
    status,
    breakdown: {
      revenue: revenueScore,
      budget: budgetScore,
      timeline: timelineScore,
      services: servicesScore,
      completion: completionScore,
    },
  };
};

export const getStatusColor = (status: 'hot' | 'warm' | 'cold'): string => {
  switch (status) {
    case 'hot':
      return 'text-red-600';
    case 'warm':
      return 'text-yellow-600';
    case 'cold':
      return 'text-blue-600';
  }
};

export const getStatusBgColor = (status: 'hot' | 'warm' | 'cold'): string => {
  switch (status) {
    case 'hot':
      return 'bg-red-50 border-red-200';
    case 'warm':
      return 'bg-yellow-50 border-yellow-200';
    case 'cold':
      return 'bg-blue-50 border-blue-200';
  }
};
