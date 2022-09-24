import i18next from 'i18next'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/Navigations/partials/LanguageButton.module.scss'
import '/home/enzo/projet/toba-design/src/styles/components/VideosCard.css'

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
}
function LanguageButton(props) {
    const [Test, setTest] = useState(props.testdata)
    const [FrontPicture, setFrontPicture] = useState(props.frontPicture)
    const [MiniPicture, setMiniPicture] = useState(props.miniPicture)
    const [Title, setTitle] = useState(props.title)
    const [Descritption, setDescritption] = useState(props.description)

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="test">
                        <img className="flip-card-front-img" src={FrontPicture} />
                    </div>
                </div>
                <div className="flip-card-back">
                    <Link to="/motionDesign/detail&id=6">
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
