/*
  # Add Platform Interest Field

  1. Changes
    - Add `interested_in_platform` boolean field to `contact_submissions` table
    - Default value is `false`
    - Field tracks whether contact is interested in the intelleadgen.io SaaS platform

  2. Purpose
    - Enable tracking of dual interest (agency services + self-service platform)
    - Support lead routing for platform-interested prospects
    - Facilitate cross-promotion analytics
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'interested_in_platform'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN interested_in_platform boolean DEFAULT false;
  END IF;
END $$;