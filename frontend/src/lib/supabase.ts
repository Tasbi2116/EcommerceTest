import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.');
}

// Ensure the frontend only ever uses the ANON key, not the Service Role key!
// RLS (Row Level Security) handles permissions when we query via this frontend client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
