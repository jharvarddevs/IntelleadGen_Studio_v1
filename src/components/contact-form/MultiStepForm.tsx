import React, { useState, useEffect } from 'react';
import { FormProgress } from './FormProgress';
import { SelectableCard } from './SelectableCard';
import { Button } from '../Button';
import {
  Stethoscope,
  Scale,
  Home,
  Hammer,
  Briefcase,
  Sparkles,
  Users,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Loader,
  CheckCircle,
  Zap,
  Globe,
  Bot,
  TrendingUp,
  MapPin,
  Filter,
} from 'lucide-react';
import { calculateLeadScore } from '../../lib/leadScoring';
import { supabase } from '../../lib/supabase';

interface FormData {
  name: string;
  industry: string;
  companySize: string;
  annualRevenue: string;
  companyName: string;
  servicesInterested: string[];
  timeline: string;
  budgetRange: string;
  email: string;
  phone: string;
  currentWebsite: string;
  biggestPainPoint: string;
  howHeard: string;
  interestedInPlatform: boolean;
}

const TOTAL_STEPS = 6;

export const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formStartTime] = useState(Date.now());

  const [formData, setFormData] = useState<FormData>({
    name: '',
    industry: '',
    companySize: '',
    annualRevenue: '',
    companyName: '',
    servicesInterested: [],
    timeline: '',
    budgetRange: '$15K',
    email: '',
    phone: '',
    currentWebsite: '',
    biggestPainPoint: '',
    howHeard: '',
    interestedInPlatform: false,
  });

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    localStorage.setItem('contactFormStep', currentStep.toString());
  }, [formData, currentStep]);

  // Restore from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    const savedStep = localStorage.getItem('contactFormStep');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to restore form data');
      }
    }
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return formData.industry.length > 0;
      case 3:
        return formData.companySize.length > 0 && formData.annualRevenue.length > 0;
      case 4:
        return formData.servicesInterested.length > 0;
      case 5:
        return formData.timeline.length > 0 && formData.budgetRange.length > 0;
      case 6:
        return formData.email.trim().length > 0 && formData.email.includes('@');
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setLoading(true);
    setError('');

    try {
      const completionTime = Math.floor((Date.now() - formStartTime) / 1000);
      const leadScoreData = calculateLeadScore({
        annualRevenue: formData.annualRevenue,
        budgetRange: formData.budgetRange,
        timeline: formData.timeline,
        servicesInterested: formData.servicesInterested,
        currentWebsite: formData.currentWebsite,
        biggestPainPoint: formData.biggestPainPoint,
      });

      const { error: submitError } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company_name: formData.companyName || null,
        industry: formData.industry,
        company_size: formData.companySize,
        annual_revenue: formData.annualRevenue,
        budget_range: formData.budgetRange,
        timeline: formData.timeline,
        current_website: formData.currentWebsite || null,
        services_interested: formData.servicesInterested,
        biggest_pain_point: formData.biggestPainPoint || null,
        how_heard: formData.howHeard || null,
        interested_in_platform: formData.interestedInPlatform,
        lead_score: leadScoreData.score,
        lead_status: leadScoreData.status,
        form_version: 'v2-multistep',
        completion_time_seconds: completionTime,
        form_started_at: new Date(formStartTime).toISOString(),
        business: `${formData.industry} - ${formData.servicesInterested.join(', ')}`,
      });

      if (submitError) throw submitError;

      setSubmitted(true);
      localStorage.removeItem('contactFormData');
      localStorage.removeItem('contactFormStep');
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again or email us at hello@intelleadgen.io');
    } finally {
      setLoading(false);
    }
  };

  const industries = [
    { value: 'Medical/Healthcare', icon: Stethoscope },
    { value: 'Legal Services', icon: Scale },
    { value: 'Real Estate', icon: Home },
    { value: 'Construction/Contracting', icon: Hammer },
    { value: 'Professional Services', icon: Briefcase },
    { value: 'MedSpa/Wellness', icon: Sparkles },
    { value: 'Coaching/Consulting', icon: Users },
    { value: 'Other', icon: HelpCircle },
  ];

  const services = [
    { value: 'New Website', icon: Globe },
    { value: 'Website Redesign', icon: Zap },
    { value: 'AI Automation', icon: Bot },
    { value: 'SEO Optimization', icon: TrendingUp },
    { value: 'Google Business', icon: MapPin },
    { value: 'Funnel Building', icon: Filter },
    { value: 'Maintenance', icon: HelpCircle },
    { value: 'Not Sure Yet', icon: HelpCircle },
  ];

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-2xl mx-auto animate-scale-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
        <p className="text-lg text-primary-600 mb-6">
          We've received your information and will get back to you within 24 hours to schedule your
          discovery call.
        </p>
        <div className="bg-primary-50 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-semibold text-black mb-3">What happens next?</h3>
          <ol className="space-y-2 text-primary-700">
            <li className="flex items-start space-x-2">
              <span className="font-semibold">1.</span>
              <span>We'll review your information (within 24 hours)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">2.</span>
              <span>Schedule your free 30-minute discovery call</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">3.</span>
              <span>Receive your custom proposal</span>
            </li>
          </ol>
        </div>
        <p className="text-sm text-primary-600 mb-6">
          Check your email for a confirmation message.
        </p>
        <Button onClick={() => window.location.reload()} variant="secondary">
          Submit Another Form
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-3xl mx-auto">
      <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="mb-8">
        {/* Step 1: Name */}
        {currentStep === 1 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Let's get to know each other
            </h2>
            <p className="text-primary-600 mb-8">What should we call you?</p>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && canProceed() && handleNext()}
              placeholder="Your name"
              autoFocus
              className="w-full px-6 py-4 text-lg border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>
        )}

        {/* Step 2: Industry */}
        {currentStep === 2 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              What industry are you in?
            </h2>
            <p className="text-primary-600 mb-8">This helps us understand your business better</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <SelectableCard
                  key={industry.value}
                  icon={industry.icon}
                  label={industry.value}
                  selected={formData.industry === industry.value}
                  onClick={() => {
                    updateFormData('industry', industry.value);
                    setTimeout(() => handleNext(), 500);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Business Size */}
        {currentStep === 3 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Tell us about your business
            </h2>
            <p className="text-primary-600 mb-6">This helps us tailor our recommendations</p>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-black mb-3">
                Company name (optional)
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                placeholder="Your company name"
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-black mb-3">Company size</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['Solo', '2-5', '6-15', '16-50', '51+'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => updateFormData('companySize', size)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${formData.companySize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-primary-200 hover:border-black'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Annual revenue
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Under $250K', '$250K-$500K', '$500K-$1M', '$1M-$5M', '$5M+'].map((revenue) => (
                  <button
                    key={revenue}
                    type="button"
                    onClick={() => updateFormData('annualRevenue', revenue)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-left ${formData.annualRevenue === revenue
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-primary-200 hover:border-black'
                      }`}
                  >
                    {revenue}
                  </button>
                ))}
              </div>
            </div>

            {formData.annualRevenue && ['$250K-$500K', '$500K-$1M', '$1M-$5M', '$5M+'].includes(formData.annualRevenue) && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Great! You're in our ideal client range.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Services */}
        {currentStep === 4 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              What services interest you?
            </h2>
            <p className="text-primary-600 mb-2">Select all that apply</p>
            {formData.servicesInterested.length > 0 && (
              <p className="text-sm text-black font-medium mb-6">
                {formData.servicesInterested.length} service{formData.servicesInterested.length !== 1 ? 's' : ''} selected
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <SelectableCard
                  key={service.value}
                  icon={service.icon}
                  label={service.value}
                  selected={formData.servicesInterested.includes(service.value)}
                  onClick={() => toggleService(service.value)}
                  multiSelect
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Timeline & Budget */}
        {currentStep === 5 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              What's your timeline?
            </h2>
            <p className="text-primary-600 mb-6">When do you need this done?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { value: 'ASAP (1-2 weeks)', desc: 'Need it immediately' },
                { value: 'Soon (1-2 months)', desc: 'In the next couple months' },
                { value: 'Planning (3-6 months)', desc: 'Planning ahead' },
                { value: 'Just exploring', desc: 'Gathering information' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('timeline', option.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${formData.timeline === option.value
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-primary-200 hover:border-black'
                    }`}
                >
                  <div className="font-semibold mb-1">{option.value}</div>
                  <div className={`text-sm ${formData.timeline === option.value ? 'text-white/80' : 'text-primary-600'}`}>
                    {option.desc}
                  </div>
                </button>
              ))}
            </div>

            <h3 className="text-xl font-bold text-black mb-3">What's your investment range?</h3>
            <p className="text-sm text-primary-600 mb-6">
              Most projects range from $10K-$25K
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['$5K', '$10K', '$15K', '$25K', '$50K+', 'Custom'].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => updateFormData('budgetRange', budget)}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${formData.budgetRange === budget
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-primary-200 hover:border-black'
                    }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Contact Info */}
        {currentStep === 6 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              How can we reach you?
            </h2>
            <p className="text-primary-600 mb-8">We'll be in touch within 24 hours</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="(215) 809-2808"
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Current website (optional)
                </label>
                <input
                  type="url"
                  value={formData.currentWebsite}
                  onChange={(e) => updateFormData('currentWebsite', e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  What's your biggest challenge right now? (optional)
                </label>
                <textarea
                  value={formData.biggestPainPoint}
                  onChange={(e) => updateFormData('biggestPainPoint', e.target.value)}
                  placeholder="Tell us what you're struggling with..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  How did you hear about us? (optional)
                </label>
                <select
                  value={formData.howHeard}
                  onChange={(e) => updateFormData('howHeard', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                >
                  <option value="">Select one...</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-4 border-t-2 border-primary-100">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.interestedInPlatform}
                    onChange={(e) => updateFormData('interestedInPlatform', e.target.checked)}
                    className="mt-1 w-5 h-5 text-black border-2 border-primary-300 rounded focus:ring-2 focus:ring-black cursor-pointer"
                  />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-black group-hover:text-primary-600 transition-colors">
                      I'm also interested in your self-service platform (intelleadgen.io)
                    </span>
                    <p className="text-xs text-primary-600 mt-1">
                      Get info about our DIY lead generation platform alongside your agency quote
                    </p>
                  </div>
                </label>
              </div>

              <p className="text-xs text-primary-500">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        {currentStep > 1 && (
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={loading}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        )}

        {currentStep < TOTAL_STEPS ? (
          <Button
            onClick={handleNext}
            disabled={!canProceed() || loading}
            className={currentStep === 1 ? 'ml-auto' : ''}
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed() || loading}
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit
                <CheckCircle className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
