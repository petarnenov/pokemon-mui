import React, { memo } from 'react';
import {
  Grid,
  LinearProgress,
  Box,
  Typography,
} from '@mui/material';
import { useClasses } from '../hooks/use-classes';
import PokeDeskItem from './PokeDeskItem';
import { useSelector, useDispatch } from 'react-redux';


function PokeDesk() {
  const state = useSelector((state) => state.pokedeskItem);
  const dispatch = useDispatch();
  const classes = useClasses();

  return (
    <>
      <Box sx={{ paddingTop: '64px' }}>
        {state.isPending && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress color="secondary" />
          </Box>
        )}
        {state.onError && (
          <Typography variant="h6" align="center" sx={classes.error}>
            something goes wrong: {state.onError}
          </Typography>
        )}
        <Grid container spacing={1} sx={classes.grid.container}>
          {state?.filteredItems?.count &&
            state?.filteredItems?.results.map((item, index) => (
              <PokeDeskItem
                item={{ id: index + 1, name: item.name }}
                key={index}
              />
            ))}
        </Grid>
      </Box>
    </>
  );
}

export const PokeDeskMemo = memo(PokeDesk);
