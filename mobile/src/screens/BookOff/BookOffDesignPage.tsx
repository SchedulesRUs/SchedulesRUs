import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>BookOff Page</Text>
          {/* The tab navigation would go here */}
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
    backgroundColor: "#000080", // Navy blue color
    padding: 20,
    paddingTop: 40, // Adjust for status bar height
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
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
