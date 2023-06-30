import { createClient } from '@supabase/supabase-js';

const URL = 'https://keghqpfzuurmszzyfyrx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZ2hxcGZ6dXVybXN6enlmeXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNTEyMTAsImV4cCI6MjAwMzcyNzIxMH0.ItkXPi7HE2PD-aT7gHKGpyUimnG6AAiHTjzCQq39jfo';

export default createClient(URL, API_KEY);