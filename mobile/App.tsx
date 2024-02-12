/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/login/LoginScreen';
import HomeScreen from './src/screen/home/HomeScreen';
import { AuthContextProvider, useAuthContext } from './src/context/AuthContext';
import CalendarScreen from './src/screen/calendar/CalendarScreen';
import SettingsScreen from './src/screen/settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <MainTab.Navigator screenOptions={{ headerShown: false }}>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Calendar" component={CalendarScreen} />
      <MainTab.Screen name="Settings" component={SettingsScreen} />
    </MainTab.Navigator>
  )
}

function AppContent() {
  const { user } = useAuthContext();

  return user ? <MainStack /> : <LoginStack />;
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppContent />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
