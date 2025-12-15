import express from "express";
import cors from "cors";
import "dotenv/config";
import { sendEmail } from "./mailer.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, company, service, budget, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    await sendEmail({ name, email, phone, company, service, budget, message });
    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// health check
app.get("/", (req, res) => res.json({ ok: true, uptime: process.uptime() }));

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
