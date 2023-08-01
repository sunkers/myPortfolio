import React from 'react'
import { Title, TitleText, line, line2, EducationRow, EducationSubRow, EducationPlace, EducationPlaceText, EducationDate, EducationDateWrapper, EducationDateText, EducationDescription, EducationDescriptionText } from './Education.module.scss'

const Education = () => {
  return (
    <div>
      <div className={Title}>
        <p className={TitleText}>FORMATION</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={EducationRow}>
        <div className={EducationSubRow}>
          <div className={EducationPlace}>
            <p className={EducationPlaceText}>ESLSCA Business School - MBA Management</p>
          </div>
          <div className={EducationDate}>
            <div className={EducationDateWrapper}>
              <p className={EducationDateText}>2019 - 2020</p>
            </div>
          </div>
        </div>
        <div className={EducationDescription}>
          <p className={EducationDescriptionText}>Un MBA international sur 12 mois qui m'a permis de développer une perspective globale, de renforcer mes compétences en leadership et gestion, tout en mettant l'accent sur l'innovation et l'adaptabilité, compétences clés en développement web</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={EducationRow}>
        <div className={EducationSubRow}>
          <div className={EducationPlace}>
            <p className={EducationPlaceText}>ESME Sudria - Master Ingénieur</p>
          </div>
          <div className={EducationDate}>
            <div className={EducationDateWrapper}>
              <p className={EducationDateText}>2012 - 2018</p>
            </div>
          </div>
        </div>
        <div className={EducationDescription}>
          <p className={EducationDescriptionText}>Un master d'ingénierie de niveau bac+5 spécialisé dans le traitement des signaux, où j'ai approfondi ma maîtrise des algorithmes et des systèmes numériques, compétences qui sont essentielles pour la conception et l'optimisation des applications web modernes.</p>
        </div>
      </div>
    </div>
  )
}

export default Education
