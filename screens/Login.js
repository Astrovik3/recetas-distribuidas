import React from 'react';
import { Text, Button, View } from 'react-native';
import { Grid, TextField } from '@material-ui/core';

import imgLogin from '../media/imgLogin.png';

const Login = ({navigation}) => {


  return (
    <Grid style={{backgroundColor: '#F4F4F4', height: '100%'}}>

      <img src={imgLogin} alt='imgLogin' style={{width: '100%', height: '300px'}}/>

      <Grid style={{display: 'grid', gridColumn:'1fr', justifyContent: 'center'}}>
        <TextField id="standard-basic" label="Usuario" variant="standard"/>
        <TextField id="standard-basic" label="Contraseña" variant="standard"/>

        <br />
        <Text style={{color: '#F1AE00'}}>Me olvidé la contraseña</Text>

        <View style={{width: '120px'}}>
          <Button title='LOGIN' color={'#F1AE00'} onPress={() => navigation.navigate('Home')} />
        </View>

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
