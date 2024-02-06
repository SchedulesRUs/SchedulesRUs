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
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#0D1282", // Adjusted to a dark blue to match the image
    paddingTop: StatusBar.currentHeight, // Only the status bar height
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "flex-start", // Aligns items to the start of the flex-direction
  },
  menuButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24, // Adjusted size to match the image
    alignSelf: "justify-center", // Aligns the title to the start of the flex-direction
    marginTop: 10, // Adds some space above the title
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent", // Background is transparent to show header color
    marginTop: 10,
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
  newBookOff: {
    alignItems: "center",
    marginVertical: 10,
  },
  newBookOffButton: {
    backgroundColor: "#0D1282",
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#333333",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  newBookOffButtonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  bookOffList: {
    padding: 10,
  },
  bookOffItem: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
  },
  bookOffDetails: {
    flexDirection: "column",
  },
  bookOffDay: {
    fontSize: 20,
    fontWeight: "400",
    color: "#00F900",
  },
  bookOffDate: {
    fontSize: 20,
    fontWeight: "400",
    color: "#00F900",
  },
  bookOffStatus: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
    borderRadius: 12,
    padding: 4,
    width: 123,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  approved: {
    color: "#00F900",
  },
  denied: {
    color: "#F90000",
  },
});

export default BookOffScreen;
