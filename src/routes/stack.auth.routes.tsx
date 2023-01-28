import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes } from './tab.app.routes';
import { SignIn } from '@screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Screen
        name='Login'
        component={SignIn}
      />

      <Screen
        name='Home'
        component={AppRoutes}
      />
    </Navigator>
  )
};