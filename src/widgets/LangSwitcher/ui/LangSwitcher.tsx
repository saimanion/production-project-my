import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { FC } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher:FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={ClassNames(cls.LangSwither, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >

        {t('Язык')}
      </Button>
    </div>
  );
};
