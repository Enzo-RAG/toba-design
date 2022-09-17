import React from 'react'
import { useTranslation } from 'react-i18next'
import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import Videos from '/home/enzo/projet/toba-design/src/views/MotionDesigns/partials/VideosWall.js'

function MotionDesign() {
    const { t } = useTranslation()
    return (
        <div>
            <Nav />
            <h3>{t('motion_design_page.title')}</h3>
            <Videos />
        </div>
    )
}

export default MotionDesign
