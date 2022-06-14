import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useStyles } from '../components/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const NavBarSup = () => {
  const classes = useStyles();


  return (
    <Grid style={{ backgroundColor: '#EBEBAD', height: '50px' }}>
      <div style={{padding: '5px'}} onClick={() => navigation.navigate('Recipe')}>
        <ArrowBackIcon />
      </div>

      <div className={classes.navBarSup}>
        <h3 > COMIDAPP </h3>
      </div>
      <div style={{marginTop: -50, float: 'right', padding: '5px'}}>
        <Avatar src="/broken-image.jpg" />
      </div>
    </Grid>
  );
}


export default NavBarSup;
