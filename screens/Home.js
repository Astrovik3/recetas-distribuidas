import React from 'react';
import { Text } from 'react-native';
import { Grid } from '@material-ui/core';

import NavBarSup from '../components/NavBarSup';

const Home = () => {
  return (
    <Grid className='default'>
      <NavBarSup />
      <Text> HOME </Text>
    </Grid>
  );
}

export default Home;
