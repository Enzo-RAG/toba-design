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

                    <a
                        href="https://www.malt.fr/profile/thomasbonnet2?q=motion+designer&location=Marseille%2C+France&lon=5.401581&lat=43.295314&city=Marseille&country=France&countryCode=FR&administrativeAreaLevel1=Provence-Alpes-C%C3%B4te+D%27Azur&administrativeAreaLevel2=Bouches-du-Rh%C3%B4ne&administrativeAreaLevel1Code=Provence-Alpes-C%C3%B4te+D%27Azur&exp=ENTRY&priceFilter=120%2C460&maxDailyPrice=240&minDailyPrice=220&searchid=6353d3a4d64ac37878f02356&useLocationInfo=false"
                        target="blank"
                    >
                        <p className={styles['skills__paragraph']}>{t('home_page.skills.portfolio_paragraph')}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PresenationToba
