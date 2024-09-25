import React, {Suspense, useContext, useState} from 'react';
import {ClassNames} from "../helpers/ClassNames/ClassNames";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";

import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import useTheme from "./theme/useTheme";



const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={ClassNames('app',{}, [theme])}>
            <button  onClick={toggleTheme}>Change theme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;