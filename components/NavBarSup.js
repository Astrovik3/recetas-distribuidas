import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const NavBarSup = () => {
  return (
    <Grid style={{backgroundColor: '#EBEBAD'}}>
      <div  onClick={() => navigation.navigate('Recipe')}>
        <ArrowBackIcon />
      </div>

      <p style={{marginBottom: '0px'}}> NAVBARSUP... desarrollarla </p>
    </Grid>
  );
}


export default NavBarSup;
