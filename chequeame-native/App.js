import Cuit from './screens/Cuit';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (

  <NavigationContainer>

    <Stack.Navigator     screenOptions={{
      headerShown: false,
    }}
   >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cuit" component={Cuit} />
    </Stack.Navigator>
      
  </NavigationContainer>
);


export default App;