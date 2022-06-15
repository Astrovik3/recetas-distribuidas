import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useStyles } from '../components/styles';


//NO PUEDO NAVEGAR A OTRAS PAGINAS DESDE LOS NAV BAR SUP E INF... NO SÉ PORQUEEEEE
//onClick={() => navigation.navigate('Recipe')}
//const NavBarSup = ({navigation}) => {

const NavBarSup = () => {
  const classes = useStyles();


  return (
    <Grid className={classes.navBarSup}>
      <div>
        <ArrowBackIcon style={{color: '#F1AE00'}} fontSize='large'/>
      </div>

      <div style={{color: '#FF0000'}}>
        <h3 > COMIDAPP </h3>
      </div>
      <div style={{height: '35px'}}>
        <AccountCircleOutlinedIcon src="/broken-image.jpg" style={{color: '#F1AE00'}} fontSize='large'/>
      </div>
    </Grid>
  );
}


export default NavBarSup;
