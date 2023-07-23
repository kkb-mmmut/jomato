import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'
import downArrow from '/icons/down-arrow.png'
import profilePic from '/images/profilepic.jpg'
import Login from '../../Auth/Login/Login'
import Signup from '../../Auth/Signup/Signup'
import SearchBar from '../../../utils/SearchBar/SearchBar'

import css from './NavigationBar2.module.css';

let NavigationBar = ({ toogleMenu, setToggleMenu }) => {  
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });
    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <Link to='/' className={css.appTxt}>Zomato</Link>
            </div>
            <div className={css.searchBar}>
                <SearchBar />
            </div>
            <div className={css.rightSide}>
                {  (<>
                    <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: true, signup: false })}>Log in</div>
                    <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Sign up</div>
                </>)}
            </div>
        </div>
        <div className={css.modals}>
            {auth?.login ? <Login setAuth={setAuth}/> : null}
            {auth?.signup ? <Signup setAuth={setAuth}/> : null}
        </div>
    </div>
}

export default NavigationBar;