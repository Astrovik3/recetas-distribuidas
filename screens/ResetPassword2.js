import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import imgReset from '../media/imgReset.png';
import { useStyles } from '../components/styles';


const ResetPassword2 = ({route, navigation}) => {
  const classes = useStyles();
  const [inputCode, setCode] = useState('');
  const [inputPass1, setPass1] = useState('');
  const [inputPass2, setPass2] = useState('');
  const [aviso, setAviso] = useState('');
  
  const codigoEnviado = route.params;

  const validateCode = () => {
    if(codigoEnviado !== parseInt(inputCode)) {
      //ESTE AVISO SE DEBERÍA HACER MÁS LINDO...
      setAviso('el código ingresado no es el mismo');
    }else if(inputPass1 !== inputPass2) {
      //ESTE AVISO SE DEBERÍA HACER MÁS LINDO...
      setAviso('las contraseñas ingresadas no coinciden');
    }else if(codigoEnviado == parseInt(inputCode) && inputPass1 == inputPass2) {
      navigation.navigate('Login');
    }
  }

  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack}>
        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('ResetPassword')}>
          <ArrowBackIcon style={{color: '#F1AE00'}} fontSize='large'/>
        </div>
      </Grid>

      <Grid className={classes.imgReset}>
        <img src={imgReset} alt='imgReset' style={{width: '110px'}}/>
      </Grid>

      <Grid className={classes.gridReset}>
        <p className={classes.textTitles}> CAMBIAR CONTRASEÑA </p>

        <Grid className={classes.inputReset}>
          <TextField 
            fullWidth id="standard-basic" 
            label="Código" 
            variant="standard" 
            value={inputCode} 
            onChange={(event) => {setCode(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Nueva contraseña" 
            variant="standard" 
            value={inputPass1} 
            onChange={(event) => {setPass1(event.target.value)}}
          />
          <TextField 
            fullWidth id="standard-basic" 
            label="Nueva contraseña" 
            variant="standard" 
            value={inputPass2} 
            onChange={(event) => {setPass2(event.target.value)}}
          />
          <Grid className={classes.avisos}>
            <Text style={{fontWeight: 'bold', color: '#ff2929'}}> {aviso} </Text>
          </Grid>
        </Grid>

        <Grid className={classes.bttnReset}>
          <Button title='aceptar' color={'#F1AE00'} onPress={validateCode}/>
        </Grid>

        <Grid className={classes.textBelow}>
          <Text style={{color: '#757575'}}>
            No te llegó un mail? {' '}
            <Text style={{fontWeight: 'bold', color: '#F1AE00'}}>
              volver a enviar
            </Text>
          </Text>
        </Grid>
      </Grid>

    </Grid>
  );
}


export default ResetPassword2;
