import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/components/RecommendationCard.module.scss'

function RecommendationCard(props) {
    const [Name, setName] = useState(props.name)
    const [CompanyName, setcompanyName] = useState(props.companyName)
    const [Date, setDate] = useState(props.date)
    const [DescriptionDetail, setdescriptionDetail] = useState(props.descriptionDetail)
    return (
        <div className={styles[`card`]}>
            <div className={styles[`card__description-block`]}>
                <div>
                    <div className={styles[`card__description-block`]}>
                        <div className={styles[`card__title`]}>
                            {Name} - {CompanyName}
                        </div>
                        <div className={styles[`card__date`]}>{Date}</div>
                    </div>
                    <div className={styles[`card__description`]}>{DescriptionDetail}</div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard
