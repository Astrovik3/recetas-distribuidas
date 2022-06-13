import React, { useState } from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//La screen Reviews llama a cada Comment, mandandole los datos 
//de cada usuario (comentario, puntuacion, etc) => {photo, name, stars, comment}

//Hay que ver bien como es la función que dependiendo del 
//parámetro (start) me llena la cantidad de íconos vacios y rellenos... 

const Comment = ({photo, name, stars, comment}) => {

  //Acá inicializo un array vacío y luego lo voy llenando a partir del parámetro stars...
  //donde me llega la puntuación del comentario...
  const cantFillStars = ([]);
  for (let i=0; i < stars; i++) {
    cantFillStars.push(1);
  }
  const cantEmptyStars = ([]);
  for (let i=stars; i < 5; i++) {
    cantEmptyStars.push(1);
  }

  
  return (
    <Grid>
      <Grid>
        <Text>FOTO      </Text> 
        <Text>Nombre Apellido       </Text> 
        <Grid>
          {
            stars !== 0
            ? <Grid style={{display: 'flex'}}>
                <Grid> 
                  {cantFillStars.map(() => <StarIcon style={{color: '#F1AE00'}} fontSize='small'/>)} 
                </Grid>
                <Grid> 
                  {cantEmptyStars.map(() => <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>)} 
                </Grid>
              </Grid>
            : <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>
          }
        </Grid>
      </Grid>
      <Text> 
        Ut enim ad minima veniam, quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. 
      </Text>

    </Grid>
  );
}

export default Comment;
