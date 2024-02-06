import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";

const SettingsPage = () => {
    // State to keep track of dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);
  
  const backgroundColor = isDarkMode ? "#000" : "#fff";
  const textColor = isDarkMode ? "#fff" : "#000";
  const cardColor = isDarkMode ? "#333" : "#fff";
  const borderColor = isDarkMode ? "#555" : "#808080";
  const switchThumbColor = isDarkMode ? "#f5dd4b" : "#f4f3f4";
  const switchTrackColor = isDarkMode ? { false: "#767577", true: "#81b0ff" } : { false: "#767577", true: "#81b0ff" };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar backgroundColor={isDarkMode ? "#000" : "#0D1282"} barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={[styles.header, { backgroundColor: isDarkMode ? "#333" : "#0D1282" }]}>
        <Text style={[styles.headerTitle, { color: textColor }]}>Settings</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.whiteCard, { backgroundColor: cardColor }]}>
          <Text style={[styles.userName, { color: textColor }]}>Nancy Nguyen</Text>
          <SettingItem title="Edit profile" textColor={textColor} />
          <SettingItem title="Change password" textColor={textColor} />
          <SettingItem title="Add more features" textColor={textColor} isPlus />
          <SettingItem title="Push notifications" textColor={textColor} isSwitch switchValue={isDarkMode} onToggle={toggleDarkMode} thumbColor={switchThumbColor} trackColor={switchTrackColor} />
          <SettingItem title="Dark mode" textColor={textColor} isSwitch switchValue={isDarkMode} onToggle={toggleDarkMode} thumbColor={switchThumbColor} trackColor={switchTrackColor} />
        </View>
      </ScrollView>
      <View style={[styles.bottomNavigation, { borderColor }]}>
        <Text style={[styles.bottomNavigationText, { color: textColor }]}>Home</Text>
        <Text style={[styles.bottomNavigationText, { color: textColor }]}>Calendar</Text>
        <Text style={[styles.activeBottomNavigationText, { color: isDarkMode ? "#fff" : "#0D1282" }]}>Setting</Text>
      </View>
    </View>
  );
};

const SettingItem = ({ title, isSwitch, isPlus, textColor, switchValue, onToggle, thumbColor, trackColor }) => (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={[styles.settingTitle, { color: textColor }]}>{title}</Text>
      {isSwitch && <Switch value={switchValue} onValueChange={onToggle} thumbColor={thumbColor} trackColor={trackColor} />}
      {isPlus && <Text style={[styles.plus, { color: textColor }]}>+</Text>}
    </TouchableOpacity>
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
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "400",
  },
  plus: {
    fontSize: 18,
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
