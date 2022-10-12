import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/components/RecommendationCard.module.scss'

function RecommendationCard() {
    return (
        <div className={styles[`card`]}>
            <div className={styles[`card__header`]}>
                <div>
                    <div className={styles[`card__rating-block`]}>
                        <img className={styles[`card__icon`]} src="clock.png" alt="clock" />
                        <h4>Qualité</h4>
                    </div>
                    <div>
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                    </div>
                </div>
                <div>
                    <div className={styles[`card__rating-block`]}>
                        <img className={styles[`card__icon`]} src="heureux.png" alt="emoji" />
                        <h4>Respect des délais</h4>
                    </div>
                    <div>
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                    </div>
                </div>
                <div>
                    <div className={styles[`card__rating-block`]}>
                        <img className={styles[`card__icon`]} src="megaphone.png" alt="megaphone" />
                        <h4>Communication</h4>
                    </div>
                    <div>
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                        <img className={styles[`card__icon`]} src="star.png" alt="star" />
                    </div>
                </div>
            </div>
            <div className={styles[`card__description-block`]}>
                <img className={styles[`card__icon`]} src="star.png" alt="" />
                <div>
                    <div className={styles[`card__title`]}>Victoria - GenovesiDeisgn</div>
                    <div className={styles[`card__date`]}>22/09/22</div>
                    <div className={styles[`card__description`]}>
                        Léna is extremely easy to communicate with and a joy to work with! She listened to our brief,
                        was serious, creative and worked wonderfully with our team! We have many more projects coming
                        with up Léna and we are excited to continue our working relationship!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard
