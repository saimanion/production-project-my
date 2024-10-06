import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

describe('ClassNames', () => {
  test('with only first param', () => {
    expect(ClassNames('someClass')).toBe('someClass');
  });
  test('with additional params', () => {
    const expected = 'someClass class1 class2';
    expect(ClassNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass class1 class2 endClass';
    expect(ClassNames('someClass', { endClass: true, class4: false }, ['class1', 'class2'])).toBe(expected);
  });
  test('with all mods true', () => {
    const expected = 'someClass class1 class2 endClass class4';
    expect(ClassNames('someClass', { endClass: true, class4: true }, ['class1', 'class2'])).toBe(expected);
  });
  test('with all mods false', () => {
    const expected = 'someClass class1 class2';
    expect(ClassNames('someClass', { endClass: false, class4: false }, ['class1', 'class2'])).toBe(expected);
  });
  test('with undefined mods', () => {
    const expected = 'someClass class1 class2';
    expect(ClassNames('someClass', { endClass: false, class4: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
