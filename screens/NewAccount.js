import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert } from '@mui/material';

import { useStyles } from '../components/styles';
import { createAccount } from '../utils/recipesApi';



const NewAccount = ({navigation}) => {
  const classes = useStyles();

  const [inputEmail, setEmail] = useState('');
  const [inputUser, setUser] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [aviso, setAviso] = useState('');

  const validateAccount = async () => {

    if(inputEmail == '' || inputUser == '' || inputPassword == ''){
      setAviso(<Alert severity="error">Debe ingresar todos los datos</Alert>);
    }else {
      const userDataAPI = await createAccount(inputUser, inputPassword, inputEmail);
      console.log(userDataAPI);
      
      if(userDataAPI == 200) {
        navigation.navigate('NewAccount2', inputEmail);
      }else if(userDataAPI == 500) {
        setAviso(<Alert severity="error">La cuenta ya existe</Alert>);
      }else {
        setAviso(<Alert severity="error">Hubo un problema en la creación</Alert>);
      }
    }

  }


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
          <TextField 
            fullWidth id="standard-basic" 
            label="Correo electrónico" 
            variant="standard" 
            value={inputEmail} 
            onChange={(event) => {setEmail(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Usuario" 
            variant="standard" 
            value={inputUser} 
            onChange={(event) => {setUser(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Contraseña" 
            variant="standard"
            value={inputPassword} 
            onChange={(event) => {setPassword(event.target.value)}}
          />
        </Grid>
        <Grid className={classes.avisos}>
          {aviso}
        </Grid>

        <Grid className={classes.bttnNewAccount}>
          <Button title='continuar' color={'#F1AE00'} onPress={validateAccount}/>
        </Grid>
        
        <Grid className={classes.textBelow}>
          <Text style={{color: '#757575'}}>
            Haciendo click en continuar estás aceptando los {' '}
            <Text style={{fontWeight: 'bold', color: '#F1AE00'}}> 
              Terminos y Condiciones
            </Text>
          </Text>
        </Grid>
      </Grid>

    </Grid>
  );
}


export default NewAccount;

