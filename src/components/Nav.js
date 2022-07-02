

import React from 'react';
import {Link} from 'react-router-dom'
import Styles from '../styles/Header.module.scss';

function Nav() {

  
  return (

    <nav className={Styles.header}>
        <Link to="/motionDesign" className={Styles.header__link}>motion design</Link>
        <Link to="/" className={Styles.header__link}>home</Link>
        
        
    </nav>
  );
}


export default(Nav)