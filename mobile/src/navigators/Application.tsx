import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Startup, Login } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import Main from '@/screens/Main/Main';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Example" component={Example} />
			</Stack.Navigator> */}
			<Main/>
			
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
