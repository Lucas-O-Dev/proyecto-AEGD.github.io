import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import EmailTemplate from './src/EmailTemplate.js'; // Ruta actualizada

const app = express();
const port = 3001;

const resend = new Resend('re_9U3779JS_2xZTcRpmX6ymH3fS6LnrdLJF');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Permite solicitudes desde esta URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.post('/send-email', async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['lucasotaiza@hotmail.com'],
      subject: "Bolsa de Aspas",
      react: EmailTemplate({ firstName: "Lucas" }),
      text: "que texto va aquí?",
    });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
