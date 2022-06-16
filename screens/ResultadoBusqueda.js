import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';


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

const ResultadoBusqueda = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);


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

            <div style={{ marginTop: 15 }}>
                {itemData.map((item) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', md: 'column' },
                            alignItems: 'center',
                            bgcolor: 'background.paper',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 110,
                                width: 110,
                                marginLeft: 1,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={item.img}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'flex-start', md: 'flex-start' },
                                m: 3,
                                minWidth: { md: 350 },
                            }}
                        >
                            <Box component="span" sx={{ fontSize: 16 }}>
                                {item.title}
                            </Box>
                            <Box component="span" sx={{ fontSize: 12 }}>
                                {item.author}
                            </Box>
                            <Box
                                sx={{
                                    mt: 1.5,
                                    p: 0.5,
                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    borderRadius: '5px',
                                    fontWeight: 'medium',
                                    display: 'flex',
                                    fontSize: 12,
                                    alignItems: 'center',
                                    '& svg': {
                                        fontSize: 21,
                                        mr: 0.5,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '60%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        readOnly
                                        name="hover-feedback"
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
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}

                                    <BookmarkBorderOutlinedIcon />
                                </Box>

                            </Box>

                        </Box>
                    </Box>
                ))}
            </div>



            <NavBarInf />
        </Grid>

    );
}

export default ResultadoBusqueda;


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rating: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
        rating: 3,
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        rating: 5,
    },
];