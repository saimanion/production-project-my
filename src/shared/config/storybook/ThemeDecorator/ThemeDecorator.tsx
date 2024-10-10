import { DecoratorFn } from '@storybook/react'; // Измените Decorator на DecoratorFn
import { JSX } from 'react';
import { Themes } from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator = (style: Themes): DecoratorFn => (story: () => JSX.Element) => (
  <div className={`app ${style}`}>
    {story()}
  </div>
);
