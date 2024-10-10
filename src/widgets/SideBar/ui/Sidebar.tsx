import React, { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Sidebar.module.scss';

interface SideBarProps {
    className?: string;
}

export const Sidebar:FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
      >
        {t('переключатель')}
      </Button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
