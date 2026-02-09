/* eslint-env node */
// Vercel serverless function for health check endpoint
// Vercel automatically routes /api/health to this file
export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  res.json({ 
    ok: true, 
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: "vercel"
  });
}

