**Server (SMTP) Setup**

This project includes a small Express server for sending contact form messages via SMTP using Nodemailer.

- Copy `.env.example` to `.env` and fill in your SMTP provider values (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `TO_EMAIL`).
- Start the server:

```bash
npm run start:server
```

By default the server listens on port `4000`. Set `PORT` in `.env` to change.

Use `VITE_API_URL` to change the API base URL the frontend uses (defaults to `http://localhost:4000`).
