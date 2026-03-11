const { app } = require("@azure/functions");

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "contact",
  handler: async (request, context) => {
    try {
      const body = await request.json();
      const { fullName, email, phone, message } = body;

      const errors = [];
      if (!fullName || fullName.length < 2) {
        errors.push("Name must be at least 2 characters");
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Please enter a valid email address");
      }
      if (!message || message.length < 10) {
        errors.push("Message must be at least 10 characters");
      }

      if (errors.length > 0) {
        return {
          status: 400,
          jsonBody: { success: false, message: errors.join(". ") },
        };
      }

      const apiKey = process.env.MAIL_API_KEY;
      const mailTo = process.env.MAIL_TO;
      const mailFrom = process.env.MAIL_FROM;

      if (!apiKey || !mailTo || !mailFrom) {
        context.error("Missing email configuration environment variables");
        return {
          status: 500,
          jsonBody: { success: false, message: "Email service is not configured." },
        };
      }

      const phoneDisplay = phone || "Not provided";
      const htmlBody = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${fullName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phoneDisplay}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${message}</td></tr>
        </table>
      `;

      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          to: [mailTo],
          sender: mailFrom,
          subject: `New Enquiry from ${fullName} - Prestige Limousines`,
          html_body: htmlBody,
          text_body: `New contact from ${fullName}\nEmail: ${email}\nPhone: ${phoneDisplay}\nMessage: ${message}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.data?.error) {
        context.error("SMTP2GO error:", JSON.stringify(result));
        return {
          status: 500,
          jsonBody: { success: false, message: "Failed to send email. Please try again." },
        };
      }

      return {
        status: 200,
        jsonBody: { success: true },
      };
    } catch (error) {
      context.error("Contact function error:", error);
      return {
        status: 500,
        jsonBody: { success: false, message: "An unexpected error occurred. Please try again." },
      };
    }
  },
});
