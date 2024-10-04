import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={ClassNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найден')}
    </div>
  );
};
