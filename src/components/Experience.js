import React from 'react'
import {experience, experienceTitle, barOne, barTwo, experienceContainer, experienceRow, company, post, postDate, postName, experienceDescription, descriptionText, expTitle} from './Experience.module.scss'

const Experience = () => {
  return (
  <div>
    <div className={experience}>
      <p className={experienceTitle}>EXPERIENCE</p>
      <div className={barOne}></div>
      <div className={barTwo}></div>
    </div>
    <div className={experienceContainer}>
      <div className={experienceRow}>
        <div className={expTitle}>
          <p className={company}>iOrga Group</p>
          <div className={post}>
            <p className={postDate}>2023 — PRESENT</p>
            <p className={postName}>Développeur Web</p>
          </div>
        </div>
        <div className={experienceDescription}>
          <p className={descriptionText}>Développement d'une application web de gestion de projet en Angular et Symfony</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience
