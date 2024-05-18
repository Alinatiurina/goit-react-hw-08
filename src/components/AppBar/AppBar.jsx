import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AppBar, Toolbar, Box } from '@mui/material';
import css from "./AppBar.module.css"

export default function MyAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box className={css.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}