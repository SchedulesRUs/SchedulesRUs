import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type DailyAvailability = {
  from: Date;
  to: Date;
};

type WeeklyAvailability = {
  [key: string]: DailyAvailability;
};

type RootStackParamList = {
  Home: undefined;
  AvailabilityList: undefined;
  CreateNewAvailability: undefined;
  ConfirmationAvailability: {
    weeklyAvailability: WeeklyAvailability;
    availabilityPeriod: {
      start: Date;
      end: Date;
    };
  };
};
const defaultAvailability: DailyAvailability = {
  from: new Date(new Date().setHours(11, 0, 0, 0)),
  to: new Date(new Date().setHours(20, 0, 0, 0)),
};

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
type AvailabilityStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateNewAvailability'
>;
const CreateNewAvailability: React.FC = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList, 'CreateNewAvailability'>
    >();
  const [weeklyAvailability, setWeeklyAvailability] =
    useState<WeeklyAvailability>({
      Monday: defaultAvailability,
      Tuesday: defaultAvailability,
      Wednesday: defaultAvailability,
      Thursday: defaultAvailability,
      Friday: defaultAvailability,
      Saturday: defaultAvailability,
      Sunday: defaultAvailability,
    });

  const [availabilityPeriod, setAvailabilityPeriod] = useState({
    start: new Date(),
    end: new Date(),
  });

  const showDatePickerForPeriod = (period: 'start' | 'end') => {
    DateTimePickerAndroid.open({
      value: availabilityPeriod[period],
      onChange: (_, date) => {
        if (date) {
          setAvailabilityPeriod(prev => ({
            ...prev,
            [period]: date,
          }));
        }
      },
      mode: 'date',
    });
  };

  const showTimePicker = (day: string, period: 'from' | 'to') => {
    DateTimePickerAndroid.open({
      value: weeklyAvailability[day][period],
      onChange: (_, time) => {
        if (time) {
          setWeeklyAvailability(prev => ({
            ...prev,
            [day]: {...prev[day], [period]: time},
          }));
        }
      },
      mode: 'time',
    });
  };

  const handleSubmit = () => {
    // Handle the submission of the availability
    console.log(weeklyAvailability);
    navigation.navigate('ConfirmationAvailability', {
      weeklyAvailability,
      availabilityPeriod,
    });
    // Submit the availability here
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={24} color="#FFFFFF" />
        <Text style={styles.headerTitle}>Shift & Schedule</Text>
        <Icon name="menu" size={24} color="transparent" />
      </View>
      <View style={styles.body}>
        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>
            Choose Date To Start Availability:
          </Text>
          <TouchableOpacity
            onPress={() => showDatePickerForPeriod('start')}
            style={styles.datePicker}>
            <Text style={styles.datePickerText}>
              {formatDate(availabilityPeriod.start)}
            </Text>
            <Icon name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>
            Choose Date To End Availability :
          </Text>
          <TouchableOpacity
            onPress={() => showDatePickerForPeriod('end')}
            style={styles.datePicker}>
            <Text style={styles.datePickerText}>
              {formatDate(availabilityPeriod.end)}
            </Text>
            <Icon name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        {weekDays.map(day => (
          <View key={day} style={styles.availabilityRow}>
            <Text style={styles.day}>{day}</Text>
            <View style={styles.timeRange}>
              <TouchableOpacity
                onPress={() => showTimePicker(day, 'from')}
                style={styles.timePicker}>
                <Text style={styles.timeText}>
                  {formatTime(weeklyAvailability[day].from)}
                </Text>
                <Icon name="chevron-down" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.toText}>To</Text>
              <TouchableOpacity
                onPress={() => showTimePicker(day, 'to')}
                style={styles.timePicker}>
                <Text style={styles.timeText}>
                  {formatTime(weeklyAvailability[day].to)}
                </Text>
                <Icon name="chevron-down" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  body: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  datePickerContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  datePickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
  },
  datePickerText: {
    fontSize: 16,
    color: '#000',
  },
  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  timeRange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  timeText: {
    fontSize: 16,
    marginRight: 5,
    color: '#000',
  },
  toText: {
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#0D1282',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateNewAvailability;
