import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzqhrqmvueyaeacxvynt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cWhycW12dWV5YWVhY3h2eW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODU1NjcsImV4cCI6MTk5Mjc2MTU2N30.OAtnGVjtA1rEDT7EFrm8ZfMaNt7YCpx-kkR3z4pJsJs'
export const supabase = createClient(supabaseUrl, supabaseKey)