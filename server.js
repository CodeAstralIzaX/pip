import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter
// Using Gmail or your preferred email service
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
  },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    // Create email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'info@premierinsurance.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service Type:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || 'N/A').replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This is an automated email from your contact form.</em></p>
      `,
    };

    // Create confirmation email for user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Contact Form - Premier Insurance Partners',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We received your inquiry about <strong>${escapeHtml(service)}</strong> insurance and will get back to you within 24 hours.</p>
        <h3>Your Submission Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
          <li><strong>Service:</strong> ${escapeHtml(service)}</li>
        </ul>
        <p>If you have any additional questions in the meantime, feel free to call us at <strong>1-800-555-1234</strong>.</p>
        <p>Best regards,<br>Premier Insurance Partners Team</p>
        <hr>
        <p style="font-size: 12px; color: #999;">This is an automated confirmation email. Please do not reply to this email.</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    res.json({
      success: true,
      message: 'Email sent successfully! We will contact you soon.',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Serve static files from the Vite build (dist) if present.
// This makes the same server responsible for the API and the frontend
// when deploying a fullstack app to hosts like Hostinger.
const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath));

// Fallback to index.html for client-side routing (SPA). Keep API routes above.
app.get('/*', (req, res) => {
  // Do not attempt to serve index for API routes
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
