// Main configuration file
// Tries to use local config first, then falls back to environment variables

let localConfig = null;

// Try to import local config (only exists in development, not in git)
try {
    const module = await import('./config.local.js');
    localConfig = module.localConfig;
    console.log('✓ Using local configuration');
} catch (e) {
    console.log('ℹ Using environment variables');
}

// Export configuration with fallback priority:
// 1. Local config file (development)
// 2. Environment variables (production build)
// 3. Default values (fallback)
export const config = {
    apiUrl: localConfig?.apiUrl || import.meta.env.VITE_API_URL || '/api',
    supabase: {
        url: localConfig?.supabase?.url || import.meta.env.VITE_SUPABASE_URL || '',
        anonKey: localConfig?.supabase?.anonKey || import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    }
};

// Validation and warnings
if (!config.supabase.url || !config.supabase.anonKey) {
    console.error('⚠️ Missing Supabase configuration!');
}

export default config;
