import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/Styles.module.scss';



import HomePage from './views/HomePage';
import MotionDesign from './views/MotionDesign'


function App() {
  return (

    <div>
      <Routes>
                  <Route element={<HomePage/>} path="/" exact />
          <Route element={<HomePage/>} path="/motionDesign"  />

          
              </Routes>
      </div>
    

  );
}

export default App;