import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useStyles } from '../components/styles';
import { addAccountDetails } from '../utils/recipesApi';


const NewAccount2 = ({route, navigation}) => {
  const classes = useStyles();

  const userEmail = route.params;

  const [inputOneName, setOneName] = useState('');
  const [inputTwoName, setTwoName] = useState('');
  const [inputAge, setAge] = useState('');
  const [inputCountry, setCountry] = useState('');
  const [aviso, setAviso] = useState('');

  const addNewDataUser = async () => {
    const userDataAPI = await addAccountDetails(userEmail, inputOneName, inputTwoName, inputAge, inputCountry);
    console.log(userDataAPI);

    if(inputOneName == '' || inputTwoName == '' || inputAge == '' || inputCountry == '') {
      setAviso('debe ingresar todos los datos');

    }else {
      if(userDataAPI == 200) {
        navigation.navigate('Login');
      }else {
        //CONTEMPLAR BIEN LOS DIFERENTES CASOS...
        setAviso('hubo un problema en la carga de datos');
      }
    }
  }


  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack}>
        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('NewAccount')}>
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
            label="Nombre" 
            variant="standard" 
            value={inputOneName} 
            onChange={(event) => {setOneName(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Apellido" 
            variant="standard" 
            value={inputTwoName} 
            onChange={(event) => {setTwoName(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Edad" 
            variant="standard"
            value={inputAge} 
            onChange={(event) => {setAge(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="País" 
            variant="standard"
            value={inputCountry} 
            onChange={(event) => {setCountry(event.target.value)}}
          />
        </Grid>
        <Grid className={classes.avisos}>
          <Text style={{fontWeight: 'bold', color: '#ff2929'}}> {aviso} </Text>
        </Grid>
        
        <Grid className={classes.bttnNewAccount}>
          <Button title='continuar' color={'#F1AE00'} onPress={addNewDataUser}/>
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


export default NewAccount2;

