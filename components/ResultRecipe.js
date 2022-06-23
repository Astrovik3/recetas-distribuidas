import React, { useState } from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
//import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';



const ResultRecipe = ({recipe}) => {

  //Acá inicializo un array vacío y luego lo voy llenando a partir del parámetro stars...
  const cantFillStars = ([]);
  for (let i=0; i < stars; i++) {
    cantFillStars.push(1);
  }
  const cantEmptyStars = ([]);
  for (let i=stars; i < 5; i++) {
    cantEmptyStars.push(1);
  }

  //TOMAR DE {RECIPE} TODOS LOS VALORES QUE NECESITAS: NOMBRE, USUARIO CREADOR, PUNTAJE, ETC...
  
  return (
    <Grid style={{marginBottom: '10px'}}>
      <Grid>
        <img />

        <Grid>
          <Grid>
            <Text>Fideos con salsa </Text>
          </Grid>
          <Grid>
            <Text>por Victor H. </Text>
          </Grid>
        </Grid>

        <Grid>
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
          <BookmarkIcon style={{color: '#F1AE00'}} fontSize='small'/>

        </Grid>

      </Grid>
    </Grid>
  );
}

export default ResultRecipe;
