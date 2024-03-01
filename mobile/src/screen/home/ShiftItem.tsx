import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Shift} from '../../model/Shift';

interface ShiftItemProps {
  shift: Shift;
}

const ShiftItem: React.FC<ShiftItemProps> = ({shift}) => {
  // Convert UNIX timestamps to date and time strings
  const startDate = new Date(shift.start * 1000);
  const endDate = new Date(shift.end * 1000);

  // Format date and time
  const dayOfWeek = startDate.toLocaleString('en-US', {weekday: 'long'});
  const monthDayYear = startDate.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const startTime = startDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const endTime = endDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
        <Text style={styles.monthDayYear}>{monthDayYear}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.position}>{shift.position}</Text>
        <Text style={styles.time}>{`${startTime} - ${endTime}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#E1E8EE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  dayOfWeek: {
    color: 'white',
    fontWeight: 'bold',
  },
  monthDayYear: {
    color: 'white',
  },
  position: {
    fontWeight: 'bold',
  },
  time: {
    color: 'grey',
  },
});

export default ShiftItem;
