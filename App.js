import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Choosing from './screens/Choosing'
import Blogs from './screens/Blogs';
import Initial from './screens/Initial';
import CameraScreen from './screens/CameraScreen';
import Home from './screens/Home';
import Account from './screens/Account';
import Settings from './screens/Settings';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Choosing" component={Choosing} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
