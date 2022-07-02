import i18next, { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../styles/Header.module.scss'
import { useTranslation } from 'react-i18next'

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
}
function Nav() {
    const { t } = useTranslation()
    return (
        <nav className={Styles.header}>
            <img src="./tobalogo.svg" alt="logo"></img>
            <Link to="/" className={Styles.header__link}>
                home
            </Link>
            <Link to="/motionDesign" className={Styles.header__link}>
                motion design
            </Link>
            <Link to="/motionDesign" className={Styles.header__link}>
                autre realisation
            </Link>
            <Link to="/motionDesign" className={Styles.header__link}>
                qui suis-je?
            </Link>

            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        type="submit"
                        key={lng}
                        onClick={() => i18next.changeLanguage(lng)}
                        disabled={i18next.resolvedLanguage === lng}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Nav
