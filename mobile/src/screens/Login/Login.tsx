import { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	TextInput,
} from 'react-native';

import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';

function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const {
		colors,
		variant,
		changeTheme,
		layout,
		gutters,
		fonts,
		components,
		backgrounds,
	} = useTheme();

	return (
		<SafeScreen>
			<ScrollView
				contentContainerStyle={[
					layout.flex_1,
					layout.justifyCenter,
					layout.itemsCenter,
				]}
			>
				<View style={styles.container}>
					<Text style={styles.title}>Schedule "R" Us</Text>
					<TextInput
						style={styles.input}
						value={username}
						onChangeText={(value) => {
							setUsername(value)
						}}
						placeholder="Employee Username"
						keyboardType="email-address"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(value) => {
							setPassword(value)
						}}
						placeholder="Password"
						secureTextEntry
					/>
					{/* <TextInput
						style={styles.input}
						value={this.state.employeeId}
						onChangeText={this.handleEmployeeIdUpdate}
						placeholder="Employee ID"
						keyboardType="numeric"
					/> */}
					<TouchableOpacity onPress={this.handleLogin} style={styles.button}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.handleAdminLogin}
						style={[styles.button, styles.buttonSecondary]}
					>
						<Text style={styles.buttonText}>Log In As Admin</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
		color: "#0D1282",
	},
	input: {
		height: 40,
		borderColor: "#000",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	button: {
		backgroundColor: "#0D1282",
		padding: 10,
		alignItems: "center",
		marginBottom: 10,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	buttonSecondary: {
		backgroundColor: "#0D1282",
	},
});

export default Login;
