import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://eqzgaagbutgegyuoprco.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_Rtz8p4QiQBbKCZ5DxsjujQ_fK5Z0RkQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);