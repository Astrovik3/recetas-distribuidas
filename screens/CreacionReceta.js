import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';




const CreacionReceta = () => {
    const classes = useStyles();

    const [ingrediente, setIngrediente] = React.useState('');

    const handleChange = (event) => {
        setIngrediente(event.target.value);
    };

    return (
        <Grid className='default'>
            <NavBarSup />

            <div style={{ backgroundColor: '#EBEBAD', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                
            </div>

            

            <NavBarInf />
        </Grid>

    );
}

export default CreacionReceta;
