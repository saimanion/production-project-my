import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button';

export const BugButton:FC = () => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  const { t } = useTranslation();
  return (
    <Button
      onClick={onThrow}
    >
      {t(
        'Кинуть в экран ошибку',
      )}
    </Button>
  );
};
