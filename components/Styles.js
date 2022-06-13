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
  inputNewAccount: {
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
  },
  bttnLogin: {
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
    height: '100%',
    margin: '0px'

  },
  imgReset: {
    display: 'flex',
    width: '100%',
    height: '110px',
    marginTop: '55px',
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
    position: 'absolute',
    bottom: '16%',
    justifyContent: 'center',
    width: '60%'
  },

  textTitles: {
    fontFamily: 'Helvetica',
    fontSize: 'large',
    color: '1E1E1E'
  },
  textTitles2: {
    marginBottom: '0px',
    fontFamily: 'Helvetica',
    fontSize: 'xx-large',
    color: '1E1E1E'
  },
  textTitles3: {
    fontFamily: 'sans-serif',
    fontSize: 'x-large',
    color: 'red'
  },
  textBotttom: {
    fontFamily: 'Hanuman',
    fontSize: 'x-large',
    color: 'red'
  },
  arrowBack: {
    display: 'flex',
    width: '100%',
    paddingLeft: '30px',
    paddingTop: '30px'

  },

  gridNewAccount: {
    display: 'flex',
    marginTop: '90px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bttnNewAccount: {
    position: 'absolute',
    bottom: '16%',
    justifyContent: 'center',
    width: '60%'
  },
  textBelow: {
    display: 'flex', 
    position: 'absolute',
    height: '40px',
    bottom: '5%',
    justifyContent: 'center', 
    alignContent: 'flex-start',
    width: '85%'
  },

  
  nameFoodReview: {
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    height: '30px',
    fontFamily: 'Helvetica',
    fontSize: 'x-large',
    color: '#1E1E1E',

  },
  subnavReview: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '15px',
    paddingBottom: '10px',
    height: '35px',
    color: '#6A6A6A',
    fontFamily: 'Helvetica',
    justifyContent: 'space-between',
    borderBottom: 'solid #1E1E1E 1px'
  },
  commentsReview: {
    display: 'flex',
    marginTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  }


}));


export {useStyles};
