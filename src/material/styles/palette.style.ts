import { colorVariables } from './variables.style';
import { alpha } from '@mui/material/styles';
import {
  CommonColors,
  IPalette,
  IPaletteColor,
  PaletteAugmentColorOptions,
} from '@mui/material/styles/createPalette';

export const LB_GRAY = {
  50: '#F0F0F0',
  100: '#E0E0E0',
  200: '#C2C2C2',
  300: '#A3A3A3',
  400: '#858585',
  500: '#666666',
  600: '#4D4D4D',
  700: '#333333',
  800: '#1A1A1A',
  900: '#0A0A0A',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};

export const LB_PRIMARY = {
  50: '#EFF0FE',
  100: '#DFE0FD',
  200: '#BFC1FA',
  300: '#9EA3F8',
  400: '#7E84F5',
  500: '#5E65F3',
  600: '#474CB6',
  700: '#2F337A',
  800: '#18193D',
  900: '#090A18',
  A100: '#f5f5f5',
  A200: '#474747',
  A400: '#bdbdbd',
  A700: '#616161',
};

export const COMMON: CommonColors = {
  black: colorVariables.black,
  white: colorVariables.white,
};

const PRIMARY: IPaletteColor = {
  main: LB_PRIMARY['500'],
  light: LB_PRIMARY['400'],
  lighter: LB_PRIMARY['200'],
  lightest: LB_PRIMARY['50'],
  dark: LB_PRIMARY['600'],
  darker: LB_PRIMARY['700'],
  darkest: LB_PRIMARY['900'],
  contrastText: colorVariables.white,
};

const SECONDARY: IPaletteColor = {
  main: '#9c27b0',
  light: '#ba68c8',
  dark: '#7b1fa2',
  contrastText: colorVariables.white,
};

const ERROR: IPaletteColor = {
  main: '#e72727',
  light: '#ef5350',
  dark: '#c62828',
  contrastText: colorVariables.white,
};

const WARNING: IPaletteColor = {
  main: '#ed6c02',
  light: '#ff9800',
  dark: '#e65100',
  contrastText: colorVariables.white,
};

const INFO: IPaletteColor = {
  main: '#0288d1',
  light: '#03a9f4',
  dark: '#01579b',
  contrastText: colorVariables.white,
};

const SUCCESS: IPaletteColor = {
  main: '#2e7d32',
  light: '#4caf50',
  dark: '#1b5e20',
  contrastText: colorVariables.white,
};

const DEFAULT_PALETTE_LIGHT: IPalette = {
  common: COMMON,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: LB_GRAY,
  text: {
    primary: LB_GRAY['600'],
    secondary: alpha(COMMON['black'], 0.6),
    disabled: alpha(COMMON['black'], 0.38),
  },
  divider: alpha(COMMON['black'], 0.12),
  action: {
    active: alpha(COMMON['black'], 0.54),
    hover: alpha(COMMON['black'], 0.04),
    hoverOpacity: 0.04,
    selected: alpha(COMMON['black'], 0.08),
    selectedOpacity: 0.08,
    disabled: alpha(COMMON['black'], 1),
    disabledBackground: alpha(COMMON['black'], 0.12),
    disabledOpacity: 0.38,
    focus: alpha(COMMON['black'], 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  mode: 'light',
  contrastThreshold: 0,
  tonalOffset: 0,
  background: {
    paper: COMMON['white'],
    default: COMMON['white'],
  },
  getContrastText: function (background: string): string {
    return background;
  },
  augmentColor: function (options: PaletteAugmentColorOptions): IPaletteColor {
    return options.color as IPaletteColor;
  },
};
const DEFAULT_PALETTE_DARK: IPalette = {
  common: {
    black: colorVariables.white,
    white: colorVariables.black,
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: LB_GRAY,
  text: {
    primary: LB_GRAY['600'],
    secondary: alpha(COMMON['black'], 0.6),
    disabled: alpha(COMMON['black'], 0.38),
  },
  divider: alpha(COMMON['black'], 0.12),
  action: {
    active: alpha(COMMON['black'], 0.54),
    hover: alpha(COMMON['black'], 0.04),
    hoverOpacity: 0.04,
    selected: alpha(COMMON['black'], 0.08),
    selectedOpacity: 0.08,
    disabled: alpha(COMMON['black'], 1),
    disabledBackground: alpha(COMMON['black'], 0.12),
    disabledOpacity: 0.38,
    focus: alpha(COMMON['black'], 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  mode: 'light',
  contrastThreshold: 0,
  tonalOffset: 0,
  background: {
    paper: COMMON['white'],
    default: COMMON['white'],
  },
  getContrastText: function (background: string): string {
    return background;
  },
  augmentColor: function (options: PaletteAugmentColorOptions): IPaletteColor {
    return options.color as IPaletteColor;
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...DEFAULT_PALETTE_LIGHT,
    mode: 'light',
  } as const;

  const dark = {
    ...DEFAULT_PALETTE_DARK,
    mode: 'dark',
  } as const;

  return themeMode === 'light' ? light : dark;
}
