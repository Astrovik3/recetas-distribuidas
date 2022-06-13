import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import NavBarSup from '../components/NavBarSup';
import Comment from '../components/Comment';
import { useStyles } from '../components/styles';

//Acá se debería cargar el nombre de la receta con la puntuación general total...
//También el texto que dice "comentarios y puntuaciones"...
//Y el ícono del láíz que al hacerle click te sale un pop-up para escribir y puntuar la receta...
//{receta}

const Reviews = ({receta}) => {
  const classes = useStyles();

  //Con el parámetro este de {receta} me debería traer la puntuación... VER BIEN...

  //<Text>{receta.name}</Text>

  return (
    <Grid>
      <NavBarSup />
      <Grid className={classes.gridReview}>
        <Grid className={classes.nameFoodReview}>
          <p style={{marginTop: '0px', marginBottom: '5px'}}>Fideos con salsa</p>
        </Grid>

        <Grid className={classes.subnavReview}>
          <p style={{marginTop: '5px', marginBottom: '10px'}}>comentarios y calificaciones</p>
          <CreateIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </Grid>
      </Grid>

      <Comment />
      <Text> LISTA DE OPINIONES DE LA RECETA </Text>
    </Grid>
  );
}

export default Reviews;
