// Environment Configuration Check
// This file helps verify that environment variables are properly loaded

export const checkEnvConfig = () => {
    const config = {
        API_URL: import.meta.env.VITE_API_URL,
        SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
        SUPABASE_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? '✓ Set' : '✗ Missing',
        MODE: import.meta.env.MODE,
        DEV: import.meta.env.DEV,
        PROD: import.meta.env.PROD,
    };

    console.log('=== Environment Configuration ===');
    console.log('Mode:', config.MODE);
    console.log('API URL:', config.API_URL || '⚠️ Not set (will use /api)');
    console.log('Supabase URL:', config.SUPABASE_URL || '⚠️ Not set');
    console.log('Supabase Key:', config.SUPABASE_KEY);
    console.log('================================');

    // Warn if critical env vars are missing in production
    if (config.PROD) {
        if (!config.API_URL) {
            console.warn('⚠️ VITE_API_URL is not set in production!');
        }
        if (!config.SUPABASE_URL || config.SUPABASE_KEY === '✗ Missing') {
            console.warn('⚠️ Supabase configuration is incomplete!');
        }
    }

    return config;
};

export default checkEnvConfig;
