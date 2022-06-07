import React from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';

import imgLogin from '../media/imgLogin.png';
import { useStyles } from '../components/styles';

const Login = ({navigation}) => {
  //de aca me importo los estilos...
  const classes = useStyles();


  return (
    <Grid className={classes.containerLogin}>

      <img src={imgLogin} alt='imgLogin' className={classes.imgLogin}/>

      <Grid className={classes.gridLogin}>
        <Grid className={classes.inputLogin}>
          <TextField fullWidth id="standard-basic" label="Usuario" variant="standard"/>
          <TextField fullWidth id="standard-basic" label="Contraseña" variant="standard"/>
        </Grid>

        <Text style={{color: '#F1AE00'}}>Me olvidé la contraseña</Text>

        <Grid style={{width: '120px'}}>
          <Button title='LOGIN' color={'#F1AE00'} onPress={() => navigation.navigate('Home')} />
        </Grid>

        <Text>No tenés una cuenta? crear</Text>

      </Grid>
    </Grid>
  );
}

/*
-Importar estilos de archivo separado??? VER

-Importar imagenes??? VER
<img src={require('../media/recetaTest')}  />
*/

export default Login;
