import React from "react";
import {
  SkillsContainer,
  skillsWrapper,
  skillsTitle,
  line,
  line2,
  skillsRow,
  skillsSubRow,
  skillsName,
  skillsNameText,
  skillsLevel,
  skillsLevelText,
  skillsLineWrapper,
  skillsLine1,
  skillsLine2,
  skillsLine3,
  skillsLine4,
} from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={SkillsContainer}>
      <div className={skillsWrapper}>
        <p className={skillsTitle}>COMPETENCES</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={skillsRow}>
        <div className={skillsSubRow}>
          <div className={skillsName}>
            <p className={skillsNameText}>
              Back-end <br></br>[Express / PHP]
            </p>
          </div>
          <div className={skillsLevel}>
            <p className={skillsLevelText}>75%</p>
          </div>
        </div>
        <div className={skillsLineWrapper}>
          <div className={skillsLine1}></div>
        </div>
      </div>
      <div className={skillsRow}>
        <div className={skillsSubRow}>
          <div className={skillsName}>
            <p className={skillsNameText}>
              Front-end <br></br>[Angular / Symfony]
            </p>
          </div>
          <div className={skillsLevel}>
            <p className={skillsLevelText}>60%</p>
          </div>
        </div>
        <div className={skillsLineWrapper}>
          <div className={skillsLine2}></div>
        </div>
      </div>
      <div className={skillsRow}>
        <div className={skillsSubRow}>
          <div className={skillsName}>
            <p className={skillsNameText}>
              Base de Données <br></br>[PostGre]
            </p>
          </div>
          <div className={skillsLevel}>
            <p className={skillsLevelText}>60%</p>
          </div>
        </div>
        <div className={skillsLineWrapper}>
          <div className={skillsLine3}></div>
        </div>
      </div>
      <div className={skillsRow}>
        <div className={skillsSubRow}>
          <div className={skillsName}>
            <p className={skillsNameText}>
              Versioning <br></br>[Git]
            </p>
          </div>
          <div className={skillsLevel}>
            <p className={skillsLevelText}>75%</p>
          </div>
        </div>
        <div className={skillsLineWrapper}>
          <div className={skillsLine4}></div>
        </div>
      </div>
      <div className={skillsRow}>
        <div className={skillsSubRow}>
          <div className={skillsName}>
            <p className={skillsNameText}>
              Déploiement <br></br>[AWS / Netlify]
            </p>
          </div>
          <div className={skillsLevel}>
            <p className={skillsLevelText}>60%</p>
          </div>
        </div>
        <div className={skillsLineWrapper}>
          <div className={skillsLine3}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
