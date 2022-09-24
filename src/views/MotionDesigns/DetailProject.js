import React from 'react'
import { useTranslation } from 'react-i18next'
import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import Videos from '/home/enzo/projet/toba-design/src/views/MotionDesigns/partials/VideosWall.js'
import styles from '/home/enzo/projet/toba-design/src/styles/MotionDesigns/MotionDesign.module.scss'
function MotionDesign() {
    const { t } = useTranslation()
    return (
        <div>
            <Nav />
            <div> je suis lka</div>
        </div>
    )
}

export default MotionDesign
