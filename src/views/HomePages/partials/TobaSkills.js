import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/TobaSkills.module.scss'
function PresenationToba() {
    const { t } = useTranslation()
    return (
        <div className={styles['skills']}>
            <div className={styles['skills__presentation']}>
                <div className={styles['skills__container']}>
                    <img className={styles['skills__picture']} src="gears-photo.jpg" alt="gears-logo" />{' '}
                </div>

                <h3>{t('home_page.skills.engeneer')}</h3>
                <p>{t('home_page.skills.engeneer_paragraph')}</p>
            </div>
            <div className={styles['skills__presentation']}>
                <div className={styles['skills__container']}>
                    <img className={styles['skills__picture']} src="toba-photo.jpg" alt="toba" />
                </div>
                <h3>{t('home_page.skills.toba')}</h3>
                <p>{t('home_page.skills.toba_paragraph')}</p>
            </div>
            <div className={styles['skills__presentation']}>
                <div className={styles['skills__container']}>
                    <img className={styles['skills__picture']} src="toba logo insta.png" alt="logo facebook" />
                </div>
                <h3> {t('home_page.skills.portfolio')}</h3>

                <p>
                    <Link to="/motionDesign">{t('home_page.skills.portfolio_paragraph')}</Link>
                </p>
            </div>
        </div>
    )
}

export default PresenationToba
