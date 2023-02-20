import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, ListItemText, styled } from '@mui/material';

const Link = styled(NavLink)(({ theme }) => ({
  alignSelf: 'stretch',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.common.black,
  padding: theme.spacing(1, 2),
  '&.active': {
    color: theme.palette.primary.main,
    boxShadow: `inset 6px 0 0 ${theme.palette.primary.main}`,
  },
}));

type NavbarMobileLinkProps = {
  to: string,
  children: React.ReactNode,
  onClick: VoidFunction,
};

const NavbarMobileLink: React.FC<NavbarMobileLinkProps> = ({
  to,
  children,
  onClick,
}) => (
  <MenuItem key={to} sx={{ minHeight: { sm: 48 }, p: 0 }} onClick={onClick}>
    <Link to={to}>
      <ListItemText>{children}</ListItemText>
    </Link>
  </MenuItem>
);

export default NavbarMobileLink;
