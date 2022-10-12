import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/TobaSkills.module.scss'
function PresenationToba() {
    const { t } = useTranslation()
    return (
        <div className={styles['skills']}>
            <div className={styles['skills__presentation']}>
                <img className={styles['skills__picture']} src="toba-photo.jpg" alt="toba" />

                <div className={styles['skills__details']}>
                    <h3>{t('home_page.skills.toba')}</h3>
                    <p className={styles['skills__paragraph']}>{t('home_page.skills.toba_paragraph')}</p>
                </div>
            </div>
            <div className={styles['skills__presentation']}>
                <img className={styles['skills__picture']} src="malt.png" alt="logo facebook" />

                <div className={styles['skills__details']}>
                    <h3> {t('home_page.skills.portfolio')}</h3>

                    <p className={styles['skills__paragraph']}>
                        <Link to="/motionDesign">{t('home_page.skills.portfolio_paragraph')}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PresenationToba
