import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './views/HomePages/HomePage'
import MotionDesign from './views/MotionDesigns/MotionDesign'
import OtherRealisation from './views/OtherRealisation'
import WhoIAm from './views/WhoIAm'
import DetailProject from './views/MotionDesigns/DetailProject'

function App() {
    return (
        <div>
            <Routes>
                <Route element={<HomePage />} path="/" exact />
                <Route element={<MotionDesign />} path="/motionDesign" />
                <Route element={<OtherRealisation />} path="/otherRealisation" />
                <Route element={<WhoIAm />} path="/whoIAm" />
                <Route element={<DetailProject />} path="/motionDesign/detail" />
            </Routes>
        </div>
    )
}

export default App
