import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ShiftItem = ({ date, role, startTime, endTime }) => (
  <View style={styles.shiftItem}>
    <Text style={styles.shiftDate}>{date}</Text>
    <Text style={styles.shiftRole}>{role}</Text>
    <Text style={styles.shiftTime}>{`${startTime} - ${endTime}`}</Text>
  </View>
);

class ShiftScheduleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Home</Text>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Menu</Text>
            <Text style={styles.userName}>Khang Trinh</Text>
          </View>
        </View>
        <Text style={styles.upcomingShiftsTitle}>Your Upcoming Shifts</Text>
        <ScrollView style={styles.shiftsContainer}>
          <ShiftItem date="Monday Feb 5, 2024" role="Cooker" startTime="1:00 PM" endTime="9:00 PM" />
          <ShiftItem date="Tuesday Feb 6, 2024" role="Server" startTime="11:00 AM" endTime="7:00 PM" />
          <ShiftItem date="Wednesday Feb 7, 2024" role="Cleaner" startTime="2:00 PM" endTime="7:00 PM" />
          <ShiftItem date="Thursday Feb 8, 2024" role="Kitchen Helper" startTime="12:00 PM" endTime="4:00 PM" />
          <ShiftItem date="Monday Feb 12, 2024" role="Server" startTime="3:00 PM" endTime="9:00 PM" />
          <ShiftItem date="Saturday Feb 17, 2024" role="Cashier, Server" startTime="11:00 AM" endTime="7:00 PM" />
        </ScrollView>
        <View style={styles.bottomNavigation}>
          <Text style={styles.bottomNavigationText}>Home</Text>
          <Text style={styles.bottomNavigationText}>Calendar</Text>
          <Text style={styles.bottomNavigationText}>Setting</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0D1282',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
  },
  userName: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
  },
  upcomingShiftsTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0D1282',
    padding: 10,
  },
  shiftsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  shiftItem: {
    backgroundColor: '#80C2FF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  shiftDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 5,
  },
  shiftRole: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 5,
  },
  shiftTime: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  bottomNavigationText: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  shiftLine: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 5,
  },
});

export default ShiftScheduleScreen;
