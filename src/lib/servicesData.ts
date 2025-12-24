import { LucideIcon, Globe, Bot, TrendingUp, MapPin, Filter, Zap, MessageSquare, Wrench } from 'lucide-react';

export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  heroTagline: string;
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
    subTopics?: string[];
  }>;
  pricingStartsAt?: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  caseStudyHighlight?: {
    metric: string;
    description: string;
  };
  industryVerticals?: string[];
  suite?: 'Foundation' | 'Growth' | 'Domination';
}

export const servicesData: Record<string, ServiceData> = {
  'website-design': {
    id: 'website-design',
    name: 'Website Design & Development',
    slug: 'website-design',
    icon: Globe,
    shortDescription: 'Stop losing customers to slow, ugly websites',
    longDescription: 'Your website is costing you money every single day it stays the way it is. We build conversion machines that turn visitors into paying customers.',
    heroTagline: 'Is Your Website Silently Killing Your Leads?',
    features: [
      'Custom design that actually looks professional (not templated junk)',
      'Works flawlessly on phones, tablets, and desktops',
      'Loads in under 2 seconds (your current site probably takes 8+)',
      'Built with modern tech that won\'t be outdated next year',
      'SEO-ready so Google can actually find you',
      'You can update it yourself without calling us every time',
      'Secure hosting included (no surprise bills)',
      'Lead capture forms that actually work',
      'Analytics so you know what\'s working',
      'Real human support when you need it',
    ],
    benefits: [
      {
        title: 'Stop Bleeding Money from Slow Load Times',
        description: 'Your site takes 8 seconds to load. Visitors leave after 3. That\'s 60% of potential customers gone before they even see what you do. Every day you wait costs you real money.',
      },
      {
        title: 'Look Like the Professional You Are',
        description: 'Your competitors have modern sites. You don\'t. Prospects judge you in 3 seconds, and right now you\'re losing to businesses half as good as yours just because their website doesn\'t look like 2010.',
      },
      {
        title: 'Finally Get Control of Your Website',
        description: 'Stop paying $200 every time you need to change a sentence. Our sites are built so you can make simple updates yourself. Save thousands per year and get changes done in minutes, not weeks.',
      },
      {
        title: 'Mobile Isn\'t Optional Anymore',
        description: 'Over 60% of your traffic is on phones. If your site doesn\'t work perfectly on mobile, you\'re throwing away 6 out of every 10 potential customers. That\'s not a website problem—that\'s a revenue problem.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Strategy & Wireframing',
        description: 'We map out your customer journey and plan the architecture for maximum conversion.',
        subTopics: ['User Flow Design', 'Conversion Mapping', 'Brand Alignment']
      },
      {
        number: '02',
        title: 'Visual Design',
        description: 'Our designers create a stunning, unique look that separates you from every competitor.',
        subTopics: ['Custom UI/UX', 'Premium Typography', 'Interactive Mockups']
      },
      {
        number: '03',
        title: 'High-Performance Build',
        description: 'We code your site for speed, security, and scalability using the most modern tech stack.',
        subTopics: ['Clean Code Build', 'Speed Optimization', 'SEO Infrastructure']
      },
      {
        number: '04',
        title: 'Review & Launch',
        description: 'A rigorous testing phase followed by a perfect launch and ongoing performance monitoring.',
        subTopics: ['Cross-Device QA', 'Final SEO Audit', 'Cloud Deployment']
      },
    ],
    pricingStartsAt: '$10,000',
    faqItems: [
      {
        question: 'How long does it take? I need this done yesterday.',
        answer: 'Most websites are done in 3-6 weeks. If you\'re in a rush, we can prioritize your project and have you live in as little as 2 weeks. The timeline depends on how quickly you can provide content and feedback.',
      },
      {
        question: 'Can I update it myself or will I be stuck calling you for every change?',
        answer: 'You can absolutely update it yourself. We build sites so you can change text, images, and basic content without touching code. We also train you on how to use it. For bigger changes, we\'re here to help.',
      },
      {
        question: 'What if I need changes after launch?',
        answer: 'Small tweaks in the first 30 days are included. After that, you can either make simple updates yourself, or we have affordable maintenance packages starting at $250/month for ongoing support.',
      },
      {
        question: 'Do I have to pay for hosting separately?',
        answer: 'Nope. Hosting is included. No surprise bills, no technical headaches. We handle all the backend stuff so you can focus on your business.',
      },
      {
        question: 'Will this actually show up in Google?',
        answer: 'Yes. Every site we build is SEO-optimized from day one. Fast loading, mobile-friendly, clean code—all the things Google looks for. But if you want to dominate local search, ask us about our SEO service too.',
      },
      {
        question: 'What if my current site is a disaster? Can you save it or do we start over?',
        answer: 'Usually starting fresh is faster and cheaper than trying to fix a broken site. We\'ll look at what you have and tell you honestly whether it\'s worth saving or if you\'re better off with a clean slate.',
      },
    ],
    relatedServices: ['local-seo', 'performance-optimization', 'website-maintenance'],
    testimonial: {
      quote: 'We were losing leads left and right with our old site. IntelleadGen built us something that actually works. Appointment bookings tripled in the first 60 days.',
      author: 'Dr. Sarah Mitchell',
      role: 'Founder',
      company: 'Radiance MedSpa',
    },
    caseStudyHighlight: {
      metric: '3x More Leads',
      description: 'Medical clinic increased appointment bookings by 300% within 60 days of launching their new site',
    },
    industryVerticals: ['Medical', 'Legal', 'Real Estate', 'Construction'],
    suite: 'Foundation',
  },
  'ai-automation': {
    id: 'ai-automation',
    name: 'AI Workflow Automation',
    slug: 'ai-automation',
    icon: Bot,
    shortDescription: 'Stop wasting 15 hours a week on repetitive busywork',
    longDescription: 'Automate the tedious tasks killing your productivity. Get back 15+ hours per week to actually grow your business instead of drowning in admin work.',
    heroTagline: 'Still Drowning in Busywork?',
    features: [
      'Stop manually following up with every single lead',
      'Automatically schedule appointments while you sleep',
      'Qualify leads before they waste your time',
      'Send email sequences without lifting a finger',
      'Onboard new clients automatically',
      'Generate documents and proposals instantly',
      'Sync all your tools so data flows automatically',
      'Schedule social media posts weeks in advance',
      'Send payment reminders without awkward conversations',
      'Custom automations built for your exact business',
    ],
    benefits: [
      {
        title: 'Get 15+ Hours Back Every Single Week',
        description: 'You\'re spending 10-20 hours per week on tasks a computer could do in 10 seconds. That\'s 50-80 hours per month—over a month of your life every year—wasted on repetitive garbage. What would you do with an extra 15 hours every week?',
      },
      {
        title: 'Never Miss a Lead Again',
        description: 'A lead fills out your form at 9 PM. By 9 AM, they\'ve already hired your competitor because you didn\'t respond fast enough. Automation responds instantly, every single time, even at 2 AM. No more money walking out the door.',
      },
      {
        title: 'Scale Without Hiring More People',
        description: 'You can handle 2x or 3x more clients without adding staff. Automation doesn\'t take vacation, doesn\'t call in sick, and works 24/7 for a fraction of what you\'d pay an employee. Scale your business, not your overhead.',
      },
      {
        title: 'Every Client Gets the Same Perfect Experience',
        description: 'Stop forgetting to follow up. Stop dropping balls. Automation ensures every client gets the same professional, consistent treatment from the first interaction to the final invoice. No more "oops, I forgot."',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Workflow Auditing',
        description: 'We identify the manual tasks that are currently wasting your time and costing you money.',
        subTopics: ['Time-Waste Analysis', 'Data Flow Mapping', 'Tool Stack Review']
      },
      {
        number: '02',
        title: 'Automation Design',
        description: 'We build the logic and integrations that connect your tools into a seamless ecosystem.',
        subTopics: ['Logic Engineering', 'API Integrations', 'Trigger Setup']
      },
      {
        number: '03',
        title: 'Testing & Hardening',
        description: 'We run simulations to ensure every automation works perfectly without human intervention.',
        subTopics: ['Edge Case Testing', 'Security Verification', 'Pilot Run']
      },
      {
        number: '04',
        title: 'Full Deployment',
        description: 'Launch your automated workflows and start saving dozens of hours every single week.',
        subTopics: ['Team Onboarding', 'Active Monitoring', 'ROI Tracking']
      },
    ],
    pricingStartsAt: '$5,000',
    faqItems: [
      {
        question: 'What tasks can you actually automate?',
        answer: 'Almost anything repetitive: email follow-ups, appointment scheduling, lead qualification, data entry, document generation, social media posting, payment reminders—the list goes on. If you do it more than once, we can probably automate it.',
      },
      {
        question: 'Is this going to replace my team?',
        answer: 'No. Automation handles the boring busywork so your team can focus on high-value activities that actually require human intelligence. It makes your people more productive, not obsolete.',
      },
      {
        question: 'How much time will I actually save?',
        answer: 'Most clients save 10-20 hours per week. The exact savings depend on which processes we automate, but almost everyone is shocked by how much time they get back.',
      },
      {
        question: 'What if my tools don\'t work together?',
        answer: 'We connect everything. Most popular tools (Gmail, Google Calendar, Calendly, HubSpot, Salesforce, Stripe, etc.) integrate easily. If something doesn\'t play nice, we build custom connections.',
      },
      {
        question: 'What happens if I change how I do things?',
        answer: 'Automations are flexible. We can update your workflows as your business evolves. Most changes take minutes, not days.',
      },
      {
        question: 'Is this hard to maintain?',
        answer: 'Nope. Once it\'s set up, automation just works. We handle any technical maintenance, and you can focus on your business instead of managing software.',
      },
    ],
    relatedServices: ['website-design', 'chatbot-integration', 'funnel-building'],
    testimonial: {
      quote: 'We were spending 15+ hours a week just on follow-ups and scheduling. Now it all happens automatically. This is hands down the best investment we\'ve made.',
      author: 'Emily Chen',
      role: 'CEO',
      company: 'Premier Real Estate',
    },
    caseStudyHighlight: {
      metric: '15 Hours Saved Weekly',
      description: 'Real estate agency eliminated manual follow-ups and data entry completely, saving 60+ hours per month',
    },
    industryVerticals: ['Legal', 'Medical', 'Real Estate', 'SaaS'],
    suite: 'Growth',
  },
  'local-seo': {
    id: 'local-seo',
    name: 'Local SEO Optimization',
    slug: 'local-seo',
    icon: TrendingUp,
    shortDescription: 'Stop being invisible when customers search for you',
    longDescription: 'Your competitors are on page 1 of Google. You\'re on page 3. Every day you wait is money left on the table while customers hire someone else.',
    heroTagline: 'Invisible in Google = Invisible to Customers',
    features: [
      'Complete on-page SEO so Google actually understands your site',
      'AI Search Optimization (GEO) to rank in ChatGPT & Google Gemini',
      'Local keyword targeting (not generic national keywords)',
      'Google Business Profile optimization (most are doing it wrong)',
      'Schema markup so search engines display you properly',
      'Build local citations so Google trusts you',
      'Review generation strategy (reviews = rankings)',
      'Mobile optimization (Google penalizes slow mobile sites)',
      'Site speed fixes (slow = invisible in Google)',
      'Content optimization that ranks without sounding robotic',
      'Monthly reports showing exactly what\'s working',
    ],
    benefits: [
      {
        title: 'Show Up When Customers Are Actually Searching',
        description: 'When someone Googles "[your service] near me," your competitors show up. You don\'t. That customer has never heard of you, and they just hired your competition. SEO fixes this. You show up first, they call you first.',
      },
      {
        title: 'Stop Paying for Clicks You Should Get Free',
        description: 'You\'re spending $1,000-$5,000/month on Google Ads because your SEO sucks. Once you rank organically, those clicks are FREE. SEO is the gift that keeps giving without monthly ad bills.',
      },
      {
        title: 'Customers Trust Organic Results More Than Ads',
        description: 'People scroll past ads and click organic results because they trust them more. High rankings signal authority and credibility. If you\'re not ranking, prospects assume you\'re not worth hiring.',
      },
      {
        title: 'Your Competitors Are Already Doing This',
        description: 'The businesses ranking on page 1 aren\'t lucky—they\'re investing in SEO. Every day you wait is market share you\'re handing to them on a silver platter. They\'re not better than you, they\'re just more visible.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'SEO Audit & Competitive Analysis',
        description: 'We analyze exactly why you\'re not ranking and see what your competitors are doing to beat you. Most business owners are shocked by what they find.',
      },
      {
        number: '02',
        title: 'Build Your Custom Strategy',
        description: 'We create an SEO roadmap targeting the keywords that will bring you the most business. Not vanity metrics—actual revenue-generating search terms.',
      },
      {
        number: '03',
        title: 'Optimize Everything',
        description: 'We fix your website, optimize your Google Business Profile, build citations, and implement everything needed to climb the rankings. The technical stuff you don\'t have time to figure out.',
      },
      {
        number: '04',
        title: 'Monitor, Adjust, Dominate',
        description: 'We track rankings, traffic, and leads. SEO isn\'t "set it and forget it"—we continuously optimize to keep you ahead of competitors trying to take your spot.',
      },
    ],
    pricingStartsAt: '$2,500',
    faqItems: [
      {
        question: 'How long before I see results? I need leads now.',
        answer: 'Initial improvements typically show in 2-3 months, with significant results by 6 months. SEO is a long-term investment, not a quick fix. But once you rank, you keep getting free traffic without ongoing ad spend. If you need leads immediately, combine SEO with Google Ads while your rankings build.',
      },
      {
        question: 'Can you guarantee I\'ll rank #1?',
        answer: 'Anyone promising guaranteed #1 rankings is lying. What we can promise is a proven process that consistently gets clients to page one for their target keywords. We focus on results that matter: more calls, more leads, more revenue.',
      },
      {
        question: 'What\'s the difference between local and national SEO?',
        answer: 'Local SEO targets customers in your area ("dentist in Philadelphia"). National SEO targets the entire country. Local is more affordable and more effective for most businesses because you\'re competing against 50 businesses, not 50,000.',
      },
      {
        question: 'Do I need ongoing SEO or is it one-and-done?',
        answer: 'SEO requires ongoing work. Google changes algorithms, competitors optimize their sites, and you need fresh content to maintain rankings. Our clients who commit long-term see the best results and ROI.',
      },
      {
        question: 'My site is old—do I need a new website for SEO?',
        answer: 'Not always. We can optimize many existing sites. But if your site is truly ancient or has major technical issues, rebuilding might be faster and cheaper than trying to fix a broken foundation.',
      },
      {
        question: 'How do you measure success?',
        answer: 'Rankings, organic traffic, and most importantly—leads and customers. We track everything and show you exactly how SEO is impacting your bottom line.',
      },
    ],
    relatedServices: ['website-design', 'google-business', 'performance-optimization'],
    testimonial: {
      quote: 'We were invisible in Google before IntelleadGen. Now we consistently rank in the top 3 for our main keywords. Phone calls have increased dramatically and we\'ve cut our Google Ads budget in half.',
      author: 'Michael Torres',
      role: 'Owner',
      company: 'Torres Contracting',
    },
    caseStudyHighlight: {
      metric: 'Top 3 Rankings',
      description: 'Contractor moved from page 3 to top 3 for 12 target keywords in 4 months, cutting ad spend by 50%',
    },
    suite: 'Foundation',
  },
  'google-business': {
    id: 'google-business',
    name: 'Google Business Profile Management',
    slug: 'google-business',
    icon: MapPin,
    shortDescription: '80% of customers check Google before buying. What do they see?',
    longDescription: 'Your Google Business Profile is your new storefront. If it\'s incomplete, wrong, or missing, you\'re invisible to customers actively looking for you right now.',
    heroTagline: 'Your Google Profile Is Your New Storefront',
    features: [
      'Complete profile setup (most have glaring mistakes)',
      'Professional photos that don\'t look like garbage',
      'Regular posts so Google knows you\'re active',
      'Review monitoring and professional responses',
      'Q&A management (unanswered questions = lost leads)',
      'Service and product listings properly optimized',
      'Booking button connected to your calendar',
      'Insights tracking so you see what\'s working',
      'Multiple location management (if you have them)',
      'Monthly competitive analysis to stay ahead',
    ],
    benefits: [
      {
        title: 'Show Up in the Map Pack (The Money Zone)',
        description: 'When someone searches for your service locally, Google shows 3 businesses in the map section. That\'s the money zone. If you\'re not in those 3, you\'re invisible to 70% of potential customers. We get you in that pack.',
      },
      {
        title: 'Stop Losing Customers to Bad Reviews',
        description: 'You have 3 reviews. Your competitor has 47. Guess who gets the call? We help you generate legitimate reviews and respond professionally to negative ones. More reviews = more trust = more business.',
      },
      {
        title: 'This Is Free Advertising (Use It)',
        description: 'Google Business Profile is completely free, but most businesses leave it at 20% completion and wonder why they\'re not getting calls. Optimized profiles rank higher, get more clicks, and cost you nothing.',
      },
      {
        title: 'Make It Dead Simple for Customers to Contact You',
        description: 'Customers can call, get directions, book appointments, and visit your website directly from Google. But only if your profile is set up properly. If anything is broken or missing, they move on to the next business.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Profile Audit & Cleanup',
        description: 'We fix everything that\'s wrong with your current profile. Wrong hours, bad photos, missing info, inconsistent details—all the stuff that\'s costing you customers without you knowing.',
      },
      {
        number: '02',
        title: 'Full Optimization',
        description: 'We optimize every single element: business info, categories, services, photos, descriptions. Everything Google looks at when deciding who ranks in the map pack.',
      },
      {
        number: '03',
        title: 'Ongoing Management',
        description: 'We post regularly, manage reviews, answer questions, and keep your profile active. Google rewards active profiles with better visibility.',
      },
      {
        number: '04',
        title: 'Monthly Reports & Strategy',
        description: 'You see exactly how customers are finding you, what actions they\'re taking, and where your leads are coming from. We adjust strategy based on real data.',
      },
    ],
    pricingStartsAt: '$500/month',
    faqItems: [
      {
        question: 'Why can\'t I just do this myself?',
        answer: 'You can, but most business owners don\'t have time to learn Google\'s ever-changing rules, post consistently, manage reviews, and monitor competitors. We handle all of it so you can focus on running your business.',
      },
      {
        question: 'How often do you post on my profile?',
        answer: 'We post 2-4 times per week. Consistent posting tells Google you\'re active and engaged, which boosts your rankings. Profiles that sit dormant get buried.',
      },
      {
        question: 'What should I do about negative reviews?',
        answer: 'Respond professionally and promptly. We handle this for you. A thoughtful response to negative feedback often builds more trust than having zero bad reviews. It shows you care and fix problems.',
      },
      {
        question: 'Can you manage multiple locations?',
        answer: 'Absolutely. We specialize in multi-location businesses and ensure consistency across all your profiles while optimizing each one for its specific area.',
      },
      {
        question: 'How fast will I see more calls and direction requests?',
        answer: 'Most clients see increased visibility within 2-4 weeks. Call volume and direction requests typically increase within the first month once optimization is complete.',
      },
      {
        question: 'Do you help with Google Ads too?',
        answer: 'Our focus is organic optimization of your Google Business Profile. For paid advertising, we can recommend trusted partners.',
      },
    ],
    relatedServices: ['local-seo', 'website-design', 'funnel-building'],
    testimonial: {
      quote: 'Our Google visibility went from barely existing to dominating the map pack. We now get 3-5 calls per day directly from Google Maps. Best $500/month we spend.',
      author: 'Lisa Patel',
      role: 'Owner',
      company: 'Patel Family Dentistry',
    },
    caseStudyHighlight: {
      metric: '400% More Calls',
      description: 'Dental practice quadrupled phone calls from Google Maps in 6 weeks after profile optimization',
    },
    suite: 'Foundation',
  },
  'funnel-building': {
    id: 'funnel-building',
    name: 'Funnel Building',
    slug: 'funnel-building',
    icon: Filter,
    shortDescription: 'Stop paying for traffic that doesn\'t convert',
    longDescription: 'You\'re driving traffic to your website and nobody buys. That\'s not a traffic problem—that\'s a funnel problem. We build systems that turn strangers into paying customers.',
    heroTagline: 'Traffic Without Sales = Expensive Hobby',
    features: [
      'Lead magnet creation (something valuable they actually want)',
      'Landing pages built to convert (not just look pretty)',
      'Email sequences that sell without being pushy',
      'Quiz and survey funnels (these convert insanely well)',
      'Webinar funnel setup (great for high-ticket offers)',
      'Application funnels to qualify leads before you talk',
      'Tripwire and upsell sequences (maximize each customer)',
      'A/B testing to optimize conversion rates',
      'Analytics and tracking so you see what works',
      'Payment and CRM integration (everything connects)',
    ],
    benefits: [
      {
        title: 'Turn Paid Ads Profitable',
        description: 'You\'re spending $2,000/month on ads and getting maybe 2-3 customers. That\'s not scalable. A proper funnel can 2x-5x your conversion rate, making those ads print money instead of bleeding it.',
      },
      {
        title: 'Qualify Leads Before You Waste Time',
        description: 'Stop jumping on calls with tire-kickers who can\'t afford you. A qualification funnel filters out bad-fit prospects before they get to your calendar. Only serious, qualified buyers reach you.',
      },
      {
        title: 'Automate Your Sales Process',
        description: 'Funnels work 24/7. They educate prospects, handle objections, and move people toward buying while you\'re sleeping. Wake up to booked calls and credit card notifications—not a bunch of work to do.',
      },
      {
        title: 'Get Predictable Revenue (Finally)',
        description: 'Right now your revenue is random. A good funnel creates predictable, scalable growth. You know if you put $1,000 in ads, you get $3,000 out. That\'s a business, not a guessing game.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Map Your Customer Journey',
        description: 'We figure out exactly how someone goes from "I\'ve never heard of you" to "Here\'s my credit card." Then we build a system that guides them through that journey automatically.',
      },
      {
        number: '02',
        title: 'Create Irresistible Content',
        description: 'We build lead magnets, landing pages, and email sequences designed to move prospects from interest to action. Every word is written to convert, not just sound nice.',
      },
      {
        number: '03',
        title: 'Build & Connect Everything',
        description: 'We construct your funnel, integrate it with your CRM and payment systems, and set up automated workflows. Everything talks to everything else seamlessly.',
      },
      {
        number: '04',
        title: 'Test, Optimize, Scale',
        description: 'We monitor conversion rates at every step, run A/B tests, and continuously optimize. Once it\'s dialed in, you can scale it up knowing exactly what ROI to expect.',
      },
    ],
    pricingStartsAt: '$7,500',
    faqItems: [
      {
        question: 'What\'s the difference between a funnel and a regular website?',
        answer: 'A website gives information. A funnel guides people toward a specific action (booking a call, buying a product, scheduling a demo). Funnels are laser-focused on conversion, not just looking pretty.',
      },
      {
        question: 'What kind of funnel do I need?',
        answer: 'Depends on your business model. Lead generation? Application funnel. E-commerce? Tripwire funnel. High-ticket coaching? Webinar funnel. We\'ll recommend what fits your offer and audience.',
      },
      {
        question: 'How long does it take to build?',
        answer: 'Most funnels take 2-4 weeks depending on complexity. Simple lead gen funnels are faster. Full product launch funnels with multiple sequences take longer.',
      },
      {
        question: 'Do you write all the copy?',
        answer: 'Yes. Conversion-focused copywriting is included. Bad copy kills funnels, so we make sure every word is strategically written to move prospects closer to buying.',
      },
      {
        question: 'What platforms do you use?',
        answer: 'We build custom funnels with modern web tech (best performance) or use platforms like ClickFunnels, Kajabi, or others if you prefer. We\'ll recommend the best fit for your needs and budget.',
      },
      {
        question: 'How do you measure if it\'s working?',
        answer: 'We track conversion rates at every stage, cost per lead, customer acquisition cost, and overall ROI. You\'ll know exactly what\'s working and what isn\'t.',
      },
    ],
    relatedServices: ['website-design', 'ai-automation', 'chatbot-integration'],
    testimonial: {
      quote: 'Our old website converted at 8%. The new funnel IntelleadGen built converts at 42%. Same traffic, 5x more customers. Absolute game changer.',
      author: 'David Kim',
      role: 'Founder',
      company: 'Elite Coaching',
    },
    caseStudyHighlight: {
      metric: '42% Conversion Rate',
      description: 'Coaching business increased conversions from 8% to 42% with strategic funnel, generating $200K+ in additional revenue',
    },
    suite: 'Growth',
  },
  'performance-optimization': {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    slug: 'performance-optimization',
    icon: Zap,
    shortDescription: 'Your slow website is costing you 7% conversion for every second',
    longDescription: 'Every second your site takes to load, you lose 7% of potential customers. If your site takes 8 seconds, you\'ve lost half your visitors before they even see your offer.',
    heroTagline: 'Every Second Costs You Money',
    features: [
      'Complete speed audit (we\'ll show you exactly what\'s slow)',
      'Image optimization (most sites have images 10x too large)',
      'Code cleanup and minification (remove the bloat)',
      'Caching strategy (make repeat visits instant)',
      'CDN setup (serve files from servers close to customers)',
      'Database optimization (fix slow queries)',
      'Core Web Vitals fixes (Google\'s ranking factors)',
      'Mobile performance optimization (most sites are terrible on phones)',
      'Third-party script optimization (stop letting ads slow you down)',
      'Ongoing monitoring (stay fast forever)',
    ],
    benefits: [
      {
        title: 'Stop Losing Customers to Slow Load Times',
        description: 'Your site takes 8 seconds to load. Visitors leave after 3. That means you\'re losing 53% of potential customers before they even see what you do. Every extra second costs you real money in lost sales.',
      },
      {
        title: 'Rank Higher in Google',
        description: 'Google uses speed as a ranking factor. Slow sites get buried. Fast sites rank higher. It\'s that simple. Your competitors with faster sites are getting the traffic you should be getting.',
      },
      {
        title: 'Mobile Users Will Actually Stay',
        description: 'Mobile users are even less patient. If your site doesn\'t load in 3 seconds on a phone, they\'re gone. That\'s 60% of your traffic you\'re throwing away because your site is too slow.',
      },
      {
        title: 'Speed Literally Equals Money',
        description: 'Studies show that for every 1-second improvement in load time, conversions increase by 7%. That\'s not theory—that\'s real money. If you\'re doing $50K/month, speed optimization could add $3,500-$7,000 in monthly revenue.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Deep Performance Audit',
        description: 'We run comprehensive speed tests and identify exactly what\'s slowing you down. Images too big? Crappy hosting? Bloated code? We find it all.',
      },
      {
        number: '02',
        title: 'Prioritize the Big Wins',
        description: 'Some fixes give you 5% improvement, others give you 50%. We focus on the changes that will make the biggest impact on your speed and conversions.',
      },
      {
        number: '03',
        title: 'Optimize Everything',
        description: 'We compress images, clean up code, set up caching, implement a CDN, and fix all the technical issues. Your site gets dramatically faster.',
      },
      {
        number: '04',
        title: 'Test & Monitor',
        description: 'We verify improvements across all devices and set up monitoring to ensure your site stays fast. If something slows you down later, we catch it immediately.',
      },
    ],
    pricingStartsAt: '$2,000',
    faqItems: [
      {
        question: 'How much faster will my site actually be?',
        answer: 'Most sites see 40-70% improvement in load times. Exact results depend on your starting point, but slow sites (6-10 seconds) often get down to 2-3 seconds or faster.',
      },
      {
        question: 'Will this mess up my site design?',
        answer: 'Nope. Optimization improves performance without changing how your site looks or works. Visitors won\'t notice anything different except everything loads faster.',
      },
      {
        question: 'How long does this take?',
        answer: 'Most optimization projects are done in 1-2 weeks. We can prioritize urgent fixes and have you noticeably faster within days.',
      },
      {
        question: 'What are Core Web Vitals and why should I care?',
        answer: 'Core Web Vitals are Google\'s metrics for user experience: loading speed, interactivity, and visual stability. Sites that score well rank higher in search. Bad scores hurt your rankings and traffic.',
      },
      {
        question: 'Will my site stay fast or will it get slow again?',
        answer: 'With proper maintenance, your site stays fast. We offer monitoring packages to ensure performance doesn\'t degrade over time. But ongoing maintenance is important.',
      },
      {
        question: 'Can you optimize any website platform?',
        answer: 'Yes. WordPress, custom code, Shopify, Wix, Squarespace—we optimize sites built on any platform. Some platforms have limitations, but we work within them to get you as fast as possible.',
      },
    ],
    relatedServices: ['website-design', 'local-seo', 'website-maintenance'],
    testimonial: {
      quote: 'Our site was taking 8 seconds to load. IntelleadGen got it down to 1.2 seconds. Bounce rate dropped, conversions are up 28%. We should have done this years ago.',
      author: 'Robert Chen',
      role: 'Director',
      company: 'Premium Home Services',
    },
    caseStudyHighlight: {
      metric: '85% Faster Load Time',
      description: 'Home services site reduced load time from 8s to 1.2s, improving conversions by 28% and Google rankings',
    },
    suite: 'Foundation',
  },
  'chatbot-integration': {
    id: 'chatbot-integration',
    name: 'Chatbot Integration',
    slug: 'chatbot-integration',
    icon: MessageSquare,
    shortDescription: 'Stop losing leads at 2 AM while you\'re sleeping',
    longDescription: 'Leads contact you after hours and hire someone else by morning because nobody responded. An AI chatbot captures leads, answers questions, and books appointments 24/7.',
    heroTagline: 'Losing Leads at 2 AM?',
    features: [
      'AI chatbot that sounds human (not a clunky robot)',
      'Answers questions instantly, even at 2 AM',
      'Qualifies leads before wasting your time',
      'Books appointments directly into your calendar',
      'Integrates with your CRM automatically',
      'Multi-language support if you need it',
      'Trained on your specific business and FAQs',
      'Escalates to human when needed',
      'Works on mobile perfectly',
      'Analytics showing what customers actually ask',
    ],
    benefits: [
      {
        title: '24/7 Availability (Never Miss a Lead)',
        description: 'Leads don\'t come in on your schedule. Someone fills out your form at 9 PM and by morning, they\'ve already hired your competitor who responded faster. AI chatbots respond instantly, every single time, even at 2 AM.',
      },
      {
        title: 'Instant Response = More Conversions',
        description: 'Studies show that responding to leads within 5 minutes increases conversion rates by 400%. You can\'t respond that fast manually. AI can. Every time.',
      },
      {
        title: 'Scale Conversations Without Hiring',
        description: 'Your chatbot can handle unlimited conversations simultaneously. No matter how many people contact you, everyone gets instant answers. Try doing that with humans.',
      },
      {
        title: 'Stop Wasting Time on Basic Questions',
        description: 'How much does it cost? What are your hours? Do you serve my area? You\'re answering the same questions all day. Let the bot handle it so you can focus on real conversations that close deals.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Define What the Bot Should Do',
        description: 'We identify what questions your customers ask most and what actions you want the chatbot to take (answer questions, book appointments, qualify leads).',
      },
      {
        number: '02',
        title: 'Train the AI on Your Business',
        description: 'We feed the bot information about your services, pricing, FAQs, and brand voice. It learns to sound like you, not like a generic robot.',
      },
      {
        number: '03',
        title: 'Integrate With Your Systems',
        description: 'We connect the chatbot to your website, CRM, calendar, and any other systems. When someone books an appointment, it flows directly into your calendar automatically.',
      },
      {
        number: '04',
        title: 'Monitor & Improve',
        description: 'We review conversations, see what questions come up most, and continuously refine the bot\'s responses to improve performance and conversion rates.',
      },
    ],
    pricingStartsAt: '$3,500',
    faqItems: [
      {
        question: 'Will it sound like a robot?',
        answer: 'Not at all. Modern AI chatbots use natural language processing and can hold human-like conversations. We train them on your brand voice, so they sound like part of your team.',
      },
      {
        question: 'What happens if the bot can\'t answer something?',
        answer: 'It escalates to a human. The bot knows when to hand off complex questions to real people. You can set it to notify you immediately for urgent inquiries.',
      },
      {
        question: 'Can it really book appointments?',
        answer: 'Yes. It integrates with your calendar, checks availability, and books appointments directly. The customer gets confirmation, and it appears on your calendar instantly.',
      },
      {
        question: 'How long does it take to set up?',
        answer: 'Most implementations take 2-3 weeks from start to launch. This includes training the AI, integrating with your systems, and testing everything thoroughly.',
      },
      {
        question: 'What happens to the conversation data?',
        answer: 'All conversations are stored securely and can be integrated with your CRM. You get analytics showing what questions people ask, conversion rates, and where leads are coming from.',
      },
      {
        question: 'Can I customize how it looks?',
        answer: 'Absolutely. We match the chat widget to your brand colors, style, and positioning preferences. It looks like a natural part of your website.',
      },
    ],
    relatedServices: ['ai-automation', 'website-design', 'funnel-building'],
    testimonial: {
      quote: 'Our chatbot books 15-20 qualified appointments every week on complete autopilot. It\'s like having a full-time sales person who never sleeps and never takes a day off.',
      author: 'Jennifer Adams',
      role: 'Owner',
      company: 'Adams Consulting',
    },
    caseStudyHighlight: {
      metric: '85 Appointments\n/Month',
      description: 'Consulting firm books 85 qualified appointments monthly via chatbot automation, adding $40K+ in monthly revenue',
    },
    suite: 'Growth',
  },
  'website-maintenance': {
    id: 'website-maintenance',
    name: 'Website Maintenance & Support',
    slug: 'website-maintenance',
    icon: Wrench,
    shortDescription: 'Your website is one hack away from disaster',
    longDescription: 'Don\'t wait for your site to go down or get hacked. We monitor, update, and protect your site 24/7 so you never lose sleep—or customers—over tech problems.',
    heroTagline: 'Your Website Is One Hack Away from Disaster',
    features: [
      'Regular software updates (so you don\'t get hacked)',
      'Security monitoring 24/7 (we catch threats before they hit)',
      'Daily backups (your site can be restored in minutes)',
      'Uptime monitoring with 99.9% guarantee',
      'Performance monitoring (stay fast forever)',
      'Content updates included (limited hours monthly)',
      'Bug fixes and troubleshooting',
      'Real human technical support',
      'Monthly reports showing everything we did',
      'Emergency support when something breaks',
    ],
    benefits: [
      {
        title: 'Sleep Soundly (No More 3 AM Panic)',
        description: 'Ever wake up to an email saying your site is down? Or worse—find out days later when customers tell you? We monitor 24/7 and fix issues before you even know they exist. No more tech-induced panic attacks.',
      },
      {
        title: 'One Hack Could Destroy Your Business',
        description: 'A security breach exposes customer data, ruins your reputation, and could literally put you out of business. We update security patches, monitor threats, and keep hackers out. Prevention is 100x cheaper than recovery.',
      },
      {
        title: 'Prevent Small Problems from Becoming Catastrophes',
        description: 'That little bug you ignored? It\'s now causing checkout failures and costing you thousands. Proactive maintenance catches and fixes issues before they snowball into expensive disasters.',
      },
      {
        title: 'Make Updates Yourself Without Fear',
        description: 'Want to change some text? Add a photo? You shouldn\'t need to call someone every time. Our maintenance includes showing you how to make simple updates yourself. For bigger stuff, we handle it.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Initial Site Assessment',
        description: 'We audit your site, identify any existing issues, and document everything. You\'ll know exactly what shape your site is in and what needs attention.',
        subTopics: ['Security Vulnerability Scan', 'Performance Baseline Audit', 'Content Inventory']
      },
      {
        number: '02',
        title: 'Set Up Monitoring & Backups',
        description: 'We implement automated monitoring, security scanning, and daily backups. Your site is protected 24/7 from day one.',
        subTopics: ['Real-time Uptime Monitoring', 'Automated Daily Backups', 'Threat Detection Systems']
      },
      {
        number: '03',
        title: 'Ongoing Maintenance',
        description: 'We perform regular updates, handle content changes, fix any bugs, and deal with technical issues as they arise. You focus on your business.',
        subTopics: ['Core Software Updates', 'Plugin/Theme Management', 'Minor Content Edits']
      },
      {
        number: '04',
        title: 'Monthly Reporting',
        description: 'You get monthly reports showing uptime, performance, updates made, and overall site health. Complete transparency.',
        subTopics: ['Performance Metrics', 'Security Scan Results', 'Activity Log']
      },
    ],
    pricingStartsAt: '$250/month',
    faqItems: [
      {
        question: 'What\'s actually included in maintenance?',
        answer: 'Software updates, security monitoring, daily backups, uptime monitoring, performance checks, limited content updates (varies by plan), bug fixes, and technical support when you need it.',
      },
      {
        question: 'How fast do you respond if something breaks?',
        answer: 'Critical issues (site down, security breach) get 1-hour response time. Non-urgent issues typically handled within 24 hours. You\'re never left hanging.',
      },
      {
        question: 'Can you maintain a site you didn\'t build?',
        answer: 'Yes. We maintain sites built on any platform, whether we built it or someone else did. As long as it\'s accessible, we can maintain it.',
      },
      {
        question: 'What if I need more content updates than included?',
        answer: 'We offer additional support hours at discounted rates for maintenance clients. Or we can upgrade you to a plan with more included hours.',
      },
      {
        question: 'Do you provide hosting too?',
        answer: 'We can provide hosting, or maintain your site on your existing hosting. Both options work. We\'ll recommend what makes sense for your situation.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes. Contracts are month-to-month with no long-term commitment required. Though we offer discounts for annual plans if you want to lock in savings.',
      },
    ],
    relatedServices: ['website-design', 'performance-optimization', 'local-seo'],
    testimonial: {
      quote: 'I haven\'t worried about my website in over a year. IntelleadGen handles everything perfectly. It\'s one less thing I have to think about, and that peace of mind is priceless.',
      author: 'Marcus Williams',
      role: 'Owner',
      company: 'Williams & Associates Law Firm',
    },
    suite: 'Foundation',
  },
  'enterprise-ai': {
    id: 'enterprise-ai',
    name: 'Enterprise AI & Custom SaaS',
    slug: 'enterprise-ai',
    icon: Bot,
    shortDescription: 'Custom AI infrastructure for industry leaders',
    longDescription: 'We build proprietary AI assets and custom software that transform your business into an untouchable market leader.',
    heroTagline: 'Build Your Own Proprietary AI Fortress',
    features: [
      'Custom AI Agent Development',
      'AI Skills & Functional Capabilities',
      'Proprietary SaaS Tool Incubation',
      'Enterprise-Wide AI Integration',
      'Nationwide Authority Architecture',
      'Custom LLM Fine-Tuning',
      'Predictive Revenue Systems',
    ],
    benefits: [
      {
        title: 'Own the Technology, Own the Market',
        description: 'Stop using the same tools as your competitors. We build proprietary software assets that become the backbone of your business, increasing company valuation and market defensibility.',
      },
      {
        title: 'Ultimate Leverage Through Custom Agents',
        description: 'AI agents that don\'t just chat, but execute. We build custom infrastructure that handles entire departments, from nuanced legal intake to complex medical diagnosis assistance.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Architectural Discovery',
        description: 'Deep dive into your business bottlenecks to find where a custom AI asset will drive the highest 10x ROI.',
        subTopics: ['Revenue Leakage Audit', 'Tech Stack Evaluation', 'AI Opportunity Mapping']
      },
      {
        number: '02',
        title: 'MVP Incubation',
        description: 'We build the core logic and interface of your custom AI or SaaS tool in a rapid 6-week cycle.',
        subTopics: ['Logic Engine Prototyping', 'Rapid API Integration', 'UX/UI Feedback Loops']
      },
      {
        number: '03',
        title: 'Enterprise Hardening',
        description: 'Scale the tool across your entire organization with robust security and direct API integrations.',
        subTopics: ['Security & Compliance', 'Organization Wide Rollout', 'Predictive Monitoring']
      },
    ],
    pricingStartsAt: '$25,000',
    faqItems: [
      {
        question: 'Do I own the code and the AI assets?',
        answer: 'Yes. For Domination-tier projects, you own the intellectual property of the custom software and proprietary AI agents we build for you. These become long-term assets on your balance sheet.'
      },
      {
        question: 'How long does a typical custom build take?',
        answer: 'We operate in rapid cycles. An MVP (Minimum Viable Product) is usually ready in 6-8 weeks. Full enterprise integration and "hardening" typically follow in the subsequent 2-3 months.'
      },
      {
        question: 'Is my data secure and private?',
        answer: 'Absolutely. We prioritize data sovereignty. Unlike public tools, we build on private cloud infrastructure and use fine-tuned models that do not leak your proprietary data back into public training sets.'
      },
      {
        question: 'How do these assets integrate with my existing tech?',
        answer: 'We specialize in deep API integrations. Whether you use specialized legal software, medical EMRs, or custom ERPs, our AI agents are designed to "speak" to your existing stack seamlessly.'
      },
      {
        question: 'What is the "Domination" tier ROI?',
        answer: 'Domination-tier projects are designed for 10x returns. We focus on replacing massive human overhead with proprietary tech or creating new revenue-generating SaaS products that you own.'
      }
    ],
    relatedServices: ['ai-automation', 'chatbot-integration', 'website-design'],
    testimonial: {
      quote: 'Building our proprietary intake system was the turning point. We no longer compete on price; we compete on technology.',
      author: 'Jonathan Reed',
      role: 'Senior Partner',
      company: 'Reed & Associates',
    },
    suite: 'Domination',
  },
};

export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData);
};

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData[slug];
};

export const getRelatedServices = (serviceId: string): ServiceData[] => {
  const service = servicesData[serviceId];
  if (!service) return [];

  return service.relatedServices
    .map(id => servicesData[id])
    .filter(Boolean);
};
