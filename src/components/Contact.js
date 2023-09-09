import React from "react";
import * as style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style.ContactContainer}>
      <div className={style.contactBox}>
        <div className={style.contactLinks}>
          <h2>CONTACT</h2>
          <div className={style.links}>
            <div className={style.link}>
              <a>
                <img src="/linkedin.png" alt="linkedin"></img>
              </a>
            </div>
            <div className={style.link}>
              <a>
                <img src="/github.png" alt="github"></img>
              </a>
            </div>
            <div className={style.link}>
              <a>
                <img src="/mail.png" alt="email"></img>
              </a>
            </div>
          </div>
        </div>
        <div className={style.contactFormWrapper}>
          <form>
            <div className={style.formItem}>
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className={style.formItem}>
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className={style.formItem}>
              <textarea name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button className={style.submitBtn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
