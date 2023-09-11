import React from "react";
import { copyright, italic, space } from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={copyright}>
        © 2023 – All Rights Reserved{" "}
        <span className={italic}>
          <span className={space}></span> inspired by{" "}
          <a href="https://studio.design/" target="__blank" rel="noopener">
            Studio Design
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
