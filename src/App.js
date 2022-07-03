import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/Styles.module.scss'

import HomePage from './views/HomePage'
import MotionDesign from './views/MotionDesign'
import OtherRealisation from './views/OtherRealisation'
import WhoIAm from './views/WhoIAm'

function App() {
    return (
        <div>
            <Routes>
                <Route element={<HomePage />} path="/" exact />
                <Route element={<MotionDesign />} path="/motionDesign" />
                <Route element={<OtherRealisation />} path="/otherRealisation" />
                <Route element={<WhoIAm />} path="/whoIAm" />
            </Routes>
        </div>
    )
}

export default App
