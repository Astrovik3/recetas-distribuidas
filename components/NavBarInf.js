import React from 'react';
import { Grid } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
import { useNavigation } from '@react-navigation/native';

//onClick={() => navigation.navigate('Home')}
//onClick={() => navigation.navigate('CreacionReceta')}
//onClick={() => navigation.navigate('FavoritosRecetas')}


const NavBarInf = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const navigation = useNavigation();

  return (
    <Grid className={classes.homeFooterBar}>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeOutlinedIcon style={{ color: '#F1AE00' }} fontSize='large' onClick={() => navigation.navigate('Home')} />} />
          <BottomNavigationAction icon={<SearchIcon style={{ color: '#F1AE00' }} fontSize='large' onClick={() => navigation.navigate('ResultadoBusqueda')} />} />
          <BottomNavigationAction icon={<AddIcon style={{ color: '#F1AE00' }} fontSize='large' onClick={() => navigation.navigate('CreacionReceta')} />} />
          <BottomNavigationAction icon={<BookmarksOutlinedIcon style={{ color: '#F1AE00' }} fontSize='large' onClick={() => navigation.navigate('FavoritosRecetas')} />} />
        </BottomNavigation>
      </Box>
    </Grid>
  );
}


export default NavBarInf;
