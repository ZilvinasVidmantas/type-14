import { Theme } from '@mui/material';

export const navbarDesktopItemStyles = (theme: Theme) => ({
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },
});
