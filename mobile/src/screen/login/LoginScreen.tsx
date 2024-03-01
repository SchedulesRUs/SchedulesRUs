import { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assertIsError } from '../../extension/ErrorExt';
import { useAuthContext } from '../../context/AuthContext';
import userService from '../../remote/UserService';
import { errorToast } from '../../component/Toast';

function LoginScreen() {
    const { user, saveUser } = useAuthContext();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const login = async () => {
        if (username.length == 0) {
            return errorToast('Please enter your username')
        }

        if (password.length == 0) {
            return errorToast('Please enter your password')
        }

        try {
            setLoading(true)
            const result = await userService.authenticate(username, password)
            if (result.success) {
                saveUser({ username: result.username })
            } else {
                errorToast(
                    'Unable to log in with the provided credentials',
                    'Please check your username and password and try again'
                )
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            assertIsError(error);
            errorToast(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Schedule "R" Us</Text>
            <TextInput
                style={styles.input}
                value={username}
                editable={!loading}
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
                editable={!loading}
                onChangeText={(value) => {
                    setPassword(value)
                }}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity
                onPress={login}
                style={styles.button}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size={20} color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Log In</Text>
                )}
            </TouchableOpacity>
        </View>
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
        height: 40,
        backgroundColor: "#0D1282",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
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

export default LoginScreen;
