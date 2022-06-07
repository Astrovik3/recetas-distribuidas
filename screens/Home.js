import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';

import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <Grid className='default'>
      <NavBar />
      <Text> HOME </Text>
    </Grid>
  );
}

export default Home;
