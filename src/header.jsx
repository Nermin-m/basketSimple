import React, { useContext } from 'react';
import style from './assets/header.module.css';
import { FruitApp } from "./context/context";

function Header(props) {
    const { state } = useContext(FruitApp);
    const { basket } = state;

    return (
        <div>
            <ul className={style.nav_menu}>
                <li>E-commerce</li>
                <li>home</li>
                <li>basket<span style={{background:'yellow',padding:'5px 10px',color:'black',marginLeft:'10px'}}>{basket}</span></li>
            </ul>
        </div>
    );
}

export default Header;
