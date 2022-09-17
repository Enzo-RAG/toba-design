import i18next from 'i18next'
import React from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/Navigations/partials/LanguageButton.module.scss'

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
}
function LanguageButton() {
    return (
        <div>
            {Object.keys(lngs).map((lng) => (
                <button
                    className={styles['button']}
                    type="submit"
                    key={lng}
                    onClick={() => i18next.changeLanguage(lng)}
                    disabled={i18next.resolvedLanguage === lng}
                >
                    <div disabled={i18next.resolvedLanguage === lng} className={'button__text'}>
                        {lngs[lng].nativeName}
                    </div>
                </button>
            ))}
        </div>
    )
}

export default LanguageButton
