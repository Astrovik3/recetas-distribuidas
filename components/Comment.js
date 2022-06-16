import React, { useState } from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
    <Grid style={{marginBottom: '25px'}}>
      <Grid style={{display: 'flex', justifyContent: 'space-between'}}>
        <Text>FOTO      </Text> 
        <Text> {name} </Text> 
        <Grid style={{width: '120px'}}>
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
      <Text> {comment} </Text>
      <p style={{marginTop: '0px'}}>_______________________</p>

    </Grid>
  );
}

//DESPUÉS SE ELIMINA Y SE HACE BIEN ESE INTENTO DE DIVISOR DE COMENTARIOS... <p>____</p>

export default Comment;
