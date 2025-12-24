# Lead Magnet Feature - Free Website Audit

## Overview
This implementation adds a high-converting lead magnet to your homepage that captures leads who aren't ready to book a discovery call yet.

## What It Does
- **Captures leads early** in their buyer journey with a low-friction offer
- **Stores submissions** in Supabase for easy follow-up
- **Beautiful design** that stands out and converts
- **Success state** that sets expectations and builds trust

## Setup Instructions

### 1. Create the Supabase Table
Run the migration file to create the `lead_magnet_submissions` table:

```bash
# If you have Supabase CLI installed:
supabase db push

# Or manually run the SQL in your Supabase dashboard:
# Go to SQL Editor and run the contents of:
# supabase/migrations/create_lead_magnet_table.sql
```

### 2. The Lead Magnet is Already Active
The `<LeadMagnetSection />` component is already added to your homepage right after the "What We Do" section.

## How to Fulfill Audit Requests

When someone submits the form, you'll need to:

1. **Check Supabase** for new submissions
   - Go to your Supabase dashboard
   - Navigate to Table Editor > `lead_magnet_submissions`
   - Sort by `created_at` (newest first)

2. **Perform the audit** (manual or automated):
   - **Speed Test**: Use Google PageSpeed Insights or GTmetrix
   - **SEO Check**: Use Screaming Frog, Ahrefs, or Semrush
   - **AI Opportunities**: Review their current workflows

3. **Send the report** via email:
   - Create a simple template in Google Docs or Notion
   - Include specific, actionable findings
   - Add 2-3 "quick wins" they can implement immediately
   - End with a CTA to book a discovery call

### Email Template Example:
```
Subject: Your Free Website Audit Results - [Company Name]

Hi [Name],

Thanks for requesting an audit! I analyzed [website URL] and found some interesting opportunities.

🚨 KEY FINDINGS:

1. Speed: Your site loads in 6.2 seconds (should be under 2s)
   - This is likely costing you 40%+ of visitors

2. SEO: You're missing these critical elements...
   [specific findings]

3. AI Opportunities: You could automate...
   [specific recommendations]

💡 QUICK WINS (implement today):
- [Specific, actionable item]
- [Specific, actionable item]

Want to dive deeper? Let's talk: [Calendly link]

Best,
[Your name]
```

## Future Enhancements (Optional)

1. **Automated Email**: Integrate with Resend, SendGrid, or ConvertKit
2. **Automated Audit**: Use Lighthouse API + GPT-4 to generate audits automatically
3. **Lead Scoring**: Prioritize high-value leads based on website quality/industry
4. **Drip Campaign**: Add to email sequence for nurturing

## Metrics to Track
- **Conversion Rate**: Visitors → Lead magnet submissions
- **Follow-up Rate**: Submissions → Discovery calls booked
- **Close Rate**: Discovery calls → Paying clients

Aim for:
- 5-10% conversion rate on lead magnet
- 30-50% of audits leading to discovery calls
- 20-30% of discovery calls closing

## Questions?
Check the component code in `src/components/LeadMagnetSection.tsx`
