import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT) || 587;
const secure = process.env.SMTP_SECURE === "true";
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.FROM_EMAIL;
const to = process.env.TO_EMAIL || from;


export async function sendEmail({ name, email, phone, company, service, budget, message }) {
  // If SMTP not configured, fall back to Ethereal test account for local testing
  let transporter;
  let usingTestAccount = false;
  if (!host || !user || !pass) {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
    usingTestAccount = true;
  } else {
    transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  }

  const subject = `New contact form submission from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ""}\nCompany: ${company || ""}\nService: ${service || ""}\nBudget: ${budget || ""}\n\nMessage:\n${message}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || ""}</p>
    <p><strong>Company:</strong> ${company || ""}</p>
    <p><strong>Service:</strong> ${service || ""}</p>
    <p><strong>Budget:</strong> ${budget || ""}</p>
    <hr />
    <p>${message}</p>
  `;

  const info = await transporter.sendMail({
    from: from || (user ? `${user}` : "no-reply@example.com"),
    to,
    subject,
    text,
    html,
  });

  if (usingTestAccount) {
    // Log a preview URL when using Ethereal test account
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  }
  return info;
 }
