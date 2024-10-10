import React, { FC } from 'react';
import { ClassNames } from '../../../shared/lib/ClassNames/ClassNames';
import { AppLink } from '../../../shared/ui/AppLink';
import { AppLinkTheme } from '../../../shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({ children, className }) => (
  <div className={ClassNames(cls.NavBar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.RED} to="/about">О нас</AppLink>
    </div>
  </div>
);
