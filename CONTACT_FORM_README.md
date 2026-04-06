# 📧 Real Email Contact Form Setup

Your contact form is now configured to send **real emails** using Nodemailer!

## 🚀 Quick Start (5 minutes)

### Step 1: Configure Email Credentials

Edit `.env` file with your email details:

```bash
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=where-forms-go@company.com
PORT=3001
NODE_ENV=development
```

### Step 2: Get Gmail App Password (if using Gmail)

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Select **Security** from the left menu
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security and look for **App passwords** option
5. Select Mail and Windows Computer
6. Copy the 16-character password
7. Paste it in `.env` as `EMAIL_PASSWORD`

### Step 3: Start Both Servers

**macOS/Linux:**
```bash
./start-dev.sh
```

**Windows:**
```bash
start-dev.bat
```

**Or manually (any OS):**

Terminal 1:
```bash
npm run server:dev
```

Terminal 2:
```bash
npm run dev
```

### Step 4: Test It!

1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Submit Request"
4. ✅ You should receive two emails:
   - **Admin email**: New submission notification
   - **User email**: Confirmation that you got their message

---

## 📁 Files Created/Modified

### New Files:
- `server.js` - Email API backend
- `.env` - Your email credentials (private)
- `.env.example` - Template for .env
- `EMAIL_SETUP.md` - Detailed setup guide
- `start-dev.sh` - macOS/Linux startup script
- `start-dev.bat` - Windows startup script
- `src/app/utils/emailService.ts` - Email utilities

### Modified Files:
- `src/app/pages/Contact.tsx` - Updated to send real emails
- `package.json` - Added server scripts

---

## 🔑 Key Features

✨ **Real Email Sending**
- Uses Nodemailer with Gmail, Outlook, or custom SMTP
- Sends emails to both admin and customer

📝 **Professional Email Templates**
- HTML-formatted emails
- Automatic XSS protection
- Includes submission details

🛡️ **Validation & Security**
- Server-side input validation
- HTML escaping to prevent attacks
- Email format checking

⚡ **User Experience**
- Loading state while sending
- Success/error messages
- Auto-clear form on success
- 5-second notification timeout

🔌 **API Endpoints**
- `POST /api/send-email` - Send contact form
- `GET /api/health` - Check server status

---

## 🐛 Troubleshooting

### ❌ "Failed to send email"

**Solution:**
1. Check `.env` file exists and has credentials
2. Verify Gmail App Password (not your account password)
3. Check server console for detailed errors
4. Ensure both servers are running

### ❌ Form stuck on "Sending..."

**Solution:**
1. Open DevTools (F12) → Console tab
2. Check for CORS errors
3. Make sure backend is running on port 3001
4. Check Network tab for failed requests

### ❌ Emails go to spam

**Solution:**
1. Add your email to contacts
2. Mark as "Not Spam" in email client
3. Wait 24 hours (Gmail learns over time)

### ❌ Server won't start

**Solution:**
```bash
# Check if port 3001 is in use
lsof -i :3001  # macOS/Linux

# Kill the process using the port
kill -9 <PID>

# Or change PORT in .env to something else (e.g., 3002)
```

---

## 🎯 Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `EMAIL_SERVICE` | Email provider | `gmail` `hotmail` `yahoo` |
| `EMAIL_USER` | Sender email | `no-reply@company.com` |
| `EMAIL_PASSWORD` | App password or account password | `xxxx xxxx xxxx xxxx` |
| `ADMIN_EMAIL` | Receives form submissions | `info@company.com` |
| `PORT` | Backend server port | `3001` |
| `NODE_ENV` | Environment mode | `development` `production` |

---

## 🌐 Email Service Providers

### Gmail (Recommended) ✅
- Free
- Most reliable
- Use App Password method

### Outlook/Hotmail ✅
- Free
- Requires App Password
- Update `EMAIL_SERVICE=hotmail`

### Yahoo Mail ✅
- Free
- Requires App Password
- Update `EMAIL_SERVICE=yahoo`

### Custom SMTP ✅
- Edit `server.js` transporter config
- Add your SMTP details

---

## 📱 Email Customization

Edit email templates in `server.js`:

```javascript
// Around line 40 - Admin email
const adminMailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: `New Contact Form Submission - ${service}`, // ← Edit subject
  html: ` <!-- Edit HTML here --> `
};

// Around line 65 - User confirmation email
const userMailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: 'We Received Your Contact Form - Premier Insurance Partners', // ← Edit subject
  html: ` <!-- Edit HTML here --> `
};
```

---

## 🚀 Production Deployment

Before going live:

1. **Update email credentials** on your hosting platform
2. **Change API endpoint** in `src/app/pages/Contact.tsx`:
   ```javascript
   // Change from:
   const response = await fetch("http://localhost:3001/api/send-email"
   
   // To:
   const response = await fetch("https://your-domain.com/api/send-email"
   ```
3. **Enable HTTPS** for production
4. **Set `NODE_ENV=production`**
5. **Add rate limiting** to prevent spam (optional)
6. **Use environment secrets** on hosting platform

---

## 📞 Support Resources

- **Nodemailer**: [nodemailer.com](https://nodemailer.com/)
- **Gmail App Passwords**: [support.google.com](https://support.google.com/accounts/answer/185833)
- **Express.js**: [expressjs.com](https://expressjs.com/)
- **Contact Form Code**: See `src/app/pages/Contact.tsx`

---

## ✅ Checklist

- [ ] `.env` file created with credentials
- [ ] Both servers running (`npm run server:dev` + `npm run dev`)
- [ ] Can access http://localhost:5173/contact
- [ ] Form submits without errors
- [ ] Received admin email notification
- [ ] Received customer confirmation email
- [ ] Success message shows in UI
- [ ] Form clears after submission

---

## 🎉 You're All Set!

Your contact form now sends real emails. Start the servers and test it out!

For detailed setup guide, see **EMAIL_SETUP.md**
