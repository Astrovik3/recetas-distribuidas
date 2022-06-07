import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
Por default creo que me crea una especie de navbar... ahí le clavé el navbar... VER BIEN SI SE PUEDE SACAR...
<Stack.Screen name='Login' component={Login} options={{title: <NavBar />}}/>

DE ESTA FORMA SUPLANTAS LA NAVBAR QUE VIENE POR DEFECTO POR UNA QUE SE HAGA CUSTOM...
<Stack.Screen name='Home' component={Home} options={{header: () => <NavBar />}}/>
*/

export default App;
