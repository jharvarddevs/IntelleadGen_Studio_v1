CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_name TEXT NOT NULL,
    page_path TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    user_agent TEXT,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for tracking
CREATE POLICY "Allow anonymous tracking" ON public.analytics_events
    FOR INSERT TO anon
    WITH CHECK (true);

-- Only allow authenticated users to view logs
CREATE POLICY "Allow authenticated users to view analytics" ON public.analytics_events
    FOR SELECT TO authenticated
    USING (true);
