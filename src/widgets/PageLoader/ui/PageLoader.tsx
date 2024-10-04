import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { FC } from 'react';
import './PageLoader.scss';
import { Loader } from 'shared/ui/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader:FC<PageLoaderProps> = ({ className }) => (

  <div className={ClassNames('PageLoader', {}, [className])}>
    <Loader />
  </div>
);
