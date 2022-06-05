import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import NavBar from './components/NavBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{title: <NavBar />}}/>
        <Stack.Screen name='Home' component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
Por default creo que me crea una especie de navbar... ahí le clavé el navbar... VER BIEN SI SE PUEDE SACAR...
<Stack.Screen name='Login' component={Login} options={{title: <NavBar />}}/>
*/

export default App;
