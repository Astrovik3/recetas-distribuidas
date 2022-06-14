import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useStyles } from './styles';



const NavBarInf = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  
  return (
    <Grid style={{backgroundColor: '#EBEBAD'}}>
      <Box className={classes.homeFooterBar}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Inicio" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction label="Buscar" icon={<SearchIcon />} />
          <BottomNavigationAction label="Agregar" icon={<AddIcon />} />
          <BottomNavigationAction label="Guardados" icon={<BookmarksOutlinedIcon />} />
        </BottomNavigation>
      </Box>
    </Grid>
  );
}


export default NavBarInf;
