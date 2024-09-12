import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LaunchStackParamList } from './interface';
import { launchStackScreens } from './config';

const LaunchStack = createStackNavigator<LaunchStackParamList>();

export default function LaunchStackNavigator() {
  return (
    <LaunchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {launchStackScreens.map(screen => (
        <LaunchStack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </LaunchStack.Navigator>
  );
}