import React from 'react'
import { skillsWrapper, skillsTitle, line, line2, skillsRow, skillsSubRow, skillsName, skillsNameText, skillsLevel, skillsLevelText, skillsLineWrapper, skillsLine1, skillsLine2, skillsLine3, skillsLine4} from './Skills.module.scss'

const Skills = () => {
  return (
  <div>
    <div className={skillsWrapper}>
      <p className={skillsTitle}>SKILLS</p>
      <div className={line}></div>
      <div className={line2}></div>
    </div>
    <div className={skillsRow}>
      <div className={skillsSubRow}>
        <div className={skillsName}>
          <p className={skillsNameText}>Back-end <br></br>[Express / PHP]</p>
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
          <p className={skillsNameText}>Front-end <br></br>[Angular / Symfony]</p>
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
          <p className={skillsNameText}>Base de Données [PostGre]</p>
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
          <p className={skillsNameText}>Versioning <br></br>[Git]</p>
        </div>
        <div className={skillsLevel}>
          <p className={skillsLevelText}>75%</p>
        </div>
      </div>
      <div className={skillsLineWrapper}>
        <div className={skillsLine4}></div>
      </div>
    </div>
  </div>
  )
}

export default Skills
