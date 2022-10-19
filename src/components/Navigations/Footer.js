import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/Navigations/Footer.module.scss'

function RecommendationCard() {
    return (
        <div className={styles[`footer`]}>
            <a href="https://www.youtube.com/channel/UCA_QIMlSQkPcx090cNZ26wA" className={styles[`footer__icon`]}>
                <img className={styles[`footer__img`]} src="youtube.png" alt="" />
            </a>
            <a href="https://instagram.com/gotobadesign?igshid=YmMyMTA2M2Y=" className={styles[`footer__icon`]}>
                <img className={styles[`footer__img`]} src="instagram.png" alt="" />
            </a>
            <a className={styles[`footer__icon`]}>
                <img className={styles[`footer__img`]} src="linkedin.png" alt="" />
            </a>
            <a className={styles[`footer__malt`]}>
                <img className={styles[`footer__img`]} src="malt_logo_white.png" alt="" />
            </a>
        </div>
    )
}

export default RecommendationCard
