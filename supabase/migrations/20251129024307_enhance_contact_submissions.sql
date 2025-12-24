/*
  # Enhance Contact Submissions for Lead Qualification

  1. New Columns
    - `company_name` (text) - Business/company name
    - `phone` (text, optional) - Contact phone number
    - `industry` (text) - Industry/business type
    - `company_size` (text) - Number of employees
    - `annual_revenue` (text) - Annual revenue bracket
    - `budget_range` (text) - Project budget range
    - `timeline` (text) - Project timeline
    - `current_website` (text, optional) - Current website URL
    - `services_interested` (text array) - Selected services
    - `primary_goal` (text, optional) - Main business goal
    - `biggest_pain_point` (text, optional) - Current challenges
    - `how_heard` (text, optional) - How they found us
    - `lead_score` (integer, default 0) - Automated lead quality score
    - `lead_status` (text, default 'new') - Lead qualification status
    - `notes` (text, optional) - Internal admin notes
    - `form_version` (text, default 'v2-multistep') - Form version tracking
    - `completion_time_seconds` (integer, optional) - Time to complete form
    - `form_started_at` (timestamptz, optional) - When form was started
    - `qualification_data` (jsonb, optional) - Flexible data storage

  2. Updates
    - Make `business` column optional (some data now in other fields)
    - Add indexes for common queries
    - Update RLS policies if needed

  3. Notes
    - Maintains backward compatibility with existing data
    - All new columns are optional or have defaults
    - Lead scoring enables automatic prioritization
*/

-- Add new columns to contact_submissions table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'company_name'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN company_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'phone'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'industry'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN industry text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'company_size'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN company_size text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'annual_revenue'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN annual_revenue text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'budget_range'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN budget_range text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'timeline'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN timeline text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'current_website'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN current_website text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'services_interested'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN services_interested text[];
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'primary_goal'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN primary_goal text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'biggest_pain_point'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN biggest_pain_point text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'how_heard'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN how_heard text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'lead_score'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN lead_score integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'lead_status'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN lead_status text DEFAULT 'new';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'notes'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN notes text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'form_version'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN form_version text DEFAULT 'v2-multistep';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'completion_time_seconds'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN completion_time_seconds integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'form_started_at'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN form_started_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'qualification_data'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN qualification_data jsonb;
  END IF;
END $$;

-- Make business column optional
ALTER TABLE contact_submissions ALTER COLUMN business DROP NOT NULL;

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_score ON contact_submissions(lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_status ON contact_submissions(lead_status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_industry ON contact_submissions(industry);

-- Add comment to table
COMMENT ON TABLE contact_submissions IS 'Enhanced contact form submissions with lead qualification data';
