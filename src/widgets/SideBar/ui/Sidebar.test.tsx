import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslation } from 'shared/lib/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test 1', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    RenderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
