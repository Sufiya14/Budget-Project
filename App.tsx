/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import addingBudget from './components/addingBudget';
import budgetListing from './components/budgetListing';
import store from './redux/store';
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor=persistStore(store);


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="addingBudget" screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#013220' },
    }}>
      <Stack.Screen name="addingBudget" component={addingBudget} options={{
          title: 'Budget Entry',
        }} />
      <Stack.Screen name="BudgetListing" component={budgetListing} options={{
          title: 'Budget Entry Listing',
        }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          {
            <MyStack/>
          }
        </NavigationContainer>
      </PersistGate> 
    </Provider>
  );
}

