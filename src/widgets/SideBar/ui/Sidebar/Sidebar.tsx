import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import React, { FC, useState } from 'react';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { LangSwither } from 'widgets/LangSwitcher/ui/LangSwither';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
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
        <ThemeSwither />
        <LangSwither className={cls.lang} />
      </div>
    </div>
  );
};
