import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../Screens';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name='Home'
          component={Screens.Home}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name='Details'
          component={Screens.Details}
          options={({ route }) => ({ title: route.params.itemId })}
        />
        <Stack.Screen name='CreatePost' component={Screens.CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
