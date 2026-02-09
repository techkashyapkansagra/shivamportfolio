// Vercel serverless function wrapper for Express app
// This handles all /api/* routes that don't have specific handlers
import app from "../server/index.js";

export default function handler(req, res) {
  return app(req, res);
}

