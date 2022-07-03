import i18next from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../styles/Header.module.scss'
import { useTranslation } from 'react-i18next'

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
}
function Nav() {
    const { t } = useTranslation()
    return (
        <nav className={Styles.header}>
            <Link to="/">
                <img className={Styles.header__img} src="./tobalogo.svg" alt="logo" />
            </Link>
            <Link className={Styles.header__link} to="/">
                {t('home')}
            </Link>
            <Link to="/motionDesign" className={Styles.header__link}>
                {t('motion_design')}
            </Link>
            <Link to="/otherRealisation" className={Styles.header__link}>
                {t('other-realisation')}
            </Link>
            <Link to="/whoIam" className={Styles.header__link}>
                {t('who_I_am')}
            </Link>

            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        className={Styles.header__button}
                        type="submit"
                        key={lng}
                        onClick={() => i18next.changeLanguage(lng)}
                        disabled={i18next.resolvedLanguage === lng}
                    >
                        <div disabled={i18next.resolvedLanguage === lng} className={Styles.header__text}>
                            {lngs[lng].nativeName}
                        </div>
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Nav
