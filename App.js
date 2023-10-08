import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();


// Screens
import Intro_Screen from './screens/introScreen';
import Home from './screens/Home';


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Intro_Screen' component={Intro_Screen} ></Stack.Screen>
        <Stack.Screen name='Home' component={Home} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

