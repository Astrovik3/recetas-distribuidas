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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';
import imagenComida01 from '../media/imagenComida01.png';



<<<<<<< HEAD
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

=======
>>>>>>> 204223e9dfa13d7ce2ba639ab6e0a084c93f3f0e
const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369',
    title: 'Night view',
    description: '4.21M views',
    author: '@silverdalex',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270',
    title: 'Lake view',
    description: '4.74M views',
    author: '@silverdalex',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270',
    title: 'Mountain view',
    description: '3.98M views',
    author: '@silverdalex',
  },
];

const Home = ({navigation}) => {
  const classes = useStyles();

<<<<<<< HEAD
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
=======
>>>>>>> 204223e9dfa13d7ce2ba639ab6e0a084c93f3f0e

  return (
    <Grid>
      <NavBarSup />

      <div style={{ position: 'relative', top: '10px', backgroundColor: '#FFC68C', width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ borderRadius: '12px', height: '100%' }}>
            <img
              src={`${item.src}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '12px', height: '100%' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              style={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', }}
              actionIcon={
                <IconButton
                  sx={{ color: 'orange' }}
                  aria-label={`info about ${item.title}`}
                >
                  <Rating
                    name="hover-feedback"
                    readOnly
                    value={item.rating}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  <BookmarkBorderOutlinedIcon />
                </IconButton>

              }
            />
          </ImageListItem>
        ))}
      </div>

      <div style={{ position: 'relative', top: '20px' }}>
        <Text> Recomendaciones </Text>
        <Box style={{ position: 'relative', top: '2px' }} className={classes.homeScroll}>
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

      <NavBarInf />
    </Grid>

  );
}

export default Home;


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
