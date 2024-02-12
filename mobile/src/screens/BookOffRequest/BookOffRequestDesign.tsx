import React, { useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";

const NewBookOffRequestPage = () => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async () => {
    // Validate input data
    if (!date || !startTime || !endTime || !reason) {
      Alert.alert("Please fill in all fields");
      return;
    }
    const requestData = {
      date,
      startTime,
      endTime,
      reason,
    };
      // Send the request to your backend
    try {
      // await sendBookOffRequest(requestData);
      console.log(requestData); // Remove this in production
      Alert.alert("Request submitted successfully!");
    } catch (error) {
      console.error(error);
      Alert.alert("Failed to submit request");
    }
  };

  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000080" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shift & Schedule</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>BookOffs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Switch Shift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Availability</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>New Request</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Choose Date To Request:</Text>
            <TextInput style={styles.input} placeholder="Dec 24, 2023" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Start Time</Text>
            <TextInput style={styles.input} placeholder="11:00AM" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>End Time</Text>
            <TextInput style={styles.input} placeholder="11:00AM" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reason:</Text>
            <TextInput
              style={styles.input}
              placeholder="Dec 24, 2023"
              value={date}
              onChangeText={setDate}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit BookOff Request</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom navigation bar */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000080",
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000099",
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 4,
    width: "100%",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  form: {
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    flex: 1,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginRight: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#000080",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewBookOffRequestPage;
