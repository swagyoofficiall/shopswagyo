import { supabase } from '../lib/supabase';

export const getProducts = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Supabase fetch error:', error);
    return [];
  }
  return data || [];
};
