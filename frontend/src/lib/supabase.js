import { createClient } from '@supabase/supabase-js';

// Stampiamo TUTTE le variabili d'ambiente che Vite riesce a vedere
console.log("TUTTE LE VARIABILI:", import.meta.env);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("ERRORE: Variabili mancanti o vuote.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);