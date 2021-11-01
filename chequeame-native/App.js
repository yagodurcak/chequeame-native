import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (

  <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
      
  </NavigationContainer>
);


export default App;