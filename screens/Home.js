import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';
//import imagenComida01 from '../media/imagenComida01.png';



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
    rating: 4
  },
];


/*function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}*/

const Home = ({route, navigation}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(itemData[0].rating);
  const [hover, setHover] = React.useState(-1);

  const threeRecipes = route.params;

  return (
    <Grid>
      <NavBarSup />

      <p className={classes.titleHome}>Novedades</p>

      <div style={{ position: 'relative', top: '10px', backgroundColor: '#FCDC8C', width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '330px' }}>
        <ImageListItem key={item.img} style={{ borderRadius: '12px', width: '90%', height: '310px' }} onClick={() => navigation.navigate('Recipe')}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: '12px' }}
          />
        

        </ImageListItem>

        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{ borderRadius: '12px', width: '90%', height: '310px' }} onClick={() => navigation.navigate('Recipe')}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '12px' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              style={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', height: '84px' }}
              actionIcon={
                <IconButton
                  sx={{ color: 'orange' }}
                  aria-label={`favorito ${item.title}`}
                >
                  <Rating
                    readOnly
                    name="hover-feedback"
                    value={item.rating}
                    precision={0.5}
                    style={{
                      position: 'relative',
                      bottom: '-30px',
                      left: '-128px'
                    }} 

                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2, position: 'relative', bottom: '-30px', left: '-128px' }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}

                  <BookmarkBorderOutlinedIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </div>

      <div style={{ position: 'relative', top: '20px' }}>
        <p className={classes.titleHome}> Recomendaciones </p>
        <Box className={classes.homeScroll} >
          {data.map((item) => (
            <ImageListItem key={item.src} style={{ marginRight: '35px', alignItems: 'center', borderRadius: '12px' }}>
              <img
                style={{ height: '170px', width: '170px', borderRadius: '12px' }}
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </Box>
      </div>

      <NavBarInf />
    </Grid>

  );
}

export default Home;