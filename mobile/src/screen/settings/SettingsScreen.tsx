import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColor } from '../../theme/Colors';
import { AppStatusBar } from '../../theme/StatusBar';
import { useAuthContext } from '../../context/AuthContext';

const SettingsOption = ({
  title,
  onPress,
  isSwitch,
  onToggle,
  isEnabled,
  labelColor
}: {
  title: string;
  onPress?: () => void;
  isSwitch?: boolean;
  onToggle?: (value: boolean) => void;
  isEnabled?: boolean;
  labelColor?: string;
}) => {
  return (
    <TouchableOpacity
      style={styles.option}
      onPress={onPress}
      disabled={isSwitch}>
      <Text style={[styles.optionText, { color: labelColor ? labelColor : 'black' }]}>{title}</Text>
      {isSwitch ? (
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={onToggle}
          value={isEnabled}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const SettingsScreen: React.FC = () => {
  const { clearUser } = useAuthContext();

  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const togglePushNotifications = () => {
    setIsPushNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(previousState => !previousState);
  };

  // Replace these placeholder functions with your actual navigation logic
  const navigateToEditProfile = () => console.log('Navigate to Edit Profile');
  const navigateToChangePassword = () =>
    console.log('Navigate to Change Password');
  const navigateToAddPaymentMethod = () =>
    console.log('Navigate to Add Payment Method');
  const navigateToAboutUs = () => console.log('Navigate to About Us');
  const navigateToPrivacyPolicy = () =>
    console.log('Navigate to Privacy Policy');
  const navigateToTermsAndConditions = () =>
    console.log('Navigate to Terms and Conditions');
  const logout = () => {
    clearUser();
  }

  return (
    <View style={{ flex: 1 }}>
      <AppStatusBar />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.userSection}>
          <Text style={styles.userName}>Hello Khit</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.optionsSection}>
          <SettingsOption
            title="Edit profile"
            onPress={navigateToEditProfile}
          />
          <SettingsOption
            title="Change password"
            onPress={navigateToChangePassword}
          />
          <SettingsOption
            title="Add a payment method"
            onPress={navigateToAddPaymentMethod}
          />
          <SettingsOption
            title="Push notifications"
            isSwitch
            onToggle={togglePushNotifications}
            isEnabled={isPushNotificationsEnabled}
          />
          <SettingsOption
            title="Dark mode"
            isSwitch
            onToggle={toggleDarkMode}
            isEnabled={isDarkModeEnabled}
          />
          <SettingsOption title="About us" onPress={navigateToAboutUs} />
          <SettingsOption
            title="Privacy policy"
            onPress={navigateToPrivacyPolicy}
          />
          <SettingsOption
            title="Terms and conditions"
            onPress={navigateToTermsAndConditions}
          />
          <SettingsOption
            title="Logout"
            labelColor='red'
            onPress={logout}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: AppColor,
    padding: 20,
  },
  headerTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userSection: {
    marginTop: 30,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
  option: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
