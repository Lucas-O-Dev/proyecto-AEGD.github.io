// src/EmailTemplate.js
export default function EmailTemplate({ firstName }) {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
          }
          .header h1 {
            color: #333333;
            font-size: 24px;
            margin: 0;
          }
          .content {
            font-size: 16px;
            line-height: 1.5;
            color: #555555;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            font-size: 14px;
            color: #777777;
          }
          a {
            color: #1a73e8;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Hello, ${firstName}!</h1>
          </div>
          <div class="content">
            <p>Thank you for being a valued member of our community.</p>
            <p>We are pleased to have you with us. If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
            <p>Best regards,<br>The Team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
