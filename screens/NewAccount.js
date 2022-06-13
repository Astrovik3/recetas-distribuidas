import React from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useStyles } from '../components/styles';

const NewAccount = ({navigation}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack}>
        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('Login')}>
          <ArrowBackIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </div>
      </Grid>

      <Grid style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0px'}}>
        <p className={classes.textTitles2}> CREAR CUENTA </p>
        <p className={classes.textTitles3}> COMIDAPP </p>
      </Grid>

      <Grid className={classes.gridNewAccount}>
        <Grid className={classes.inputNewAccount}>
          <TextField fullWidth id="standard-basic" label="Usuario" variant="standard"/>
          <TextField fullWidth id="standard-basic" label="Correo electrónico" variant="standard"/>
        </Grid>

        <Grid className={classes.bttnNewAccount}>
          <Button title='continuar' color={'#F1AE00'} />
        </Grid>
        
        <Grid className={classes.textBelow}>
          <Text style={{color: '#757575'}}>
            Haciendo click en continuar estás aceptando los '
            <Text style={{fontWeight: 'bold', color: '#F1AE00'}} onPress={() => navigation.navigate('NewAccount')}> 
              Terminos y Condiciones
            </Text>
          </Text>
        </Grid>
      </Grid>

    </Grid>
  );
}



export default NewAccount;

