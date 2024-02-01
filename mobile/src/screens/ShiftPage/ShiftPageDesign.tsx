import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const ShiftItem = ({ role, name, shiftTime }) => (
  <View style={styles.shiftItem}>
    <Text style={styles.shiftRole}>{role}</Text>
    <Text style={styles.shiftName}>{name}</Text>
    <Text style={styles.shiftTime}>{shiftTime}</Text>
  </View>
);

class ShiftScheduleScreen extends Component {
  render() {
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
        <ScrollView style={styles.shiftsContainer}>
          <ShiftItem
            role="Restaurant Manager"
            name="Bobby Brian"
            shiftTime="11:00 AM - 7:00 PM"
          />
          {/* Repeat for other staff members */}
        </ScrollView>
        <View style={styles.bottomNavigation}>
          {/* Bottom navigation items */}
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
    backgroundColor: "#0D1282",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
  },
  shiftsContainer: {
    padding: 10,
  },
  shiftItem: {
    backgroundColor: "#80C2FF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  shiftRole: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  shiftName: {
    color: "black",
    fontSize: 16,
  },
  shiftTime: {
    color: "black",
    fontSize: 16,
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});

export default ShiftScheduleScreen;
