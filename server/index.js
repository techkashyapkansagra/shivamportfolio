/* eslint-env node */
import express from "express";
import cors from "cors";
import "dotenv/config";
import { sendEmail } from "./mailer.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// CORS configuration - allow all origins in production (same domain) or specific origins
const corsOptions = {
  origin: process.env.CORS_ORIGIN || true, // Allow all origins (same domain in Vercel)
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// API route handler
const handleSendEmail = async (req, res) => {
  console.log("Received email request:", { 
    name: req.body?.name, 
    email: req.body?.email,
    hasMessage: !!req.body?.message 
  });
  
  const { name, email, phone, company, service, budget, message } = req.body;
  if (!name || !email || !message) {
    console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    console.log("Attempting to send email...");
    await sendEmail({ name, email, phone, company, service, budget, message });
    console.log("Email sent successfully");
    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    console.error("Error details:", {
      message: err?.message,
      stack: err?.stack,
      smtpConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
    });
    res.status(500).json({ 
      error: "Failed to send email",
      details: process.env.NODE_ENV === "development" ? err?.message : undefined
    });
  }
};

// API routes - Vercel routes /api/* to api/index.js, so we need full paths
app.post("/api/send-email", handleSendEmail);
app.post("/send-email", handleSendEmail);

// Health check routes
const handleHealth = (req, res) => {
  res.json({ 
    ok: true, 
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.VERCEL ? "vercel" : "local"
  });
};
app.get("/api/health", handleHealth);
app.get("/health", handleHealth);

// Serve static files from dist folder (built frontend)
const distPath = join(__dirname, "..", "dist");
if (existsSync(distPath)) {
  app.use(express.static(distPath));
  
  // Serve index.html for all non-API routes (SPA fallback)
  app.get("*", (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ error: "Not found" });
    }
    res.sendFile(join(distPath, "index.html"));
  });
} else {
  // If dist folder doesn't exist, just show a message
  app.get("/", (req, res) => {
    res.json({ 
      message: "Frontend not built. Run 'npm run build' first.",
      api: "API is running",
      uptime: process.uptime()
    });
  });
}

// Export app for Vercel serverless functions
export default app;

// Only start server if running directly (not as Vercel serverless function)
// Check if this file is being run directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` || 
                     process.argv[1]?.endsWith('server/index.js') ||
                     (!process.env.VERCEL && !process.env.VERCEL_ENV);

if (isMainModule) {
  process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err);
  });
  process.on("unhandledRejection", (reason) => {
    console.error("Unhandled rejection:", reason);
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`SMTP configured: ${process.env.SMTP_HOST ? "yes" : "no"} | TO_EMAIL: ${process.env.TO_EMAIL ? "yes" : "no"}`);
  });
}
