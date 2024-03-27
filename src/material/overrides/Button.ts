import { Components, Theme } from '@mui/material/styles';
import { LB_GRAY, linearGradientVariables } from '../styles';
import { StylesUtils } from '../../common/utils';

const Button = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { primary, common } = theme.palette;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          padding: '12px 20px',
          boxShadow: theme.shadows['1'],
          ...StylesUtils.fontBase(14, 24),
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '17px',
          ':hover': {
            boxShadow: theme.shadows['1'],
          },
        },
        contained: {
          background: linearGradientVariables.primary,
          '&:hover': {
            opacity: '0.8',
          },
          '&.Mui-disabled': {
            color: common.white,
          },
        },
        outlined: {
          border: `1px solid ${primary.main}`,
          '&:hover': {},
          '&.Mui-disabled': {
            borderColor: LB_GRAY['200'],
            background: LB_GRAY['100'],
            color: LB_GRAY['200'],
          },
        },
        sizeMedium: {
          borderRadius: '8px',
          padding: '13.5px 10px',
        },
        sizeLarge: {
          borderRadius: '12px',
          padding: '18px 10px',
        },
        endIcon: {
          marginRight: '0',
          '*:nth-of-type(1)': {
            fontSize: '24px',
          },
        },
      },
    },
  };
};

export default Button;
