-- Create lead_magnet_submissions table
CREATE TABLE IF NOT EXISTS lead_magnet_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  website_url TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  audit_type TEXT NOT NULL DEFAULT 'website-performance-ai-audit',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_lead_magnet_email ON lead_magnet_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_lead_magnet_created ON lead_magnet_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE lead_magnet_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the form submission)
CREATE POLICY "Allow public inserts" ON lead_magnet_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow admins to read everything
CREATE POLICY "Allow authenticated users to read" ON lead_magnet_submissions
  FOR SELECT
  TO authenticated
  USING (true);

COMMENT ON TABLE lead_magnet_submissions IS 'Stores lead magnet form submissions for free website audits';
