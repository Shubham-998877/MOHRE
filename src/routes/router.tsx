import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { linking } from './linking';
import { appStackRoutes } from './config';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from './interface';

const AppStack = createStackNavigator<AppStackParamList>();

interface AppRouterProp {
  initialRoutePath: keyof AppStackParamList;
}

function AppRouter({ initialRoutePath}: AppRouterProp) {
  return (
    <AppStack.Navigator
      initialRouteName={initialRoutePath}
      screenOptions={{ headerShown: false }}
    >
      {appStackRoutes.map(route => (
        <AppStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </AppStack.Navigator>
  );
}

export default function AppNavigation() {
    const initialRoute = 'Launch';
  return (
    <NavigationContainer linking={linking}>
        <AppRouter initialRoutePath={initialRoute} />
    </NavigationContainer>
  );
}