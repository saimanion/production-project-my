import React from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from '../../../shared/ui/BugButton/BugButton';
import { Button, ThemeButton } from '../../../shared/ui/Button/ui/Button';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <Button theme={ThemeButton.OUTLINE}>Кнопка с обводкой</Button>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
