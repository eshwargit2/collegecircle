import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || '/api';

// Log API configuration (helpful for debugging)
if (import.meta.env.DEV) {
    console.log('API Base URL:', apiUrl);
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
    return config;
});

// Handle 401 globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Log errors in development
        if (import.meta.env.DEV) {
            console.error('API Error:', error.message);
            console.error('Response:', error.response?.data);
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
