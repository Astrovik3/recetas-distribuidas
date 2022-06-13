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
  homeFooterBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: 'auto'
  },
  homeCard: {
    width: 'auto'
  },
  homeScroll: {
    display: 'flex',
    gap: 1,
    overflow: 'auto',
    width: 'auto',
    scrollSnapType: 'x mandatory',
    '& > *': {
      scrollSnapAlign: 'center',
    },
    '::-webkit-scrollbar': { display: 'none' },
  }



}));


export { useStyles };
