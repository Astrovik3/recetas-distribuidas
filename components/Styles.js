import { makeStyles } from "@material-ui/core";


/* ARCHIVO DE ESTILOS */

const useStyles = makeStyles((theme) => ({
  default: {
    flex: 1,
    backgroundColor: '#82f082',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  containerLogin: {
    backgroundColor: '#F4F4F4', 
    height: '100%'
  },
  gridLogin: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputLogin: {
    display: 'flex',
    width: '80%',
    marginTop: '10px',
    height: '150px',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imgLogin: {
    width: '100%', 
    height: '300px'
    //justifySelf: 'center',
  },
  bttnLogin: {
    //marginTop: '90px',
    marginTop: '24%',
    justifyContent: 'center',
    width: '60%'
  },
  recuperarLogin: {
    display: 'flex',
    width: '80%',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    marginBottom: '20px',
  },

  containerReset: {
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    height: '100%'

  },
  imgReset: {
    display: 'flex',
    width: '100%',
    height: '110px',
    marginTop: '120px',
    marginBottom: '60px',
    justifyContent: 'center'
  },
  gridReset: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputReset: {
    display: 'flex',
    width: '80%',
    marginTop: '25px',
    justifyContent: 'center'
  },
  bttnReset: {
    justifyContent: 'center',
    width: '60%',
    marginTop: '47%'
  },
  textTitles: {
    fontFamily: 'Helvetica',
    fontSize: 'large',
    color: '1E1E1E'
  }


}));


export {useStyles};
