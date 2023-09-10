import React, { useEffect } from "react";
import { skillsWrapper, skillsTitle, line, line2 } from "./Skills.module.scss";
import {
  ProjectWrapper,
  projectImg,
  projectTech,
  projectLink,
  ProjectDiv,
  btn,
} from "./Projects.module.scss";
import novablocksImage from "./../../static/novablocks.png";
import mytaskmanagerImage from "./../../static/taskmanager.png";
import myPortfolioImage from "./../../static/myPortfolio.png";

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      let offset = window.pageYOffset;
      let images = document.querySelectorAll(".projectImg");
      images.forEach(
        (img) => (img.style.transform = `translateY(${offset * 0.2}px)`)
      );
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Nettoyage lors du démontage du composant
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className={ProjectDiv}>
      <div className={skillsWrapper}>
        <p className={skillsTitle}>PROJETS</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={ProjectWrapper}>
        <img src={novablocksImage} alt="project" className={projectImg} />
        <div className={projectTech}>Wordpress</div>
        <div className={btn}>
          <a
            href="https://novablocks-showcase.xyz"
            target="_blank"
            rel="noreferrer"
            className={projectLink}
          >
            Nova Blocks
          </a>
        </div>
      </div>
      <div className={ProjectWrapper}>
        <img src={mytaskmanagerImage} alt="project" className={projectImg} />
        <div className={projectTech}>Symfony</div>
        <div className={btn}>
          <a
            href="https://mytaskmanager.xyz"
            target="_blank"
            rel="noreferrer"
            className={projectLink}
          >
            My Task Manager
          </a>
        </div>
      </div>
      <div className={ProjectWrapper}>
        <img
          src={myPortfolioImage}
          alt="project"
          target="_blank"
          rel="noreferrer"
          className={projectImg}
        />
        <div className={projectTech}>Gatsby / React</div>
        <div className={btn}>
          <a href="https://loicmougin.xyz" className={projectLink}>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
