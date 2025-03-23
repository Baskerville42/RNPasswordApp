import darkColors from './darkColors.ts';
import lightColors from './lightColors.ts';

export const getColors = (theme: 'light' | 'dark') => ({
  background: theme === 'dark' ? '#000' : '#FFF',
  text: theme === 'dark' ? '#FFF' : '#000',
  placeholder: theme === 'dark' ? '#888' : '#888',
  placeholderIcon: theme === 'dark' ? '#aaa' : '#333',
  cardBackground: theme === 'dark' ? '#1C1C1E' : '#F2F2F7',
  inputBackground: theme === 'dark' ? '#2C2C2E' : '#FFF',
  border: theme === 'dark' ? '#3A3A3C' : '#C7C7CC',
  separator: theme === 'dark' ? '#3A3A3C' : '#C7C7CC',
  divider: theme === 'dark' ? '#333' : '#aaa',
  primary: darkColors.primary,
});
