// Main configuration file
// Uses environment variables for all environments

// Export configuration with fallback priority:
// 1. Environment variables (set via .env locally or GitHub Secrets in production)
// 2. Default values (fallback)
export const config = {
    apiUrl: import.meta.env.VITE_API_URL || '/api',
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || '',
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    }
};

// Log configuration status
if (import.meta.env.DEV) {
    console.log('=== Configuration Loaded ===');
    console.log('API URL:', config.apiUrl);
    console.log('Supabase URL:', config.supabase.url || '⚠️ Not set');
    console.log('Supabase Key:', config.supabase.anonKey ? '✓ Set' : '⚠️ Not set');
}

// Validation and warnings
if (!config.supabase.url || !config.supabase.anonKey) {
    console.error('⚠️ Missing Supabase configuration! Check your .env file or GitHub Secrets.');
}

export default config;
