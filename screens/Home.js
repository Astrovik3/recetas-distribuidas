import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
//import Box from '@mui/material/Box';
//import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Rating from '@mui/material/Rating';
//import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';
import { searchRecipes } from '../utils/recipesApi';




const Home = ({navigation}) => {
  const classes = useStyles();

  const [foodData, setFoodData] = useState('');
  const [userData, setUserData] = useState('');
  const [foodRating, setRating] = useState();
  const [recipesScroll, setRecipesScroll] = useState('');

  const validateUser = async () => {
    const recipeDataApi = await searchRecipes();
    //console.log(recipeDataApi);

    setFoodData(recipeDataApi[0]);
    setUserData(recipeDataApi[0].user);

    setRecipesScroll(recipeDataApi);
    //console.log(recipeDataApi);
    //console.log(recipeDataApi.slice(0,3));

    const avgRating = recipeDataApi[0].ratingSet.map(item => item.rating).reduce((a, b) => a + b, 0);
    setRating(Math.round(avgRating / recipeDataApi[0].ratingSet.length));

    //console.log(Math.round(avgRating / recipeDataApi[0].ratingSet.length));
    //const sum = times.reduce((a, b) => a + b, 0);
    //const avg = (sum / times.length) || 0;
  }
  validateUser();

  //const userData = Object.assign(name.user);
  //console.log(name.user);

  return (
    <Grid>
      <NavBarSup />

      <p className={classes.titleHome}> Novedades </p>
      <div className={classes.mainRecetaHome}>
        <ImageListItem style={{ borderRadius: '12px', width: '90%', height: '310px' }} onClick={() => navigation.navigate('Recipe')}>
          
          <ImageListItemBar  
            title={<div style={{padding: '0px'}}> {`${foodData.name}`} </div>}
            subtitle={'por ' + `${userData.name}`}
            style={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', height: '84px' }}
            actionIcon={
              <div>
                <Rating 
                  readOnly 
                  value={parseInt(`${foodRating}`)}
                  size='small' 
                  style={{color: '#F1AE00'}}
                  emptyIcon={<StarBorderIcon style={{color: '#F1AE00'}} fontSize='inherit'/>}
                /> 
                <BookmarkBorderOutlinedIcon style={{color: '#F1AE00', top: '0px'}}/>
              </div>
            }
          />
        </ImageListItem>

      </div>
      



      


      <NavBarInf />
    </Grid>

  );
}

export default Home;

/*<div style={{ position: 'relative', top: '20px' }}>
        <p className={classes.titleHome}> Recomendaciones </p>
        <Box className={classes.homeScroll} >
          {data.map((item) => (
            <ImageListItem key={item.src} style={{ marginRight: '35px', alignItems: 'center', borderRadius: '12px' }}>
              <img
                style={{ height: '170px', width: '170px', borderRadius: '12px' }}
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </Box>
      </div>*/