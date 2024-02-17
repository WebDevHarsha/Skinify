import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Choosing from './screens/Choosing'
import Blogs from './screens/Blogs';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Choosing} />
        <Stack.Screen name="Signup" component={Blogs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
