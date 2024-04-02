import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './src/pages/list';
import Form from './src/pages/form';
import httpClient from './src/utils/httpClient';
import {query} from './src/utils/services';

const Stack = createStackNavigator();

function AppStack() {
  useEffect(() => {
    httpClient?.createTable('schools', query);
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
