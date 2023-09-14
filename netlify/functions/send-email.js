const nodemailer = require("nodemailer");
require("dotenv").config();

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { sender, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

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

  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToSender);
    return {
      statusCode: 200,
      body: "Email envoyé avec succès",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return {
      statusCode: 500,
      body: "Erreur interne du serveur",
    };
  }
};
