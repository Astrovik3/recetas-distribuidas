import React from 'react';
import { Text, Button, View } from 'react-native';
import { Grid } from '@material-ui/core';

const Login = ({navigation}) => {


  return (
    <Grid style={{backgroundColor: '#82f082', display:'flex', justifyContent: 'center'}}>

      <Text> LOGIN screen </Text>
      <View style={{width: '120px'}}>
        <Button title='home' onPress={() => navigation.navigate('Home')} />
      </View>

    </Grid>
  );
}

/*
-Importar estilos de archivo separado??? VER

-Importar imagenes??? VER
<img src={require('../media/recetaTest')}  />
*/

export default Login;
