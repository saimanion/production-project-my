import { Button } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';
import { ThemeButton } from './Button';

describe('ClassNames', () => {
  test('Кнопка с текстом', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Кнопка с темой', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
