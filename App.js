import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import ResetPassword from './screens/ResetPassword';
import NewAccount from './screens/NewAccount';
import Recipe from './screens/Recipe';
import Reviews from './screens/Reviews';
import Favoritos from './screens/FavoritosRecetas';
import ResultadoBusqueda from './screens/ResultadoBusqueda';
import CreacionReceta from './screens/CreacionReceta';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='NewAccount' component={NewAccount} />
        <Stack.Screen name='Recipe' component={Recipe} />
        <Stack.Screen name='Reviews' component={Reviews} />
        <Stack.Screen name='Favoritos' component={Favoritos} />
        <Stack.Screen name='ResultadoBusqueda' component={ResultadoBusqueda} />
        <Stack.Screen name='CreacionReceta' component={CreacionReceta} />


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
