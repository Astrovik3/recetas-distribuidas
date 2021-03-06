import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert } from '@mui/material';

import imgReset from '../media/imgReset.png';
import { useStyles } from '../components/styles';
import { requestPasswordReset } from '../utils/recipesApi';

const ResetPassword = ({navigation}) => {
  const classes = useStyles();
  
  const [userMail, setMail] = useState('');
  const [aviso, setAviso] = useState('');


  const sendCodeEmail = async () => {
    const userDataAPI = await requestPasswordReset(userMail);
    console.log(userDataAPI);
    
    //SUPUSE QUE EL CÓDIGO DE VERIFICACIÓN ES MAYOR A 1000... SINO DESPUÉS SE CAMBIA LA LÓGICA...
    if(userDataAPI > 1000) {
      navigation.navigate('ResetPassword2', {userDataAPI, userMail});
    } else if(userDataAPI == 404) {
      setAviso(<Alert severity="error">El correo electrónico no existe</Alert>);
    } else {
      setAviso(<Alert severity="error">Hubo un error al enviar el código</Alert>);
    }
  }


  return (
    <Grid className={classes.containerReset}>
      <Grid className={classes.arrowBack}>
        <div style={{width: '35px', height: '35'}} onClick={() => navigation.navigate('Login')}>
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
            label="Correo electrónico" 
            variant="standard" 
            value={userMail} 
            onChange={(event) => {setMail(event.target.value)}}
          />
          <Grid className={classes.avisos}>
            {aviso}
          </Grid>
        </Grid>

        <Grid className={classes.bttnReset}>
          <Button title='continuar' color={'#F1AE00'} onPress={sendCodeEmail}/>
        </Grid>
      </Grid>

    </Grid>
  );
}


export default ResetPassword;
