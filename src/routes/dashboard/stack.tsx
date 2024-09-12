import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashBoardStackParamList } from './interface';
import { dashboardStackScreens } from './config';

const LaunchStack = createStackNavigator<DashBoardStackParamList>();

export default function DashBoardStackNavigator() {
  return (
    <LaunchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {dashboardStackScreens.map(screen => (
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