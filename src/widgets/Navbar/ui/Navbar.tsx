import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '../../../shared/lib/ClassNames/ClassNames';
import { AppLink } from '../../../shared/ui/AppLink';
import { AppLinkTheme } from '../../../shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={ClassNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <AppLink theme={AppLinkTheme.RED} to="/about">О нас</AppLink>
      </div>
    </div>
  );
};
