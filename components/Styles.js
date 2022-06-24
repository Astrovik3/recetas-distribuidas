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
    height: '210px',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imgLogin: {
    width: '100%',
    height: '300px'
  },
  bttnLogin: {
    position: 'absolute',
    bottom: '16%',
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
    margin: '0px',
    overflow: 'hidden',
  },
  imgReset: {
    display: 'flex',
    width: 'auto',
    height: '110px',
    marginTop: '55px',
    marginBottom: '40px',
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
    flexDirection: 'column',
    width: '80%',
    marginTop: '5px',
    justifyItems: 'space-around'
  },
  bttnReset: {
    position: 'absolute',
    bottom: '16%',
    justifyContent: 'center',
    width: '60%'
  },
  avisos: {
    display: 'flex',
    height: '60px',
    paddingTop: '5px',
    bottom: '10px',
    justifyContent: 'center',
    alignContent: 'flex-start'
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
    marginTop: '50px',
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
    justifyContent: 'space-between'
  },
  commentsReview: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },

  authorRecipe: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '15px',
    color: '#6A6A6A',
    fontFamily: 'Helvetica'

  },
  nameFoodRecipe: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '30px',
    fontFamily: 'Helvetica',
    fontSize: 'x-large',
    color: '#1E1E1E',
    justifyContent: 'space-between'


  },
  starsRecipe: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '25px',
    alignContent: 'center'
  },
  ratingRecipe: {
    marginTop: '0px',
    marginBottom: '0px',
    paddingLeft: '3px',
    fontFamily: 'Helvetica',
    color: '#6A6A6A',

  },


  homeFooterBar: {
    position: 'fixed',
    left: '0px',
    right: '0px',
    bottom: '0px',
    width: 'auto',
    height: '56px'
  },
  homeCard: {
    width: 'auto'
  },
  homeScroll: {
    display: 'flex',
    position: 'relative',
    paddingLeft: '15px', 
    marginTop: '10px',
    horizontal: 'true',
    gap: 1,
    overflow: 'auto',
    decelerationRate:'0',
    snapToInterval:'200', //your element width
    snapToAlignment:'center', 
    overflow: 'auto', 
    '::-webkit-scrollbar': { display: 'none' },
  },
  titleHome: {
    paddingLeft: '15px',
    marginTop: '20px',
    marginBottom: '0px',
    height: '25px',
    fontFamily: 'Helvetica',
    fontSize: 'x-large',
    color: '#1E1E1E',
  },
  navBarSup: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '15px',
    backgroundColor: '#EBEBAD',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  mainRecetaHome: {
    display: 'flex', 
    width: 'auto', 
    height: '330px', 
    position: 'relative', 
    top: '10px', 
    backgroundColor: '#FCDC8C', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleSearch: {
    paddingLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
    height: '20px',
    fontFamily: 'Helvetica',
    fontSize: 'large',
    color: '#1E1E1E',
  },
  authorSearch: {
    display: 'flex',
    marginBottom: '20px',
    paddingLeft: '10px',
    color: '#6A6A6A',
    fontFamily: 'Helvetica',
  }


}));


export { useStyles };
