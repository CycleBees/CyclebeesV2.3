import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainTabParamList } from './types';
import HomeNavigator from './HomeNavigator';
import RequestsNavigator from './RequestsNavigator';
import ProfileNavigator from './ProfileNavigator';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MyRequests') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondary.mediumGrey,
        tabBarStyle: {
          backgroundColor: Colors.background.primary,
          borderTopColor: Colors.border.light,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeNavigator}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="MyRequests" 
        component={RequestsNavigator}
        options={{ tabBarLabel: 'My Requests' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileNavigator}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;