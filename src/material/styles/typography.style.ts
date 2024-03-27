import { FONT_FAMILY_ENUM, FONT_SIZE_ENUM } from '@common/enums';
import { StylesUtils } from '@common/utils';
import { ITypography } from '@mui/material/styles/createTypography';
export default function typography() {
  const typography: ITypography = {
    h1: {
      ...StylesUtils.fontBase(24, 28),
      fontWeight: 600,
    },
    h2: {
      ...StylesUtils.fontBase(20, 24),
      fontWeight: 600,
    },
    h3: {
      ...StylesUtils.fontBase(17, 20),
      fontWeight: 600,
    },
    h4: {
      ...StylesUtils.fontBase(17, 20),
      fontWeight: 500,
    },
    h5: {
      ...StylesUtils.fontBase(12, 14),
      fontWeight: 600,
    },
    h6: {
      ...StylesUtils.fontBase(16, 16),
      fontWeight: 400,
    },
    subtitle1: {
      ...StylesUtils.fontBase(16, 16),
      fontWeight: 400,
    },
    subtitle2: {
      ...StylesUtils.fontBase(16, 16),
      fontWeight: 400,
    },
    body1: {
      ...StylesUtils.fontBase(15, 18),
      fontWeight: 600,
    },
    body2: {
      ...StylesUtils.fontBase(15, 18),
      fontWeight: 400,
    },
    caption: {
      ...StylesUtils.fontBase(12, 14),
      fontWeight: 400,
    },
    button: {
      ...StylesUtils.fontBase(14, 17),
      fontWeight: 600,
    },
    overline: {
      ...StylesUtils.fontBase(10, 12),
      fontWeight: 400,
    },
    fontFamily: FONT_FAMILY_ENUM.PRIMARY,
    fontSize: FONT_SIZE_ENUM.DEFAULT,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: FONT_SIZE_ENUM.DEFAULT,
    pxToRem: (px: number): string => StylesUtils.pxToRem(px),
  };

  return typography;
}
