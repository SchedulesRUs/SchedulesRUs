import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AccountScreen = () => {
  // State to hold each piece of account information
  const [accountInfo, setAccountInfo] = useState({
    name: 'Khang Trinh',
    address: '********************************',
    dob: '**** **, ****',
    email: '********@gmail.com',
    phone: '(***)-***-****',
  });

  // Function to update state when text inputs are changed
  const handleInputChange = (name, value) => {
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Account</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.divider} />

        <InfoInput
          label="Your Name"
          value={accountInfo.name}
          onChange={(text) => handleInputChange('name', text)}
        />
        <InfoInput
          label="Your Address"
          value={accountInfo.address}
          onChange={(text) => handleInputChange('address', text)}
        />
        <InfoInput
          label="Your DOB"
          value={accountInfo.dob}
          onChange={(text) => handleInputChange('dob', text)}
        />
        <InfoInput
          label="Your Email Address"
          value={accountInfo.email}
          onChange={(text) => handleInputChange('email', text)}
        />
        <InfoInput
          label="Your Phone Number"
          value={accountInfo.phone}
          onChange={(text) => handleInputChange('phone', text)}
        />
      </View>
    </ScrollView>
  );
};

// Input component for account information
const InfoInput = ({ label, value, onChange }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={label}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0D1282',
    padding: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Roboto',
    fontWeight: '800',
    textAlign: 'center',
  },
  form: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#0D1282',
    marginBottom: 5,
  },
  divider: {
    borderBottomWidth: 3,
    borderBottomColor: '#0D1282',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#0D1282',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#333',
  },
});

export default AccountScreen;
