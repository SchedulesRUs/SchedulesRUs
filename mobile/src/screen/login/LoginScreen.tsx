import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assertIsError } from '../../extension/ErrorExt';
import { SecureStorageKey } from '../../local/LocalConfig';

function LoginScreen() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        try {
            // Do login
            // Set result
            const username = "Khang"
            const user: UserEntity = {
                username: username
            }
            await AsyncStorage.setItem(SecureStorageKey.USER, JSON.stringify(user));
            console.log('successful logging in')
        } catch (error) {
            assertIsError(error);
            Alert.alert(error.message)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <TouchableOpacity onPress={login} style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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

export default LoginScreen;
