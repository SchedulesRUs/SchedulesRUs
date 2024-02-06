import { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    employeeId: "",
  };

   /*handleUsernameUpdate = (username) => {
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
*/

  render() {
    return (
      <View style={styles.fullScreen}>
        <Text style={styles.header}>Schedule “R” Us</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Employee Username</Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder="khang12323@gmail.com"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder="********************"
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Employee ID</Text>
          <TextInput
            style={styles.input}
            value={this.state.employeeId}
            onChangeText={(text) => this.setState({ employeeId: text })}
            placeholder="1234"
            keyboardType="numeric"
          />
        </View>

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
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    color: "#0D1282",
    fontSize: 45,
    fontWeight: "800",
    marginBottom: 50,
  },
  inputGroup: {
    width: "85%",
    marginBottom: 20,
  },
  label: {
    color: "#0D1282",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: "#333333",
    borderWidth: 3,
    borderRadius: 8,
    fontSize: 20,
    padding: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0D1282",
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#0D1282",
    width: "85%",
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
  },
  buttonSecondary: {
    marginTop: 10,
  },
});

export default LoginScreen;
