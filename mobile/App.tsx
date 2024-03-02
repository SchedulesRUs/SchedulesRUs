/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screen/login/LoginScreen';
import HomeScreen from './src/screen/home/HomeScreen';
import {AuthContextProvider, useAuthContext} from './src/context/AuthContext';
import CalendarScreen from './src/screen/calendar/CalendarScreen';
import SettingsScreen from './src/screen/settings/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import BookOffRequestScreen from './src/screens/BookOffRequest/BookOffRequest';

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-settings-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="BookOff"
        component={BookOffRequestScreen}
        options={{
          tabBarLabel: 'BookOff',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-settings-outline" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

function AppContent() {
  const {user} = useAuthContext();
  return user ? <MainStack /> : <LoginStack />;
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppContent />
        <Toast />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
