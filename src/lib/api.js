import axios from 'axios';
import { config } from '../config/config.js';

const apiUrl = config.apiUrl;

// Log API configuration (helpful for debugging)
if (import.meta.env.DEV) {
    console.log('🔧 API Configuration:', {
        baseURL: apiUrl,
        mode: import.meta.env.MODE,
        dev: import.meta.env.DEV
    });
}

const api = axios.create({
    baseURL: apiUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('cc_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Debug logging
    if (import.meta.env.DEV) {
        console.log('🔥 Making request:', {
            method: config.method,
            baseURL: config.baseURL,
            url: config.url,
            fullURL: config.baseURL + config.url
        });
    }
    
    return config;
});

// Handle 401 globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Log errors in development
        if (import.meta.env.DEV) {
            console.error('❌ API Error:', error.message);
            console.error('Error Code:', error.code);
            console.error('Request:', error.config?.url);
            console.error('Response Status:', error.response?.status);
            console.error('Response Data:', error.response?.data);
            
            // Network error details
            if (!error.response) {
                console.error('⚠️ Network Error - No response received');
                console.error('Attempted URL:', error.config?.baseURL + error.config?.url);
            }
        }
        
        if (error.response?.status === 401) {
            localStorage.removeItem('cc_token');
            localStorage.removeItem('cc_user');
            window.location.href = '/login'; 
        }
        return Promise.reject(error); 
    }
);

export default api;
