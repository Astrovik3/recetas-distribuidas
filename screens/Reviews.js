import React from 'react';
import { Grid } from '@material-ui/core';
import CreateIcon from '@mui/icons-material/Create';

import NavBarSup from '../components/NavBarSup';
import Comment from '../components/Comment';
import { useStyles } from '../components/styles';

//Acá se debería cargar el nombre de la receta con la puntuación general total...
//También el texto que dice "comentarios y puntuaciones"...
//Y el ícono del láíz que al hacerle click te sale un pop-up para escribir y puntuar la receta...
//{receta}

const Reviews = ({listReviews, navigation}) => {
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

        <div style={{width: '35px', height: '35'}}>
          <CreateIcon style={{color: '#F1AE00'}} fontSize='large' onClick={() => navigation.navigate('FavoritosRecetas')}/>
        </div>
      </Grid>

      <Grid className={classes.commentsReview}>
        <Comment name={'Rodrigo Iglesias'} stars={3} comment={'Este es un comentario de prueba. Es la primer reseña. No me gustó la comida.'}/>
        <Comment name={'Marta Rojas'} stars={1} comment={'Si, está muy buena la receta. Todo muy rico... soy alérgico al tomate igual, saludos!'}/>
        <Comment name={'Agnes Obel'} stars={5} comment={'Este podría ser otro comentario más de prueba, depende de cuanta gente quiera comentar... 10 puntos.'}/>
      </Grid>
    </Grid>
  );
}

export default Reviews;
