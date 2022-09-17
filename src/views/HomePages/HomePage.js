import React from 'react'

import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import PresentationToba from './partials/PresentationToba'
import TobaSkills from './partials/TobaSkills'

function HomePage() {
    return (
        <div>
            <Nav />
            <PresentationToba />
            <TobaSkills />
        </div>
    )
}

export default HomePage
