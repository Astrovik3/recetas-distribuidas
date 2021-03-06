import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { useStyles } from '../components/styles';
import { FlatList } from 'react-native-web';


const CreacionReceta = () => {
    const classes = useStyles();

    return (

        <Grid className='default'>
            <NavBarSup />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <TextField id="NombreReceta" label="Nombre" variant="outlined" />

                <Stack direction="row" spacing={3} sx={{ marginTop: 1 }}>
                    <Box component="span" sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#A4A3A2', borderRadius: '14px' }}>
                        <IconButton aria-label="delete" size="large">
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                    <Box component="span" sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#A4A3A2', borderRadius: '14px' }}>
                        <IconButton aria-label="delete" size="large">
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                    <Box component="span" sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#A4A3A2', borderRadius: '14px' }}>
                        <IconButton aria-label="delete" size="large">
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                </Stack>
            </div>
                <div >
                    <div >
                        <div>
                            <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Descripcion </Text>
                        </div>
                        <div>
                            <Box
                                sx={{

                                    bgcolor: 'background.paper',
                                    borderRadius: '12px',
                                    boxShadow: 1,
                                    fontWeight: 'bold',
                                    marginTop: 1
                                }}
                            >
                                <TextField fullWidth id="descripcion_receta" hiddenLabel style={{ backgroundColor: '#EBEBAD' }} />
                            </Box>
                        </div>

                        <div>
                            <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Pasos </Text>
                        </div>

                        <div>
                            <Box
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: 1,
                                    fontWeight: 'bold',
                                    marginTop: 1,
                                }}
                            >
                                <div>
                                    {itemData.map((item) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                borderRadius: '12px',
                                                boxShadow: 1,
                                                fontWeight: 'bold',
                                                backgroundColor: '#EBEBAD',

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
                                                    alignItems: 'flex-start',
                                                    m: 3,
                                                    minWidth: { md: 350 },
                                                }}
                                            >
                                                <Box component="span" sx={{ fontSize: 16, color: 'brown' }}>
                                                    {item.step}
                                                </Box>
                                                <Box component="span" sx={{ fontSize: 12 }}>
                                                    {item.descripcion}
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </div>
                            </Box>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: 1,
                                    fontWeight: 'bold',
                                    marginTop: 1
                                }}
                            >
                                <div>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'row', md: 'column' },
                                            alignItems: 'center',
                                            borderRadius: '12px',
                                            boxShadow: 1,
                                            fontWeight: 'bold',
                                            backgroundColor: '#EBEBAD'
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                p: 2,
                                                border: '1px dashed grey',
                                                backgroundColor: '#A4A3A2',
                                                borderRadius: '14px',
                                                marginLeft: 1,
                                            }}
                                        >
                                            <IconButton aria-label="delete" size="large">
                                                <AddIcon fontSize="inherit" />
                                            </IconButton>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: { xs: 'flex-start', md: 'flex-start' },
                                                m: 3,
                                                minWidth: { md: 350 },
                                                marginLeft: 1,
                                            }}
                                        >
                                            <Box component="span" sx={{ fontSize: 16, color: 'brown' }}>
                                                NUEVO PASO
                                            </Box>
                                            <Box component="span" sx={{ fontSize: 12 }}>
                                                <TextField fullWidth id="descripcion_paso" hiddenLabel style={{ backgroundColor: '#EBEBAD' }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </Box>
                        </div>

                        <div>
                            <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Pasos </Text>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: 1,
                                    fontWeight: 'bold',
                                    marginTop: 1
                                }}
                            >
                                <div>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'row', md: 'column' },
                                            alignItems: 'center',
                                            borderRadius: '12px',
                                            boxShadow: 1,
                                            fontWeight: 'bold',
                                            backgroundColor: '#EBEBAD'
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                p: 2,
                                                border: '1px dashed grey',
                                                backgroundColor: '#A4A3A2',
                                                borderRadius: '14px',
                                                marginLeft: 1,
                                            }}
                                        >
                                            <IconButton aria-label="delete" size="large">
                                                <AddIcon fontSize="inherit" />
                                            </IconButton>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: { xs: 'flex-start', md: 'flex-start' },
                                                m: 3,
                                                minWidth: { md: 350 },
                                                marginLeft: 1,
                                            }}
                                        >
                                            <Box component="span" sx={{ fontSize: 16, color: 'brown' }}>
                                                NUEVO PASO
                                            </Box>
                                            <Box component="span" sx={{ fontSize: 12 }}>
                                                <TextField fullWidth id="descripcion_paso" hiddenLabel style={{ backgroundColor: '#EBEBAD' }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </Box>
                        </div>                 
                    </div>
                </div>
            <NavBarInf />
        </Grid>

    );
}

export default CreacionReceta;


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        step: 'Paso numero 1',
        descripcion: 'La comida es comprimida y dirigida desde la boca hacia el es??fago mediante la degluci??n, y del es??fago al est??mago, donde los alimentos son mezclados con ??cido clorh??drico que los descompone, sobre todo, a las prote??nas desnaturaliz??ndolas.',
    },

];