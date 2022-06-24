import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
//import { alpha } from '@mui/material/styles';
//import Rating from '@mui/material/Rating';
//import StarIcon from '@mui/icons-material/Star';
//import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import ResultRecipe from '../components/ResultRecipe';
import { useStyles } from '../components/styles';
import { searchSomeRecipes } from '../utils/recipesApi';




const ResultadoBusqueda = ({ navigation }) => {
  const classes = useStyles();

  const [inputSearch, setInputSearch] = useState('');
  const [filtro, setFiltro] = useState('');
  const [recipesScroll, setRecipesScroll] = useState([]);

  
  const SearchRecipes = async () => {
    const recipeDataAPI = await searchSomeRecipes(filtro, inputSearch);

    setRecipesScroll(recipeDataAPI);

    //console.log(recipeDataAPI);


  }

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <Grid className='default'>
      <NavBarSup />

      <div style={{height: '115px', backgroundColor: '#EBEBAD', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{width: '65%', marginBottom: '10px'}}>
          <FormControl fullWidth style={{backgroundColor: '#F4F4F4'}} size='small'>
            <InputLabel id="demo-simple-select-label" size='small'> 
              Filtros 
            </InputLabel>
            <Select labelId="simple-select-label" id="simple-select" value={filtro} label="Filtros" onChange={handleChange} style={{backgroundColor: '#F4F4F4'}}>
              <MenuItem value={'usuario'}> Autor </MenuItem>
              <MenuItem value={'categoría'}> Categoría </MenuItem>
              <MenuItem value={'ingrediente'}> Ingrediente </MenuItem>
              <MenuItem value={'noingrediente'}> No ingrediente </MenuItem>
              <MenuItem value={'nombre'}> Nombre </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Paper
          component="form"
          size='small'
          sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
          style={{width: '80%', marginTop: 10, backgroundColor: '#F4F4F4'}}
        >
          <InputBase 
            sx={{ ml: 1, flex: 1 }} 
            placeholder="Ingrese un valor..." 
            value={inputSearch}
            onChange={(event) => {setInputSearch(event.target.value)}}
          />
          <div style={{width: '35px', height: '35'}} onClick={SearchRecipes}>
            <SearchIcon style={{color: '#F1AE00'}}/>
          </div>
        </Paper>

      </div>

      <Grid>
        {recipesScroll.map((item) => (
          <div onClick={() => navigation.navigate('Recipe')}>
            <ResultRecipe name={item.name} author={item.user.name}/>
          </div>
          
        ))}

      </Grid>


      <NavBarInf />
    </Grid>

  );
}

export default ResultadoBusqueda;


/*

      <ResultRecipe name={'nombre comida'} author={'victor h.'}/>
      <ResultRecipe name={'nombre comida'} author={'victor h.'}/>


<div style={{ marginTop: 15 }}>
        {itemData.map((item) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              alignItems: 'center',
              bgcolor: 'background.paper',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: 1,
              fontWeight: 'bold',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 110,
                width: 110,
                marginLeft: 1,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                borderRadius: 2
              }}
              alt="The house from the offer."
              src={item.img}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'flex-start' },
                m: 3,
                minWidth: { md: 350 },
              }}
            >
              <Box component="span" sx={{ fontSize: 16 }}> {item.title} </Box>
              <Box component="span" sx={{ fontSize: 12 }}> {item.author} </Box>
              <Box
                sx={{
                  mt: 1.5,
                  p: 0.5,
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                  borderRadius: '5px',
                  fontWeight: 'medium',
                  display: 'flex',
                  fontSize: 12,
                  alignItems: 'center',
                  '& svg': {                    
                    fontSize: 21,
                    mr: 0.5,
                  },
                }}
              >
                <Box
                  sx={{
                    width: '60%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Rating
                    readOnly
                    name="hover-feedback"
                    value={item.rating}
                    getLabelText={getLabelText}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2, marginLeft: 1 }}>{labels[hover !== -1 ? hover : item.rating]} </Box>
                  )}
                  <BookmarkBorderOutlinedIcon sx={{ marginLeft: 4 }} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
*/