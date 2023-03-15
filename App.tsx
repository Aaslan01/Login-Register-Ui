/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import OpeningScreen from './screen/OpeningScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {
          <Stack.Navigator initialRouteName="Opening">
            <Stack.Screen
              name="Opening"
              component={OpeningScreen}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{header: () => null}}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
