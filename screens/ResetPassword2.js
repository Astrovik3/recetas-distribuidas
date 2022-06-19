import React from 'react';
import { Text, Button } from 'react-native';
import { Grid, TextField } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import imgReset from '../media/imgReset.png';
import { useStyles } from '../components/styles';


const ResetPassword2 = ({route, navigation}) => {
  const classes = useStyles();
  
  const codigoEnviado = route.params;
  

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
          <TextField fullWidth id="standard-basic" label="Código" variant="standard"/>
          <TextField fullWidth id="standard-basic" label="Nueva contraseña" variant="standard"/>
          <TextField fullWidth id="standard-basic" label="Nueva contraseña" variant="standard"/>
        </Grid>

        <Grid className={classes.bttnReset}>
          <Button title='continuar' color={'#F1AE00'} />
        </Grid>

        <Grid className={classes.textBelow}>
          <Text style={{ color: '#757575' }}>
            No te llegó un mail? {' '}
            <Text style={{ fontWeight: 'bold', color: '#F1AE00' }}>
              volver a enviar
            </Text>
          </Text>
        </Grid>
      </Grid>

    </Grid>
  );
}


export default ResetPassword2;
