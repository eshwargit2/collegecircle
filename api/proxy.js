// Vercel Serverless Function - API Proxy to bypass CORS
export default async function handler(req, res) {
    const API_BASE = 'https://campus-server-three.vercel.app/api';
    
    // Allow requests from your domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    try {
        // Get the path from query parameter
        const path = req.url.replace('/api/proxy', '');
        const targetUrl = `${API_BASE}${path}`;
        
        // Forward the request
        const response = await fetch(targetUrl, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
                ...(req.headers.authorization && { 'Authorization': req.headers.authorization })
            },
            ...(req.method !== 'GET' && req.method !== 'HEAD' && { body: JSON.stringify(req.body) })
        });
        
        const data = await response.json();
        return res.status(response.status).json(data);
        
    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({ error: 'Proxy error', message: error.message });
    }
}
