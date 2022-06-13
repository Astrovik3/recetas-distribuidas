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

  return (
    <Grid>
      <Grid>
        <Text>FOTO      </Text> 
        <Text>Nombre Apellido      </Text> 
        <StarIcon style={{color: '#F1AE00'}} fontSize='small'/>
        <StarIcon style={{color: '#F1AE00'}} fontSize='small'/>
        <StarIcon style={{color: '#F1AE00'}} fontSize='small'/>
        <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>
        <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>
      </Grid>
      <Text> 
        Ut enim ad minima veniam, quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. 
      </Text>

    </Grid>
  );
}

export default Comment;
