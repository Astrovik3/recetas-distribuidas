import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
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
import recetaTest from '../media/recetaTest.png';
import imagenComida01 from '../media/imagenComida01.png';




const Home = ({navigation}) => {
  const classes = useStyles();

  const [foodData, setFoodData] = useState('');
  const [userData, setUserData] = useState('');
  const [foodRating, setRating] = useState('');
  const [recipesScroll, setRecipesScroll] = useState([]);
  
  useEffect(() =>{
    const validateUser = async () => {
      const recipeDataApi = await searchRecipes()
      .then(
        (result) => {
          setFoodData(result[0]);
          setUserData(result[0].user);
          setRecipesScroll(result.slice(0, 3));
          console.log(result[0]);
      });

      //setFoodData(recipeDataApi[0]);
      //console.log(testa[0].user);
    }
    validateUser();
  }, []);

  console.log(recipesScroll);
  console.log(userData.name);
  console.log(foodData.name);
  //console.log(testa[0]);

      /*setFoodData(recipeDataApi[0]);
      setUserData(recipeDataApi[0].user);


      setRecipesScroll(recipeDataApi.slice(0, 3));
      //console.log(recipeDataApi);
      //console.log(recipeDataApi.slice(0,3));

      const avgRating = recipeDataApi[0].ratingSet.map(item => item.rating).reduce((a, b) => a + b, 0);
      setRating(Math.round(avgRating / recipeDataApi[0].ratingSet.length));*/


  
  //const userData = Object.assign(name.user);
  //console.log(name.user);

  return (
    <Grid>
      <NavBarSup />

      <p className={classes.titleHome}> Novedades </p>
      <div className={classes.mainRecetaHome}>
        <ImageListItem style={{borderRadius: '12px', width: '90%', height: '310px'}} onClick={() => navigation.navigate('Recipe')}>
          <img 
            style={{borderRadius: '12px'}}
            src={imagenComida01} />

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


      <div style={{position: 'relative', top: '20px'}}>
        <p className={classes.titleHome}> Recomendaciones </p>

        <Box className={classes.homeScroll} >

          {recipesScroll.map((item) => (
            <ImageListItem style={{marginRight: '35px', alignItems: 'center', borderRadius: '12px'}} onClick={() => navigation.navigate('Recipe')}>
              <img
                style={{height: '170px', width: '170px', borderRadius: '12px'}}
                src={recetaTest}
                alt='test'
              />
              <ImageListItemBar
                title={item.name}
              />
            </ImageListItem>
          ))}
        </Box>
      </div>
      


      <NavBarInf />
    </Grid>

  );
}

export default Home;