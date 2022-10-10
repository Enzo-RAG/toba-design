import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/LastRealization.module.scss'
import { Link } from 'react-router-dom'
function LastRealization() {
    const { t } = useTranslation()
    return (
        <div className={styles['lastRealization']}>
            <h1 className={styles['lastRealization__title']}>{t('home_page.last_realization.title')} </h1>
            <div className={styles['lastRealization__details']}>
                <p>{t('home_page.last_realization.description')}</p>

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/aOyKw6_cqxw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <Link to="/motionDesign" className={styles['lastRealization__arrows']}></Link>
            </div>
        </div>
    )
}

export default LastRealization
