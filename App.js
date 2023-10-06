import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ContactsListScreen from './ContactsListScreen';
import AddContactScreen from './AddContactScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ContactsListScreen">
          {props => <ContactsListScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddContact">
          {props => <AddContactScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

