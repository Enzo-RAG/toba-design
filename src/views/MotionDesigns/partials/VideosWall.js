import React from 'react'
import { useTranslation } from 'react-i18next'
import Video from '/home/enzo/projet/toba-design/src/components/VideoCard.js'
function MotionDesign() {
    const { t } = useTranslation()
    return (
        <div>
            <div>je suis la</div>
            <Video title={'Allauch'} shortDescription={'videos sur allauche'} picture={'test'} />
        </div>
    )
}

export default MotionDesign
