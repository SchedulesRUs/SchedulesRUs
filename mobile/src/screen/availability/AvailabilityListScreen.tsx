import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Availability = {
  day: string;
  fromTime: string;
  toTime: string;
  available: boolean;
};

type RootStackParamList = {
  Home: undefined;
  AvailabilityList: undefined;
  CreateNewAvailability: undefined;
};
// Dummy data - replace this with your actual data source
const availabilityData: Availability[] = [
  // ... populate with your actual availability data
];
type AvailabilityStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateNewAvailability'
>;
const ViewAvailabilityScreen: React.FC = () => {
  const navigation = useNavigation<AvailabilityStackNavigationProp>();

  const navigateToCreateAvailability = () => {
    navigation.navigate('CreateNewAvailability');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={24} color="#FFFFFF" />
        <Text style={styles.headerTitle}>Shift & Schedule</Text>
        <Icon name="menu" size={24} color="transparent" />
      </View>
      <Text style={styles.title}>Your Availability</Text>
      {availabilityData.map((item, index) => (
        <View key={index} style={styles.availabilityItem}>
          <Text style={styles.dayText}>{item.day}</Text>
          <Text style={styles.timeText}>
            {item.available
              ? `From: ${item.fromTime} To: ${item.toTime}`
              : 'NOT AVAILABLE'}
          </Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.createButton}
        onPress={navigateToCreateAvailability}>
        <Text style={styles.createButtonText}>+ Create New Availability</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#0D1282',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 20,
  },
  availabilityItem: {
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  dayText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeText: {
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#0D1282',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewAvailabilityScreen;
