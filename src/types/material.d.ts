import Typography from '../libs/material/overrides/Typography';
import {
  PaletteColor,
  Breakpoints,
  Transitions,
  Shadows,
  BaseTheme,
  Palette,
  ZIndexOptions,
} from '@mui/material/styles';

interface IBasePaletteColor extends PaletteColor {
  lightest?: string;
  darkest?: string;
  lighter?: string;
  darker?: string;
}

interface IBasePalette extends Palette {
  primary: IBasePaletteColor;
  secondary: IBasePaletteColor;
  error: IBasePaletteColor;
  warning: IBasePaletteColor;
  info: IBasePaletteColor;
  success: IBasePaletteColor;
  // eslint-disable-next-line no-undef
  augmentColor: (options: PaletteAugmentColorOptions) => IBasePaletteColor;
}

interface IBaseBreakpoints extends Breakpoints {}

interface IBaseZIndex extends ZIndexOptions {}

interface IBaseTypography extends Typography {}

interface IBaseTransitions extends Transitions {}

interface IBaseShadows extends Shadows {}

interface IBaseTheme extends BaseTheme {
  // mixins: Mixins;
  palette: IBasePalette;
  shadows: IBaseShadows;
  transitions: IBaseTransitions;
  // typography: ITypography;
  // zIndex: IZIndex;
  unstable_strictMode?: boolean;
}

declare module '@mui/material/styles/createPalette' {
  type IPaletteColor = IBasePaletteColor;
  type IPalette = IBasePalette;
}

declare module '@mui/system' {
  type IBreakpoints = IBaseBreakpoints;
}

declare module '@mui/material/styles/zIndex' {
  type IZIndex = IBaseZIndex;
}

declare module '@mui/material/styles/createTypography' {
  type ITypography = IBaseTypography;
}

declare module '@mui/material/styles/createTransitions' {
  type ITransitions = IBaseTransitions;
}

declare module '@mui/material/styles' {
  type IShadows = IBaseShadows;
  type ITheme = IBaseTheme;
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    noti: true;
  }
}
