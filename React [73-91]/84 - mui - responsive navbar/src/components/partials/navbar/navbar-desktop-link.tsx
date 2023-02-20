import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarDesktopLink = styled(NavLink)(({ theme }) => ({
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  display: 'grid',
  placeItems: 'center',
  textDecoration: 'none',
  color: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },
}));

export default NavbarDesktopLink;
