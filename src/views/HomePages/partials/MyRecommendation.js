import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/MyRecommendation.module.scss'
import RecommendationCard from '/home/enzo/projet/toba-design/src/components/RecommendationCard.js'
import data from '/home/enzo/projet/toba-design/src/views/MotionDesigns/data.js'

function MyRecommendation() {
    const { t } = useTranslation()
    const Recommendation = data.recommendation.map((data, i) => {
        return (
            <RecommendationCard
                name={data.name}
                companyName={data.companyName}
                date={data.date}
                descriptionDetail={data.descriptionDetail}
            />
        )
    })

    console.log('teste verif date', data.recommendation)
    return (
        <div className={styles['myRecommendation']}>
            <h1 className={styles['myRecommendation__title']}>{t('home_page.my_recommendation.title')} </h1>
            <div className={styles['myRecommendation__card']}>{Recommendation}</div>
        </div>
    )
}

export default MyRecommendation
