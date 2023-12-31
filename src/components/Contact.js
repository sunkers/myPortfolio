import React, { useEffect, useState } from "react";
import * as style from "./Contact.module.scss";

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(null);

  useEffect(() => {
    const handleSubmit = async (event) => {
      event.preventDefault();

      const sender = event.target.sender.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
      const url =
        process.env.REACT === "production"
          ? "https://loicmougin.xyz/.netlify/functions/send-email"
          : "http://localhost:3001/send-email";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sender, email, message }),
        });

        if (response.ok) {
          console.log("Email envoyé avec succès");
          setMessageStatus("Message envoyé avec succès");
        } else {
          console.log(
            "Échec de l'envoi de l'email. Veuillez employer un autre moyen pour me contacter."
          );
          setMessageStatus("Erreur lors de l'envoi du message");
        }
      } catch (error) {
        console.error("Il y a eu un problème avec l'envoi de l'email:", error);
        setMessageStatus("Erreur lors de l'envoi du message");
      }
    };

    const formElement = document.querySelector("form");
    if (formElement) {
      formElement.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (formElement) {
        formElement.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className={style.ContactContainer}>
      <div className={style.contactBox}>
        <div className={style.contactLinks}>
          <h2>CONTACT</h2>
          <div className={style.links}>
            <div className={style.link}>
              <a
                href="https://www.linkedin.com/in/lo%C3%AFc-mougin-184b4275/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/linkedin.png" alt="linkedin"></img>
              </a>
            </div>
            <div className={style.link}>
              <a
                href="https://github.com/sunkers"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/github.png" alt="github"></img>
              </a>
            </div>
            <div className={style.link}>
              <a href="mailto:mougin.loic@gmail.com">
                <img src="/mail.png" alt="email"></img>
              </a>
            </div>
          </div>
        </div>
        <div className={style.contactFormWrapper}>
          <form>
            <div className={style.formItem}>
              <input type="text" name="sender" id="sender" required />
              <label htmlFor="sender">Nom:</label>
            </div>
            <div className={style.formItem}>
              <input type="text" name="email" id="email" required />
              <label htmlFor="email">Email:</label>
            </div>
            <div className={style.formItem}>
              <textarea name="message" id="message" required></textarea>
              <label htmlFor="message">Message:</label>
            </div>
            <button className={style.submitBtn}>Envoyer</button>
          </form>
          {messageStatus && (
            <div className={style.messageStatus}>{messageStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
