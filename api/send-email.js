/* eslint-env node */
// Vercel serverless function for send-email endpoint
// Vercel automatically routes /api/send-email to this file
import { sendEmail } from "../server/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
}

