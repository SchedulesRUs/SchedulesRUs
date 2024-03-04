/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import LoginScreen from './src/screen/login/LoginScreen';
import HomeScreen from './src/screen/home/HomeScreen';
import { AuthContextProvider, useAuthContext } from './src/context/AuthContext';
import CalendarScreen from './src/screen/calendar/CalendarScreen';
import SettingsScreen from './src/screen/settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import BookOffRequestScreen from './src/screen/bookoff/BookOffRequestScreen';
import CreateNewAvailability from './src/screen/NewAvailbilityRequest';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookOffListScreen from './src/screen/bookoff/BookOffListScreen';

const LoginStack = createStackNavigator();
const BookOffStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

type BookOffStackParamList = {
  BookOffList: undefined;
  BookOffRequest: undefined; // Add other parameters here if needed
  // ... other screens
};

export type BookOffStackNavigationProp = StackNavigationProp<BookOffStackParamList>;

function BookOffStackNavigator() {
  return (
    <BookOffStack.Navigator screenOptions={{ headerShown: false }}>
      <BookOffStack.Screen name="BookOffList" component={BookOffListScreen} />
      <BookOffStack.Screen name="BookOffRequest" component={BookOffRequestScreen} />
    </BookOffStack.Navigator>
  );
}

function HomeDrawerNavigator() {
  return (
    <HomeDrawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <HomeDrawer.Screen name="Home" component={HomeScreen} />
      <HomeDrawer.Screen name="Book Off" component={BookOffStackNavigator} />
      <HomeDrawer.Screen name="Availability" component={CreateNewAvailability} />
    </HomeDrawer.Navigator>
  );
}

// function HomeStackNavigator() {
//   return (
//     < screenOptions={{ headerShown: false }}>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Drawer" component={HomeDrawer} />
//     </HomeStack.Navigator>
//   );
// }

function MainStackNavigator() {
  return (
    <MainTab.Navigator screenOptions={({ route }) => ({
      tabBarStyle: {
        display: getFocusedRouteNameFromRoute(route) === 'Book Off' ? 'none' : 'flex',
      },
      headerShown: false,
    })}>
      <MainTab.Screen
        name="Home"
        component={HomeDrawerNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-settings-outline" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

function AppContent() {
  const { user } = useAuthContext();
  return user ? <MainStackNavigator /> : <LoginStackNavigator />;
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
