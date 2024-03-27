import { Theme, Components } from '@mui/material/styles';
import { LB_PRIMARY } from '../styles';

const Accordion = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.MuiPaper-noti': {
            borderRadius: 8,
            '&::before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              backgroundColor: LB_PRIMARY['50'],
            },
            '.MuiAccordionSummary-root': {
              minHeight: '44px',
            },
            '.MuiAccordionSummary-content.Mui-expanded': {
              margin: 0,
            },
          },
        },
      },
    },
  };
};

export default Accordion;
