import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/PresentationToba.module.scss'
function PresenationToba() {
    const { t } = useTranslation()
    return (
        <div className={styles['presentation']}>
            <h1 className={styles['presentation__job']}>{t('home_page.presentation.title')} </h1>
            <h2 className={styles['presentation__paragraphe']}>{t('home_page.presentation.name')} </h2>
            <h2 className={styles['presentation__paragraphe']}>{t('home_page.presentation.portfolio')} </h2>
        </div>
    )
}

export default PresenationToba
