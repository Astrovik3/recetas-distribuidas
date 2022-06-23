import React, { useState } from 'react';
//import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
//import StarIcon from '@mui/icons-material/Star';
//import StarBorderIcon from '@mui/icons-material/StarBorder';
//import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import { useStyles } from '../components/styles';
import imagenComida02 from '../media/imagenComida02.jpg';


const ResultRecipe = ({photo, name, author, rating}) => {
  const classes = useStyles();

  //Acá inicializo un array vacío y luego lo voy llenando a partir del parámetro stars...
  /*const cantFillStars = ([]);
  for (let i=0; i < stars; i++) {
    cantFillStars.push(1);
  }
  const cantEmptyStars = ([]);
  for (let i=stars; i < 5; i++) {
    cantEmptyStars.push(1);
  }*/

  //TOMAR DE {RECIPE} TODOS LOS VALORES QUE NECESITAS: NOMBRE, USUARIO CREADOR, PUNTAJE, ETC...
  
  return (
    <Grid style={{display: 'flex', marginTop: '15px', height: '100px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Grid style={{display: 'flex', width: '90%', height: '100px', borderRadius: '10px'}}>
        <img src={imagenComida02} style={{height: '100px', width: '100px', borderRadius: '10px', backgroundColor: 'white'}}/>

        <Grid>
          <Grid>
            <p className={classes.titleSearch}> {name} </p>
            <p className={classes.authorSearch} style={{marginTop: '5px'}}> {author} </p>

            <Grid style={{width: '210px', height: '30px', display: 'flex', justifyContent: 'flex-end'}}>
              <BookmarkBorderOutlinedIcon style={{display: 'flex', color: '#F1AE00'}} />
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </Grid>

        
        

      </Grid>
    </Grid>
  );
}

export default ResultRecipe;

/*
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
*/
