import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '@screens/Home';

import theme from '@themes/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.PRIMARY_900,
        tabBarInactiveTintColor: theme.COLORS.SHAPE,
        tabBarStyle: {
          height: 50,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: theme.COLORS.SHAPE
        }
      }}
    >
      <Screen
        name='Produtos'
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name='home'
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  )
};