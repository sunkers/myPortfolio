import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {TitleContainer, TextContainer, iconContainer, iconItem} from './Titre.module.scss'


const Titre = () => {
    return (
        <div className={TitleContainer}>
            <div className={TextContainer}>
                <h1 style={{textTransform: "uppercase"}}>
                    Developpeur Web Full Stack <strong><u>Passionné.</u></strong>
                </h1>
            </div>
            <div className={iconContainer}>
                <div className={iconItem}>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className={iconItem}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className={iconItem}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </div>
    )
}

export default Titre
