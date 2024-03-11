import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

// TypeScript types
interface ShiftItemProps {
  role: string;
  name: string;
  time: string;
}

const ShiftItem: React.FC<ShiftItemProps> = ({role, name, time}) => (
  <View style={styles.shiftItem}>
    <Text style={styles.shiftRole}>{role}</Text>
    <Text style={styles.shiftName}>{name}</Text>
    <Text style={styles.shiftTime}>{time}</Text>
  </View>
);

export default ShiftItem;

const styles = StyleSheet.create({
  shiftItem: {
    backgroundColor: '#80C2FF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  shiftRole: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  shiftName: {
    color: 'black',
    fontSize: 16,
  },
  shiftTime: {
    color: 'black',
    fontSize: 16,
  },
});
