import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { FC } from 'react';
import { Themes, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwither:FC<ThemeSwitherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={cls.ThemeSwither}>
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
