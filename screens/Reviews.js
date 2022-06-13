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
      <Grid className={classes.nameFoodReview}>
        <p style={{marginTop: '0px', marginBottom: '0px'}}>Fideos con salsa (estrellitas)</p>
      </Grid>

      <Grid className={classes.subnavReview}>
        <p style={{marginBottom: '5px', alignSelf: 'flex-end'}}>comentarios y calificaciones</p>

        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('Login')}>
          <CreateIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </div>
      </Grid>

      <Grid className={classes.commentsReview}>
        <Comment stars={4}/>
      </Grid>
    </Grid>
  );
}

export default Reviews;
