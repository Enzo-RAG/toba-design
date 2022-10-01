import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/components/VideosCard.module.scss'

function LanguageButton(props) {
    const [Test, setTest] = useState(props.testdata)
    const [FrontPicture, setFrontPicture] = useState(props.frontPicture)
    const [MiniPicture, setMiniPicture] = useState(props.miniPicture)
    const [Title, setTitle] = useState(props.title)
    const [Descritption, setDescritption] = useState(props.description)

    return (
        <div className={styles[`flip-card`]}>
            <div className={styles[`flip-card-inner`]}>
                <div className={styles[`flip-card-front`]}>
                    <div className={styles[`test`]}>
                        <img className={styles[`flip-card-front-img`]} src={FrontPicture} />
                    </div>
                </div>
                <div className={styles[`flip-card-back`]}>
                    <Link className={styles[`flip-card-back-text`]} to="/motionDesign/detail&id=6">
                        <img src={MiniPicture} />
                        <h2> {Title}</h2>
                        <h3>{Descritption}</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LanguageButton
