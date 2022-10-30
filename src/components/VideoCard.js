import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from '/home/enzo/projet/toba-design/src/styles/components/VideosCard.module.scss'

function LanguageButton(props) {
    const [Test, setTest] = useState(props.testdata)
    const [FrontPicture, setFrontPicture] = useState(props.frontPicture)
    const [MiniPicture, setMiniPicture] = useState(props.miniPicture)
    const [Title, setTitle] = useState(props.title)
    const [Descritption, setDescritption] = useState(props.description)
    const [Id, setId] = useState(props.id)

    return (
        <Link className={styles[`card`]} to={`/detail${Id}`}>
            <img className={styles[`card__img`]} src={FrontPicture} alt="projet_img" />
        </Link>
    )
}

export default LanguageButton
