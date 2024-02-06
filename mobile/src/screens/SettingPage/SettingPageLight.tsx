import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  StatusBar,
} from "react-native";

const SettingsPage = () => {
    // State to keep track of dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0D1282" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.whiteCard}>
          <Text style={styles.userName}>Nancy Nguyen</Text>
          {/* Other components such as profile edit, password change, etc. */}
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <SettingItem title="Edit profile" />
          <SettingItem title="Change password" />
          <SettingItem title="Add more features" isPlus />
          <SettingItem title="Push notifications" isSwitch />
          <SettingItem title="Dark mode" isSwitch />

          <Text style={styles.sectionTitle}>More</Text>
          <SettingItem title="About us" />
          <SettingItem title="Privacy policy" />
          <SettingItem title="Terms and conditions" />
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <Text style={styles.bottomNavigationText}>Home</Text>
        <Text style={styles.bottomNavigationText}>Calendar</Text>
        <Text style={styles.activeBottomNavigationText}>Setting</Text>
      </View>
    </View>
  );
};

const SettingItem = ({ title, isSwitch, isPlus }) => (
  <View style={styles.settingItem}>
    <Text style={styles.settingTitle}>{title}</Text>
    {isSwitch && <Switch />}
    {isPlus && <Text style={styles.plus}>+</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#0D1282",
    height: 247,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "800",
  },
  scrollView: {
    backgroundColor: "white",
  },
  whiteCard: {
    marginTop: -123,
    marginHorizontal: 27,
    backgroundColor: "white",
    borderRadius: 16,
    paddingTop: 140,
    paddingBottom: 20,
    elevation: 3,
  },
  userName: {
    alignSelf: "center",
    color: "black",
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "400",
  },
  sectionTitle: {
    marginLeft: 14,
    color: "#ADADAD",
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "400",
    marginTop: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  settingTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "400",
  },
  plus: {
    fontSize: 18,
    color: "#4B4B4B",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#808080",
  },
  bottomNavigationText: {
    color: "black",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  activeBottomNavigationText: {
    color: "#0D1282",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
});

export default SettingsPage;
