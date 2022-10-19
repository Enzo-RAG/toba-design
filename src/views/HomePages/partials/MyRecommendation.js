import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/MyRecommendation.module.scss'
import RecommendationCard from '/home/enzo/projet/toba-design/src/components/RecommendationCard.js'

function MyRecommendation() {
    const { t } = useTranslation()
    return (
        <div className={styles['myRecommendation']}>
            <h1 className={styles['myRecommendation__title']}>{t('home_page.my_recommendation.title')} </h1>
            <div className={styles['myRecommendation__card']}>
                <RecommendationCard />
                <RecommendationCard />
            </div>
        </div>
    )
}

export default MyRecommendation
