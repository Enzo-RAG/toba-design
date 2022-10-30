import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '/home/enzo/projet/toba-design/src/styles/HomePages/partials/LastRealization.module.scss'
import { Link, useParams } from 'react-router-dom'
import data from '/home/enzo/projet/toba-design/src/views/MotionDesigns/data.js'
import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import Footer from '/home/enzo/projet/toba-design/src/components/Navigations/Footer.js'
function DetailProject() {
    const [Id, setId] = useState(useParams())
    const [Projet, setProjet] = useState()
    const { t } = useTranslation()

    const projet = data.find((e) => e.id === Number(Id.id))

    return (
        <div>
            <Nav />
            <div className={styles['lastRealization']}>
                <h1> {projet.title} </h1>
                <iframe
                    className={styles['lastRealization__video']}
                    width="560"
                    height="315"
                    src={projet.youTube}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <p>{projet.description}</p>
            </div>
            <Footer />
        </div>
    )
}

export default DetailProject
