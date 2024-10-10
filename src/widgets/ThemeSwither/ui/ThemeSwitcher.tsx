import { FC } from 'react';

import { Themes } from '../../../app/providers/ThemeProvider';
import useTheme from '../../../app/providers/ThemeProvider/lib/useTheme';
import { ClassNames } from '../../../shared/lib/ClassNames/ClassNames';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from '../../../shared/ui/Button/ui/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={cls.ThemeSwitcher}>
      <Button
        theme={ThemeButton.CLEAR}
        className={ClassNames(cls.themeButton, {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
