import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Sheet from '@mui/joy/Sheet';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';
import imagenComida01 from '../media/imagenComida01.png';



const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

const Home = ({navigation}) => {
  const classes = useStyles();


  return (
    <Grid>
      <NavBarSup />

      <div style={{ position: 'relative', top: '10px', marginBottom: '50px' }}>
        <Text > NUEVO INGRESO DEL DIA </Text>
        <div style={{position: 'relative', top: '2px'}}>
          <Card className={classes.homeCard}>
            <CardMedia
              component="img"
              height="194"
              image={imagenComida01}
              alt="Paella dish"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>

      <div style={{marginTop: '50px' }}>
        <Text> RECOMENDACIONES </Text>
        <Box  style={{position: 'relative', top: '2px'}} className={classes.homeScroll}>
          {data.map((item) => (
            <Sheet
              key={item.title}
              variant="outlined"
              sx={{
                gap: 2,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'sm',
              }}
            >
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 80, borderRadius: 'sm', overflow: 'auto' }}
              >
                <img src={item.src} alt={item.title} />
              </AspectRatio>
              <Box sx={{ whiteSpace: 'nowrap' }}>
                <Typography fontWeight="md">{item.title}</Typography>
              </Box>
            </Sheet>
          ))}
        </Box>
      </div>

      <NavBarInf/>
    </Grid>

  );
}

export default Home;
