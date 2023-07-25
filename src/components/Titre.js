import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {sd, richText, appear, iconContainer} from './Titre.module.scss'

const Titre = () => {
    return (
        <div className={sd}>
            <div className={`${sd} ${richText}`}>
                <h1 style={{textTransform: "uppercase"}}>
                    Web Developer Passion and <strong><u>EXPERIENCE.</u></strong>
                </h1>
            </div>
            <div className={`${sd} ${appear}`}>
                <div className={`${iconContainer}`}>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className={`${iconContainer}`}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className={`${iconContainer}`}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </div>
    )
}

export default Titre
