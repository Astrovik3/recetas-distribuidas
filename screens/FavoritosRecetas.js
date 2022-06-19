import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@elmichael'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@elmichael'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@elmichael'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },

];



const Favoritos = () => {
    const classes = useStyles();

    const [ingrediente, setIngrediente] = React.useState('');

    const handleChange = (event) => {
        setIngrediente(event.target.value);
    };

    return (
        <Grid className='default'>
            <NavBarSup />

            <div style={{ backgroundColor: '#EBEBAD', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '65%' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filtros</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Filtros"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ingrediente</MenuItem>
                            <MenuItem value={20}>Usuario</MenuItem>
                            <MenuItem value={30}>Nombre</MenuItem>
                            <MenuItem value={40}>Categoría</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    id="filled-search"
                    label="Ingrese una palabra..."
                    type="search"
                    variant="filled"
                    style={{ width: '85%', marginTop: 10 }}
                />
            </div>

            <ImageList sx={{ width: '100%', height: '80%' }} cols={2} rowHeight={180}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            style={{ borderRadius: '12px' }}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            style={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', }}
                            position='bottom'
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <NavBarInf />
        </Grid>

    );
}

export default Favoritos;
