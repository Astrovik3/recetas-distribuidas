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

        <Grid className={classes.recuperarLogin}>
          <Text style={{fontWeight: 'bold', color: '#F1AE00'}} onPress={() => navigation.navigate('ResetPassword')}>
            Me olvidé la contraseña
          </Text>
        </Grid>

        <Grid className={classes.bttnLogin}>
          <Button title='LOGIN' color={'#F1AE00'} onPress={() => navigation.navigate('Home')}/>
        </Grid>

        <Text style={{marginTop: '12%', color: '#757575'}}>
          No tenés una cuenta? ' 
          <Text style={{fontWeight: 'bold', color: '#F1AE00', justifyContent: 'center'}} onPress={() => navigation.navigate('NewAccount')}> 
            crear
          </Text>
        </Text>

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
