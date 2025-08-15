import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';
import HomeScreen from '../screens/home/HomeScreen';
import RepairServiceSelectionScreen from '../screens/repair/RepairServiceSelectionScreen';
import RepairDetailsScreen from '../screens/repair/RepairDetailsScreen';
import RepairSummaryScreen from '../screens/repair/RepairSummaryScreen';
import RentalCatalogScreen from '../screens/rental/RentalCatalogScreen';
import RentalConfigurationScreen from '../screens/rental/RentalConfigurationScreen';
import RentalSummaryScreen from '../screens/rental/RentalSummaryScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="RepairServiceSelection" 
        component={RepairServiceSelectionScreen}
        options={{ title: 'Select Services' }}
      />
      <Stack.Screen 
        name="RepairDetails" 
        component={RepairDetailsScreen}
        options={{ title: 'Repair Details' }}
      />
      <Stack.Screen 
        name="RepairSummary" 
        component={RepairSummaryScreen}
        options={{ title: 'Review & Confirm' }}
      />
      <Stack.Screen 
        name="RentalCatalog" 
        component={RentalCatalogScreen}
        options={{ title: 'Rental Bikes' }}
      />
      <Stack.Screen 
        name="RentalConfiguration" 
        component={RentalConfigurationScreen}
        options={{ title: 'Rental Details' }}
      />
      <Stack.Screen 
        name="RentalSummary" 
        component={RentalSummaryScreen}
        options={{ title: 'Review & Confirm' }}
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen}
        options={{ title: 'Payment' }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;