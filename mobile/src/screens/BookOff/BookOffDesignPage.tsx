import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const BookOffItem = ({ day, date, status }) => (
  
  <View style={styles.bookOffItem}>
    <View style={styles.bookOffDetails}>
      <Text style={styles.bookOffDay}>{day}</Text>
      <Text style={styles.bookOffDate}>{date}</Text>
    </View>
    <Text
      style={[
        styles.bookOffStatus,
        status === "Approved" ? styles.approved : styles.denied,
      ]}
    >
      {status}
    </Text>
  </View>
);

class BookOffScreen extends Component {
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
        <View style={styles.newBookOff}>
          <TouchableOpacity style={styles.newBookOffButton}>
            <Text style={styles.newBookOffButtonText}>+ Add New BookOff</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bookOffList}>
          {/* List of book-off items */}
          <BookOffItem day="Thursday" date="Jul 25, 2024" status="Approved" />
          {/* Repeat for other book-off requests */}
        </ScrollView>
        {/* Bottom navigation bar would go here */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000080',
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: StatusBar.currentHeight + 10,
    left: 10,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000099',
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 4,
    width: '100%',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  newBookOff: {
    alignItems: "center",
    marginVertical: 10,
  },
  newBookOffButton: {
    backgroundColor: "#000080", // Navy blue color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  newBookOffButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  bookOffList: {
    padding: 10,
  },
  bookOffItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  bookOffDetails: {
    flexDirection: "column",
  },
  bookOffDay: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookOffDate: {
    fontSize: 14,
    color: "gray",
  },
  bookOffStatus: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  approved: {
    backgroundColor: "lightgreen",
    color: "green",
  },
  denied: {
    backgroundColor: "pink",
    color: "red",
  },
  // Add styles for tab navigation and bottom navigation bar here
});

export default BookOffScreen;
