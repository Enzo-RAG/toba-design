import i18next from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
}
function Nav() {
    const { t } = useTranslation()

    const [showLinks, setshowLinks] = useState(false)

    const handleShowLinks = () => {
        setshowLinks(!showLinks)
    }

    const buttonLanguage = () => {
        return (
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        className="header__button"
                        type="submit"
                        key={lng}
                        onClick={() => i18next.changeLanguage(lng)}
                        disabled={i18next.resolvedLanguage === lng}
                    >
                        <div disabled={i18next.resolvedLanguage === lng} className={'header__text'}>
                            {lngs[lng].nativeName}
                        </div>
                    </button>
                ))}
            </div>
        )
    }
    // ${showLinks ? Styles.navbar__links__shownav : Styles.navbar__hidenav}
    return (
        <nav className={`navbar ${showLinks ? 'shownav' : 'handi'}`}>
            <div className="navbar__logo">logo</div>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <Link className="navbar__link" to="/">
                        {t('home')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-2">
                    <Link to="/motionDesign" className="navbar__link">
                        {t('motion_design')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-3">
                    <Link to="/otherRealisation" className="navbar__link">
                        {t('other-realisation')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-4 ">
                    <Link to="/whoIam" className="navbar__link">
                        {t('who_I_am')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-5 navbar__language">{buttonLanguage()}</li>
            </ul>
            <div className="navbar__disablelanguage">{buttonLanguage()}</div>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="navbar__bar"></span>
            </button>
        </nav>
    )
}

export default Nav
