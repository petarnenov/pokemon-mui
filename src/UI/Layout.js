import React from 'react';
import {
  Search,
  Lock,
  PersonAdd,
  LockOpen,
  Dashboard,
} from '@mui/icons-material';
import {
  Avatar,
  AppBar,
  Toolbar,
  Container,
  Grid,
  LinearProgress,
  Box,
  Typography,
  InputBase,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { useClasses } from '../hooks/use-classes';
import { pokedeskItemActions } from '../store/pokedesk-item-slice';
import { useDispatch } from 'react-redux';

export default function Layout(props) {
  const classes = useClasses();
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    const filter = e.target.value;
    dispatch(
      pokedeskItemActions.onSearch({
        filter,
      })
    );
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={classes.toolbar.container}>
          <IconButton
            color="inherit"
            edge="start"
            size="medium"
            aria-label="dashboard"
            sx={{
              mr: 4,
            }}
          >
            <Dashboard />
          </IconButton>
          <Button startIcon={<Lock />} variant="contained">
            Login
          </Button>
          <Button startIcon={<PersonAdd />} variant="contained">
            Register
          </Button>
          <Search sx={classes.toolbar.items} />
          <Button startIcon={<LockOpen />} variant="contained">
            Logout
          </Button>
          <Search sx={classes.toolbar.items} />
          <TextField
            size="small"
            label="Search field"
            type="search"
            variant="outlined"
            sx={classes.search}
            onChange={searchHandler}
            sx={classes.toolbar.items}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={classes.toolbar.items}
          />
        </Toolbar>
      </AppBar>
      {props.children}
    </>
  );
}
