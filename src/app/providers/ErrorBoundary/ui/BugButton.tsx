import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

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
