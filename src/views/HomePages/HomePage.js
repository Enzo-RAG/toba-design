import React from 'react'

import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import PresentationToba from './partials/PresentationToba'
import TobaSkills from './partials/TobaSkills'
import LastRealisation from './partials/LastRealization'

function HomePage() {
    return (
        <div>
            <Nav />
            <PresentationToba />
            <TobaSkills />
            <LastRealisation />
        </div>
    )
}

export default HomePage
