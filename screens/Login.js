import React from 'react';
import { Text, Button } from 'react-native';
import { Grid } from '@material-ui/core';

const Login = ({navigation}) => {
  return (
    <Grid className='default'>
      <Text> LOGIN screen </Text>
      <Button title='home' onPress={() => navigation.navigate('Home')} />
      
    </Grid>
  );
}

/*
Exportar los estilosssssssss
<Grid className='default'>
*/

export default Login;
