import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

let transporter: Transporter | null = null;

// Initialize email transporter
function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(EMAIL_CONFIG);
  }
  return transporter;
}

// Send contact form notification email
export async function sendContactFormNotification(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  submittedAt: Date;
}): Promise<void> {
  // Check if email is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[Email] SMTP not configured, skipping email notification');
    return;
  }

  const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;

  try {
    const transport = getTransporter();
    
    await transport.sendMail({
      from: `"Eclectik Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
            .content { background: #f4f4f4; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #4a90e2; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${data.company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Submitted At:</div>
                <div class="value">${data.submittedAt.toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Eclectik website contact form.</p>
              <p>To view all submissions, visit the <a href="https://www.eclectik-insights.co/admin/dashboard">Admin Dashboard</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}\n` : ''}
Message: ${data.message}

Submitted At: ${data.submittedAt.toLocaleString()}

---
This email was sent from the Eclectik website contact form.
To view all submissions, visit: https://www.eclectik-insights.co/admin/dashboard
      `.trim(),
    });

    console.log('[Email] Contact form notification sent successfully');
  } catch (error) {
    console.error('[Email] Failed to send notification:', error);
    // Don't throw error - email failure shouldn't block form submission
  }
}
