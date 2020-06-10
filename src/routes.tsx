import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import RegisterCreditCard from './pages/RegisterCreditCard';

const AppStack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode='none' 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#1D1E20'
          }
      }} >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="RegisterCreditCard" component={RegisterCreditCard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;