# Email Contact Form Setup Guide

This guide will help you set up the real email-sending contact form.

## Prerequisites

- Node.js 16+ installed
- An email account (Gmail recommended)

## Quick Setup

### 1. Clone/Copy Environment Configuration

```bash
cp .env.example .env
```

### 2. Configure Email Credentials

Edit the `.env` file with your email service credentials:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=info@premierinsurance.com
PORT=3001
NODE_ENV=development
```

### 3. Gmail Setup (Recommended)

If using Gmail:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "Less secure app access" OR use an App Password:
   - Go to [Google App Passwords](https://support.google.com/accounts/answer/185833)
   - Select "Mail" and "Windows Computer" (or your device)
   - Generate a 16-character app password
   - Copy this password to `EMAIL_PASSWORD` in `.env`

### 4. Install Dependencies

All dependencies have been installed. If you need to reinstall:

```bash
npm install
```

### 5. Start the Email Server

In one terminal, start the email server:

```bash
npm run server
```

Or for development with auto-restart on changes:

```bash
npm run server:dev
```

### 6. Start the Frontend (in another terminal)

```bash
npm run dev
```

### 7. Test the Form

1. Navigate to the Contact page
2. Fill out the form
3. Click "Submit Request"
4. Check your email inbox for the confirmation email

## How It Works

### Frontend (React)
- Located in `src/app/pages/Contact.tsx`
- Collects form data (name, email, phone, service type, message)
- Sends data to backend API via POST request
- Shows loading state while sending
- Displays success or error messages

### Backend (Node.js/Express)
- Located in `server.js`
- Receives form data from frontend
- Validates input data
- Sends two emails:
  1. **Admin email**: New submission notification
  2. **User email**: Confirmation that we received their inquiry
- Returns status to frontend

### Email Service (Nodemailer)
- Uses Nodemailer library for email delivery
- Supports Gmail, Outlook, custom SMTP servers
- Includes HTML-formatted emails with submission details
- XSS protection with HTML escaping

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_SERVICE` | Email service provider | `gmail` |
| `EMAIL_USER` | Email account to send from | `no-reply@company.com` |
| `EMAIL_PASSWORD` | Email account password or app password | `xxxx xxxx xxxx xxxx` |
| `ADMIN_EMAIL` | Email to receive form submissions | `info@company.com` |
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## Troubleshooting

### "Failed to send email" Error

1. **Check .env file exists**: Make sure you copied `.env.example` to `.env`
2. **Verify credentials**: Double-check email/password in `.env`
3. **Check email service**: Try sending test email from your email client
4. **Gmail users**: 
   - Verify you used an App Password (not account password)
   - Check that less secure apps are enabled if not using App Password
5. **Check server is running**: Make sure `npm run server` is executing without errors

### Form stays in "Sending..." state

1. Check that server is running on port 3001
2. Open browser console (F12) and check for CORS errors
3. Verify network request in Network tab of DevTools
4. Check server console for error messages

### Emails not being received

1. Check spam/junk folder
2. Verify `ADMIN_EMAIL` and sender email are different
3. Add your email to contacts to prevent spam filtering
4. Check email service logs/sent items

## Advanced Configuration

### Using Different Email Services

#### Outlook/Hotmail
```
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Custom SMTP Server
Modify `server.js` transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

### Email Customization

Edit the email templates in `server.js`:
- Admin email: Search for `adminMailOptions`
- User confirmation email: Search for `userMailOptions`

You can customize:
- Subject lines
- HTML content
- Footer messages
- Company name/branding

## Security Best Practices

1. **Never commit .env file**: Already in `.gitignore`
2. **Use App Passwords**: For Gmail, use App Password instead of account password
3. **Environment-specific configs**: Use different emails for dev/production
4. **Validate input**: Server validates all fields
5. **Escape HTML**: Prevents XSS attacks in email content
6. **CORS restrictions**: Only allow requests from your domain in production

## Production Deployment

Before deploying to production:

1. Update `EMAIL_SERVICE`, `EMAIL_USER`, and `EMAIL_PASSWORD` on your hosting provider
2. Update frontend API endpoint from `http://localhost:3001` to your production URL
3. Set `NODE_ENV=production` in environment variables
4. Consider rate limiting to prevent spam
5. Use environment variable secrets on your hosting platform

## Support

For issues with:
- **Nodemailer**: [Nodemailer Documentation](https://nodemailer.com/)
- **Gmail**: [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- **Express**: [Express Documentation](https://expressjs.com/)
