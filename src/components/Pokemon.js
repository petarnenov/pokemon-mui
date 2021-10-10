import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  CardActions,
  Button,
  Paper,
  Container,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useClasses } from '../hooks/use-classes';
import { ArrowBack } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useHTTP } from '../hooks/use-http';
import { api } from '../db/api';

export default function Pokemon(props) {
  const state = useSelector((state) => state.pokedeskItem);
  const { sendRequest } = useHTTP();
  const { id } = useParams();
  const classes = useClasses();
  const history = useHistory();
  const handlerBack = () => history.push('/');

  useEffect(() => {
    sendRequest({
      input: `${api.url}/${id}`,
      init: { method: 'GET' },
      action: 'setItem',
    });
  }, [sendRequest, id]);

  return (
    <Container sx={classes.grid.container}>
      <Grid container justifyContent="center">
        {state.item?.sprites && (
          <Grid item>
            <Card xs={12} sm={6} md={4} sx={classes.pokemon}>
              <CardHeader
                avatar={
                  <Avatar src={`${state.item?.sprites['front_shiny']}`} />
                }
                title={`${state.item?.id}. ${state.item?.name}`}
                subheader={new Date().toLocaleString()}
              />
              <CardMedia
                component="img"
                image={`${state.item?.sprites['front_default']}`}
              />
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  Species: {state.response?.species.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Height: {state.response?.height}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Weight: {state.response?.weight}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Types:{' '}
                  {state.response?.types.reduce((acc, e) => {
                    return `${acc} ${e.type.name}`;
                  }, '')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button startIcon={<ArrowBack />} onClick={handlerBack}>
                  Back
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
