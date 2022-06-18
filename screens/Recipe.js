import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Receta1 from '../media/Receta1.png';
import { useStyles } from '../components/styles';

const Recipe = ({navigation}) => {
  const classes = useStyles();

  const stars = 4;
  const cantFillStars = ([]);
  for (let i=0; i < stars; i++) {
    cantFillStars.push(1);
  }
  const cantEmptyStars = ([]);
  for (let i=stars; i < 5; i++) {
    cantEmptyStars.push(1);
  }

  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack} style={{position: 'absolute'}}>
        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('Home')}>
          <ArrowBackIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </div>
      </Grid>

      <Grid>
        <img src={Receta1} alt='imgReset' style={{width: '100%'}}/>
      </Grid>

      <Grid>
        <Grid className={classes.nameFoodRecipe}>
          <p style={{marginTop: '0px', marginBottom: '0px'}}>Fideos con salsa</p>
          <BookmarkIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </Grid>
        <Grid className={classes.authorRecipe}>
          <p style={{marginTop: '0px', marginBottom: '0px'}}>por Victor H.</p>
        </Grid>
      </Grid>

      <div className={classes.starsRecipe}>
        {
          stars !== 0
          ? <div style={{display: 'flex'}} onClick={() => navigation.navigate('Reviews')}>
              <Grid> 
                {cantFillStars.map(() => <StarIcon style={{color: '#F1AE00'}} fontSize='small'/>)} 
              </Grid>
              <Grid> 
                {cantEmptyStars.map(() => <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>)} 
              </Grid>
            </div>
          : <StarBorderIcon style={{color: '#F1AE00'}} fontSize='small'/>
        }
        <p className={classes.ratingRecipe}>4.0 (216)</p>
      </div>


    </Grid>
  );
}

export default Recipe;
