import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import React, { FC, useState } from 'react';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { LangSwither } from 'widgets/LangSwitcher/ui/LangSwither';
import cls from './Sidebar.module.scss';

interface SideBarProps {
    className?: string;
}

export const Sidebar:FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button
        type="button"
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={cls.swithers}>
        <ThemeSwither />
        <LangSwither className={cls.lang} />
      </div>
    </div>
  );
};
