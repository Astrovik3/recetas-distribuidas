import React from 'react';
import { Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import imgReset from '../media/imgReset.png';
import { useStyles } from '../components/styles';

const ResetPassword = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack}>
        <ArrowBackIcon style={{color: '#F1AE00'}} fontSize='large'/>
      </Grid>

      <Grid className={classes.imgReset}>
        <img src={imgReset} alt='imgReset' style={{width: '110px'}}/>
      </Grid>

      <Grid className={classes.gridReset}>
        <p className={classes.textTitles}> CAMBIAR CONTRASEÑA </p>

        <Grid className={classes.inputReset}>
          <TextField fullWidth id="standard-basic" label="Correo electrónico" variant="standard"/>
        </Grid>

        <Grid className={classes.bttnReset}>
          <Button title='continuar' color={'#F1AE00'} />
        </Grid>
      </Grid>

    </Grid>
  );
}

// className={classes.imgReset}
// onPress={() => navigation.navigate('Home')}

export default ResetPassword;
