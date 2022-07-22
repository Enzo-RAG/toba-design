import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import LanguageButton from './partials/LanguageButton'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Nav() {
    const { t } = useTranslation()
    const sampleLocation = useLocation()
    console.log(sampleLocation)
    const [showLinks, setshowLinks] = useState(false)

    const handleShowLinks = () => {
        setshowLinks(!showLinks)
    }
    const activeLink = (ref) => {
        if (sampleLocation.pathname === ref) {
            return 'navbar__active'
        } else {
            return 'navbar__link'
        }
    }

    return (
        <nav className={`navbar ${showLinks ? 'shownav' : 'handi'}`}>
            <img src="tobalogo.svg" alt="logo" className="navbar__logo" />
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <Link className={activeLink('/')} to="/">
                        {t('home')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-2">
                    <Link to="/motionDesign" className={activeLink('/motionDesign')}>
                        {t('motion_design')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-3">
                    <Link to="/otherRealisation" className={activeLink('/otherRealisation')}>
                        {t('other-realisation')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-4 ">
                    <Link to="/whoIam" className={activeLink('/whoIam')}>
                        {t('who_I_am')}
                    </Link>
                </li>
                <li className="navbar__item slideInDown-5 navbar__language">
                    <LanguageButton />
                </li>
            </ul>
            <div className="navbar__disablelanguage">
                <LanguageButton />
            </div>

            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="navbar__bar"></span>
            </button>
        </nav>
    )
}

export default Nav
