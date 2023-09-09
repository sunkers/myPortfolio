import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  TitleContainer,
  TextContainer,
  iconContainer,
  iconItem,
} from "./Titre.module.scss";

const Titre = () => {
  return (
    <div className={TitleContainer}>
      <div className={TextContainer}>
        <h1 style={{ textTransform: "uppercase" }}>
          Developpeur Web{" "}
          <strong>
            <u>Full Stack</u>
          </strong>
        </h1>
      </div>
      <div className={iconContainer}>
        <div className={iconItem}>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className={iconItem}>
          <a
            href="https://www.linkedin.com/in/lo%C3%AFc-mougin-184b4275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={iconItem}>
          <a
            href="https://github.com/sunkers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Titre;
