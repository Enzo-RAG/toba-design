import React from 'react'
import { useTranslation } from 'react-i18next'
import Video from '/home/enzo/projet/toba-design/src/components/VideoCard.js'
import styles from '/home/enzo/projet/toba-design/src/styles/MotionDesigns/VideosWall.module.scss'
import data from '/home/enzo/projet/toba-design/src/views/MotionDesigns/data.js'
function MotionDesign() {
    const { t } = useTranslation()

    const projectPresentation = data.map((data, i) => {
        return (
            <Video
                frontPicture={data.frontPicture}
                miniPicture={data.miniPicture}
                title={data.title}
                description={data.description}
            />
        )
    })

    console.log('verif de data', data[0].frontPicture)

    return <div className={styles['wall']}>{projectPresentation}</div>
}

export default MotionDesign
