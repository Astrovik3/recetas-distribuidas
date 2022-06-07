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
    width: '80%',
    height: '200px',
    paddingTop: '30px',
    alignItems: 'center'
  },
  imgLogin: {
    width: '100%', 
    height: '300px'
  }



}));


export {useStyles};
