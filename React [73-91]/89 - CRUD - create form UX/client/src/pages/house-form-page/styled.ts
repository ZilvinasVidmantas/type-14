import {
  styled,
  Stack,
  Paper as MuiPaper,
} from '@mui/material';

export const PageLayout = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.sm,
  },
}));
