import i18next from 'i18next'
import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/Navigations/partials/LanguageButton.module.scss'

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
}
function LanguageButton(props) {
    const [Test, setTest] = useState(props.testdata)
    console.log('verif de li nfo', Test)
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="" />
                </div>
                <div className="flip-card-back">
                    <img />
                    <h3> prejent</h3>
                    <h1>la</h1>
                </div>
            </div>
        </div>
    )
}

export default LanguageButton
