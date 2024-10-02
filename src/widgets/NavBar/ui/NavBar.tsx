import React, {FC} from 'react';
import {ClassNames} from "shared/lib/ClassNames/ClassNames";
import cls from './NavBar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";



interface NavbarProps {
    className?: string;
}

export const NavBar:FC<NavbarProps> = ({children, className}) => {
    return (
        <div className={ClassNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.RED} to='/about'>О нас</AppLink>
            </div>
        </div>
    );
};



