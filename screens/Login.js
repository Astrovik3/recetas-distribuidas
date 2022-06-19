import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';

import imgLogin from '../media/imgLogin.png';
import { useStyles } from '../components/styles';
import { loginUser } from '../utils/recipesApi';

const Login = ({ navigation }) => {
  //de aca me importo los estilos...
  const classes = useStyles();

  //onPress={() => navigation.navigate('Home')}
  //console.warn('TEXTO AVISO WARN'); ---------- para cuando ingresan algun dato del login erroneo...

  //VER DE USAR REDUX??? VER..............................
  const [userName, setName] = useState('');
  const [userPass, setPass] = useState('');


  const test = async () => {
    //console.log(userName);
    //console.log(userPass);

    const par1 = "'" + userName + "'";
    const par2 = "'" + userPass + "'";
    const userDataAPI = loginUser(par1, par2);
    
    console.log(userDataAPI);

    //navigation.navigate('Home');

  }


  /*const findUserData = async () => {
    let user = {
      //acá debería volcar los datos que vienen de los TextField que uno ingresa...
      user: {userName},
      password: {userPass},
    }

    //este userLogin es del file UserController.java en repo de Ivan... 
    const userDataAPI = await userLogin(user);
  }*/



  return (
    <Grid className={classes.containerLogin}>

      <img src={imgLogin} alt='imgLogin' className={classes.imgLogin} />

      <Grid className={classes.gridLogin}>
        <Grid className={classes.inputLogin}>
          <TextField fullWidth id="standard-basic" label="Usuario" variant="standard" value={userName} onChange={(event) => {setName(event.target.value)}}/>
          <TextField fullWidth id="standard-basic" label="Contraseña" variant="standard" value={userPass} onChange={(event) => {setPass(event.target.value)}}/>
        </Grid>

        <Grid className={classes.recuperarLogin}>
          <Text style={{ fontWeight: 'bold', color: '#F1AE00' }} onPress={() => navigation.navigate('ResetPassword')}>
            Me olvidé la contraseña
          </Text>
        </Grid>

        <Grid className={classes.bttnLogin}>
          <Button title='LOGIN' color={'#F1AE00'} onPress={test}/>
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
