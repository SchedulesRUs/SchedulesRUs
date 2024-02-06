
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeStack from '../Home/Home';

const Tab = createBottomTabNavigator();

const Screen = (screen: String) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{screen}</Text>
        </View>
    );
}


const Main = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Calendar" component={() => Screen("Calendar")} />
            <Tab.Screen name="Settings" component={() => Screen("Settings")} />
        </Tab.Navigator>
    )
}

export default Main;