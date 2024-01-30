import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const ShiftItem = ({ role, name, time, period }) => (
  <View style={styles.shiftItem}>
    <Text style={styles.shiftRole}>{role}</Text>
    <View style={styles.shiftDetails}>
      <Text style={styles.shiftName}>{name}</Text>
      <Text style={styles.shiftTime}>{time}</Text>
      <Text style={styles.shiftPeriod}>{period}</Text>
    </View>
  </View>
);

class ShiftScheduleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Shift & Schedule</Text>
          <View style={styles.tabNavigation}>
            {/* Tab navigation buttons */}
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Schedule</Text>
            </TouchableOpacity>
            {/* Add other tabs here */}
          </View>
        </View>
        <ScrollView style={styles.shiftList}>
          {/* List of shifts */}
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            time="11:00 AM - 7:00 PM"
            period="Afternoon"
          />
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            time="11:00 AM - 7:00 PM"
            period="Afternoon"
          />
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            time="11:00 AM - 7:00 PM"
            period="Afternoon"
          />
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            time="11:00 AM - 7:00 PM"
            period="Afternoon"
          />
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            time="11:00 AM - 7:00 PM"
            period="Afternoon"
          />
        </ScrollView>
        <View style={styles.bottomNavigation}>
          {/* Bottom navigation buttons */}
          <TouchableOpacity style={styles.bottomNavigationButton}>
            {/* Replace with an icon component or image */}
            <Text style={styles.bottomNavigationText}>Calendar</Text>
          </TouchableOpacity>
          {/* Add other navigation items here */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000080", // Navy blue color
    padding: 20,
    paddingTop: 40, // Adjust as per status bar height
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  shiftList: {
    padding: 10,
  },
  shiftItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  shiftRole: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  shiftDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shiftName: {
    fontWeight: "bold",
  },
  shiftTime: {
    fontSize: 16,
    color: "black",
  },
  shiftPeriod: {
    fontSize: 14,
    color: "gray",
  },
  tabNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000080",
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  tabButtonText: {
    color: "white",
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingVertical: 10,
  },
  bottomNavigationButton: {
    alignItems: "center",
  },
  bottomNavigationIcon: {
    // Icons would be added here if you have an icon set
  },
  bottomNavigationText: {
    color: "gray",
    fontSize: 12,
  },
});

export default ShiftScheduleScreen;
