import { createTheme } from '@mui/material/styles';
import typography from './typography.style';
import palette from './palette.style';
import { colorVariables } from './variables.style';
import zIndex from './z-index.style';
import breakpoints from './breakpoints.style';
import shadows from './shadows.style';

export const themeMaterial = createTheme({
  palette: palette('dark'),
  shadows: shadows(),
  breakpoints: breakpoints(),
  typography,
  zIndex: zIndex()
});

export const themeStyledComponent = {
  colors: colorVariables
} as const;
