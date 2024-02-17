import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Choosing from './screens/Choosing'
import Blogs from './screens/Blogs';
import Initial from './screens/Initial';
import CameraScreen from './screens/CameraScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Choosing} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
