import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import { Alert } from '@mui/material';

import imgLogin from '../media/imgLogin.png';
import { useStyles } from '../components/styles';
import { loginUser, searchRecipes } from '../utils/recipesApi';

const Login = ({ navigation }) => {
  //de aca me importo los estilos...
  const classes = useStyles();

  //VER DE USAR REDUX??? VER..............................
  const [userName, setName] = useState('');
  const [userPass, setPass] = useState('');
  const [aviso, setAviso] = useState('');


  const validateUser = async () => {
    //const userDataAPI = requestPasswordReset('testAlumno@mail.com');
    //const userDataAPI = await searchRecipes();

    const userDataAPI = await loginUser(userName, userPass);

    //console.log(userDataAPI);
    if(userDataAPI == 200) {
      setAviso(<Alert severity="success">Todo en orden</Alert>);

      const recipeDataApi = await searchRecipes();
      //console.log(recipeDataApi);
      
      const recipesForHome = recipeDataApi.slice(0, 3);

      setTimeout(() => {
        navigation.navigate('Home', recipesForHome);
      }, 2000);
    } 
    else {
      setAviso(<Alert severity="error">El usuario no existe</Alert>);
      setTimeout(() => {
        setAviso('');
      }, 1500);
    }
  }

  return (
    <Grid className={classes.containerLogin}>

      <img src={imgLogin} alt='imgLogin' className={classes.imgLogin} />

      <Grid className={classes.gridLogin}>
        <Grid className={classes.inputLogin}>
          <TextField 
            fullWidth id="standard-basic" 
            label="Usuario" 
            variant="standard" 
            value={userName} 
            onChange={(event) => {setName(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Contraseña" 
            variant="standard" 
            value={userPass} 
            onChange={(event) => {setPass(event.target.value)}}
          />
        </Grid>

        <Grid className={classes.recuperarLogin}>
          <Text style={{ fontWeight: 'bold', color: '#F1AE00' }} onPress={() => navigation.navigate('ResetPassword')}>
            Me olvidé la contraseña
          </Text>
        </Grid>
        <Grid className={classes.avisos}>
          {aviso}
        </Grid>

        <Grid className={classes.bttnLogin}>
          <Button title='LOGIN' color={'#F1AE00'} onPress={validateUser}/>
        </Grid>

        <Grid className={classes.textBelow}>
          <Text style={{ color: '#757575' }}>
            No tenés una cuenta? {' '}
            <Text style={{ fontWeight: 'bold', color: '#F1AE00' }} onPress={() => navigation.navigate('NewAccount')}>
              crear
            </Text>
          </Text>
        </Grid>

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
