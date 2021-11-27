import Cuit from './screens/Cuit';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (

  <NavigationContainer>

    <Stack.Navigator  initialRouteName= "Home"
    screenOptions={{headerStyle:{backgroundColor:'#366182' }, headerTintColor:'white'}}
   >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cuit" component={Cuit} options={{title:'Bienvenido a Chequeame'}}/>
    </Stack.Navigator>
      
  </NavigationContainer>
);


export default App;