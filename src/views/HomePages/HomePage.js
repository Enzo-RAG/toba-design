import React from 'react'
import Footer from '/home/enzo/projet/toba-design/src/components/Navigations/Footer.js'
import Nav from '/home/enzo/projet/toba-design/src/components/Navigations/Nav.js'
import PresentationToba from './partials/PresentationToba'
import TobaSkills from './partials/TobaSkills'
import LastRealisation from './partials/LastRealization'
import MyRecommendation from './partials/MyRecommendation'

function HomePage() {
    return (
        <div>
            <Nav />
            <PresentationToba />
            <TobaSkills />
            <LastRealisation />
            <MyRecommendation />

            <Footer />
        </div>
    )
}

export default HomePage
