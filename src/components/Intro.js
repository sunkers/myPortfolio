import React from 'react'
import {IntroContainer, myImage, myName, myDescription, myTable, tableRow, sendButton, textTable} from './Intro.module.scss'


const Intro = () => {
  return (
        <div className={IntroContainer}>
            <div className={myImage}></div>
            <p className={myName}>Loïc Mougin</p>
            <div className={myDescription}>
            Développeur web full-stack aguerri, spécialisé en PHP, JS, TS, Angular, Symfony. Réputé pour ma rapidité d'execution, mon efficacité et une bonne approche logique, je suis toujours prêt pour de nouveaux défis
            </div>
            <div className={myTable}>
            <div className={tableRow}>
                  <p style={{textTransform: "uppercase"}} className={textTable}>Profession</p>
                  <p style={{textTransform: "uppercase"}} className={textTable}>Developpeur Web</p>
                </div>
                <div className={tableRow}>
                  <p style={{textTransform: "uppercase"}} className={textTable}>Date de Naissance</p>
                  <p style={{textTransform: "uppercase"}} className={textTable}>21 Novembre 1994</p>
                </div>
                <div className={tableRow}>
                  <p style={{textTransform: "uppercase"}} className={textTable}>Education</p>
                  <p style={{textTransform: "uppercase"}} className={textTable}>Double Master</p>
                </div>
            </div>
            <div className={sendButton}><h3 style={{textTransform: "uppercase"}}>Send Message</h3></div>
        </div>
  )
}

export default Intro
