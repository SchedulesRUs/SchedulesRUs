/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/login/LoginScreen';
import { UserContext, UserContextProvider, UserContextType } from './src/context/UserContextProvider';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const { user, userInitialized } = useContext<UserContextType>(UserContext);

  if (!userInitialized) {
    return <></>;
  }

  function LoginStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  function MainStack() {
    return (<></>
      // <Stack.Navigator>
      //   <Stack.Screen name="Home" component={Home} />
      //   <Stack.Screen name="Notifications" component={Notifications} />
      //   <Stack.Screen name="Profile" component={Profile} />
      //   <Stack.Screen name="Settings" component={Settings} />
      // </Stack.Navigator>
    );
  }

  return (
    <UserContextProvider>
      <NavigationContainer>
        {user ? <MainStack /> : <LoginStack />}
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
