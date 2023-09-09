require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Utiliser CORS pour toutes les routes
app.use(cors());

// Middleware pour lire le JSON du corps de la requête
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { sender, email, message } = req.body;

  // Configurer le transporteur
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configuration de l'e-mail
  const mailOptionsToAdmin = {
    from: process.env.EMAIL_USER,
    to: [process.env.EMAIL_USER],
    subject: "Message du formulaire de contact",
    text: `Nom: ${sender}\nEmail: ${email}\nMessage: ${message}`,
  };

  const mailOptionsToSender = {
    from: process.env.EMAIL_USER,
    to: [email],
    subject: "Message envoyé",
    text: `Bonjour ${sender},\n\nMerci pour votre message. Je vous recontacterai dès que possible.\n\nCordialement,\nLoïc Mougin`,
  };

  // Envoyer l'e-mail
  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToSender);
    res.status(200).send("Email envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
