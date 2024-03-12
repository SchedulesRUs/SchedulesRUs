import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp,} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type WeeklyAvailability = {
  [key: string]: {
    from: Date;
    to: Date;
  };
};

type AvailabilityStackParamList = {
  CreateNewAvailability: undefined;
  AvailabilityList: undefined;
  ConfirmationAvailability: {
    weeklyAvailability: WeeklyAvailability;
    availabilityPeriod: {
      start: Date;
      end: Date;
    };
  };
};

type ConfirmationAvailabilityScreenNavigationProp = StackNavigationProp<
  AvailabilityStackParamList,
  'ConfirmationAvailability'
>;

type ConfirmationAvailabilityScreenRouteProp = RouteProp<
  AvailabilityStackParamList,
  'ConfirmationAvailability'
>;

const ConfirmationAvailabilityScreen: React.FC = () => {
  const navigation = useNavigation<ConfirmationAvailabilityScreenNavigationProp>();
  const route = useRoute<ConfirmationAvailabilityScreenRouteProp>();
  const {weeklyAvailability, availabilityPeriod} = route.params;

  const formatDate = (date: Date) => date.toLocaleDateString();
  const formatTime = (date: Date) => date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  const handleEdit = () => navigation.navigate('CreateNewAvailability');
  const handleConfirm = () => navigation.navigate('AvailabilityList');
  const handleBack = () => navigation.goBack();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Availability Request</Text>
      </View>
      <View style={styles.detailCard}>
        <Text style={styles.detailText}>From: {formatDate(availabilityPeriod.start)} To: {formatDate(availabilityPeriod.end)}</Text>
      </View>
      
      {Object.entries(weeklyAvailability).map(([day, { from, to }]) => (
        <View key={day} style={styles.detailCard}>
          <Text style={styles.label}>{day}:</Text>
          <Text style={styles.detail}>From: {formatTime(from)} To: {formatTime(to)}</Text>
        </View>
      ))}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1282',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  detailCard: {
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  detailContainer: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail: {
    fontSize: 16,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#0D1282',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    minWidth: 100,
    height: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ConfirmationAvailabilityScreen;
