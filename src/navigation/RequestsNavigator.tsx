import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RequestsStackParamList } from './types';
import RequestsListScreen from '../screens/requests/RequestsListScreen';
import RequestDetailsScreen from '../screens/requests/RequestDetailsScreen';

const Stack = createStackNavigator<RequestsStackParamList>();

const RequestsNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="RequestsList" 
        component={RequestsListScreen}
        options={{ title: 'My Requests' }}
      />
      <Stack.Screen 
        name="RequestDetails" 
        component={RequestDetailsScreen}
        options={{ title: 'Request Details' }}
      />
    </Stack.Navigator>
  );
};

export default RequestsNavigator;