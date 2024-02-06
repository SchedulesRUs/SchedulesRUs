import { Component } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    employeeId: "",
  };

  handleUsernameUpdate = (username) => {
    this.setState({ username });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  handleEmployeeIdUpdate = (employeeId) => {
    this.setState({ employeeId });
  };

  handleLogin = () => {
    // Implement login logic
  };

  handleAdminLogin = () => {
    // Implement admin login logic
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schedule "R" Us</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          placeholder="Employee Username"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={this.state.employeeId}
          onChangeText={this.handleEmployeeIdUpdate}
          placeholder="Employee ID"
          keyboardType="numeric"
        />
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
    );
  }
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
