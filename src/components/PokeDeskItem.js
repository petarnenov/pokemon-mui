import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { useClasses } from '../hooks/use-classes';
import { DeleteOutlineTwoTone } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { pokedeskItemActions } from '../store/pokedesk-item-slice';

export default function PokeDeskItem({ item }) {
  const { id, name, sprites } = item;
  const classes = useClasses();
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(pokedeskItemActions.onSelect({ selectedItem: item }));
    history.push(`/${item.id}`);
  };
  const deleteHandler = (e) => {
    e.stopPropagation();
    dispatch(pokedeskItemActions.removeItem({ name: item.name }));
  };
  return (
    <Grid item xs={12} sm={4} sx={classes.grid.item}>
      <Card onClick={clickHandler} sx={classes.card}>
        <CardContent>
          {sprites && (
            <CardMedia component="img" image={`${sprites['front_default']}`} />
          )}
          <Typography variant="body1" align="center">
            {id}.{name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"           
            startIcon={<DeleteOutlineTwoTone />}
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
