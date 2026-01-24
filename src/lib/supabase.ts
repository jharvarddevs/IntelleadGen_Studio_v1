import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Database features will be disabled.');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  business: string;
  status?: string;
  created_at?: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name,
        email: data.email,
        business: data.business,
      },
    ])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return result;
};

export const trackEvent = async (eventName: string, pagePath: string, metadata: object = {}) => {
  try {
    const { data, error } = await supabase.functions.invoke('track-event', {
      body: { event_name: eventName, page_path: pagePath, metadata },
    });
    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Failed to track event:', err);
  }
};
