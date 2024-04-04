import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {AppColor} from '../../theme/Colors';
import CheckBox from '@react-native-community/checkbox';
import {useAuthContext} from '../../context/AuthContext';
import {AvailabilityStackNavigationProp} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import avaibilityService, {
  AvailabilityResponse,
} from '../../remote/AvailabilityService';
import {errorToast, successToast} from '../../component/Toast';
import {assertIsError} from '../../extension/ErrorExt';

type DailyAvailability = {
  from: Date;
  to: Date;
  isEnabled: boolean;
};

type WeeklyAvailability = {
  [key: string]: DailyAvailability;
};

const defaultAvailability: DailyAvailability = {
  from: new Date(new Date().setHours(11, 0, 0, 0)),
  to: new Date(new Date().setHours(20, 0, 0, 0)),
  isEnabled: true,
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

const SetAvailabilityScreen: React.FC = () => {
  const {user} = useAuthContext();
  if (user == null) return <></>;
  const navigation = useNavigation<AvailabilityStackNavigationProp>();
  const [loading, setLoading] = useState(true);
  const [setting, setSetting] = useState(false);

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

  const [duration, setDuration] = useState({
    start: new Date(),
    end: new Date(),
  });

  const convertResponseToState = (response: AvailabilityResponse) => {
    const {dailySchedule, durationStart, durationEnd} = response;

    const newWeeklyAvailability: WeeklyAvailability = {};

    for (const [day, {startTime, endTime, isEnabled}] of Object.entries(
      dailySchedule,
    )) {
      const from = new Date(`1970-01-01T${startTime}:00`);
      const to = new Date(`1970-01-01T${endTime}:00`);

      newWeeklyAvailability[day] = {
        from,
        to,
        isEnabled,
      };
    }

    return {
      weeklyAvailability: newWeeklyAvailability,
      duration: {
        start: new Date(durationStart),
        end: new Date(durationEnd),
      },
    };
  };

  const formatTime24Hour = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const weeklyAvailabilityToDto = (weeklyAvailability: WeeklyAvailability) => {
    const formattedSchedule = Object.keys(weeklyAvailability).reduce(
      (acc, day) => {
        const {from, to, isEnabled} = weeklyAvailability[day];
        acc[day] = {
          startTime: formatTime24Hour(from),
          endTime: formatTime24Hour(to),
          isEnabled: isEnabled,
        };
        return acc;
      },
      {} as {
        [key: string]: {startTime: string; endTime: string; isEnabled: boolean};
      },
    );

    return formattedSchedule;
  };

  const showDatePickerForPeriod = (period: 'start' | 'end') => {
    DateTimePickerAndroid.open({
      value: duration[period],
      onChange: (_, newDate) => {
        if (newDate) {
          setDuration(prev => {
            // If selecting the start date and it's after the current end date,
            // set the end date to the same as the new start date
            if (period === 'start' && newDate > prev.end) {
              return {...prev, start: newDate, end: newDate};
            }
            // If selecting the end date and it's before the current start date,
            // set the start date to the same as the new end date
            else if (period === 'end' && newDate < prev.start) {
              return {...prev, start: newDate, end: newDate};
            }
            // Otherwise, just update the selected date
            return {...prev, [period]: newDate};
          });
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

  const handleSubmit = async () => {
    setSetting(true);
    // Handle the submission of the availability
    const dto = {
      userId: user.id,
      durationStart: durationToDto(duration.start),
      durationEnd: durationToDto(duration.end),
      dailySchedule: weeklyAvailabilityToDto(weeklyAvailability),
    };
    console.log('dto', dto);
    try {
      const result = await avaibilityService.setAvailability(dto);
      console.log(result);
      fetchAvailability();
      successToast('Successfully set your availability');
    } catch (error) {
      assertIsError(error);
      errorToast('Something went wrong', error.message);
      console.error(error);
    }

    setSetting(false);
  };

  const toggleDayEnabled = (day: string) => {
    setWeeklyAvailability(prev => ({
      ...prev,
      [day]: {...prev[day], isEnabled: !prev[day].isEnabled},
    }));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const durationToDto = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  const fetchAvailability = async () => {
    const result = await avaibilityService.getAvailability(user.id);
    if (result) {
      const {weeklyAvailability, duration} = convertResponseToState(result);
      console.log(weeklyAvailability);
      console.log(duration);

      // // Use these values to set your states
      setWeeklyAvailability(weeklyAvailability);
      setDuration(duration);
    } else {
      setWeeklyAvailability({
        Monday: defaultAvailability,
        Tuesday: defaultAvailability,
        Wednesday: defaultAvailability,
        Thursday: defaultAvailability,
        Friday: defaultAvailability,
        Saturday: defaultAvailability,
        Sunday: defaultAvailability,
      });
      setDuration({
        start: new Date(),
        end: new Date(),
      });
    }

    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAvailability();

      return () => {
        // Optional: Any cleanup logic goes here
      };
    }, []),
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios-new" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Availability</Text>
        <Icon name="" size={24} color="transparent" />
      </View>
      {loading ? (
        <View style={styles.centeredView}>
          <ActivityIndicator size={40} color={AppColor} />
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>
              Choose Date To Start Availability:
            </Text>
            <TouchableOpacity
              onPress={() => showDatePickerForPeriod('start')}
              style={styles.datePicker}>
              <Text style={styles.datePickerText}>
                {formatDate(duration.start)}
              </Text>
              <CommunityIcon name="pencil" size={20} color="#000" />
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
                {formatDate(duration.end)}
              </Text>
              <CommunityIcon name="pencil" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          {weekDays.map(day => (
            <View key={day} style={styles.availabilityRow}>
              <CheckBox
                value={weeklyAvailability[day].isEnabled}
                onValueChange={() => toggleDayEnabled(day)}
                tintColors={{true: '#0D1282', false: '#000'}} // Adjust the color as needed
              />
              <Text style={styles.day}>{day}</Text>
              <View style={styles.timeRange}>
                <TouchableOpacity
                  onPress={() => showTimePicker(day, 'from')}
                  disabled={!weeklyAvailability[day].isEnabled}
                  style={[
                    styles.timePicker,
                    !weeklyAvailability[day].isEnabled &&
                      styles.disabledTimePicker,
                  ]}>
                  <Text
                    style={[
                      styles.timeText,
                      !weeklyAvailability[day].isEnabled && styles.disabledText,
                    ]}>
                    {formatTime(weeklyAvailability[day].from)}
                  </Text>
                  <CommunityIcon
                    name="chevron-down"
                    size={20}
                    color={!weeklyAvailability[day].isEnabled ? '#CCC' : '#000'}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.toText,
                    !weeklyAvailability[day].isEnabled && styles.disabledText,
                  ]}>
                  To
                </Text>
                <TouchableOpacity
                  onPress={() => showTimePicker(day, 'to')}
                  disabled={!weeklyAvailability[day].isEnabled}
                  style={[
                    styles.timePicker,
                    !weeklyAvailability[day].isEnabled &&
                      styles.disabledTimePicker,
                  ]}>
                  <Text
                    style={[
                      styles.timeText,
                      !weeklyAvailability[day].isEnabled && styles.disabledText,
                    ]}>
                    {formatTime(weeklyAvailability[day].to)}
                  </Text>
                  <CommunityIcon
                    name="chevron-down"
                    size={20}
                    color={!weeklyAvailability[day].isEnabled ? '#CCC' : '#000'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={setting}>
            {setting ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>Set Availability</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
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
  toggleButton: {
    backgroundColor: AppColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginEnd: 10,
    alignSelf: 'flex-start', // Aligns button to the start of the flex container
  },
  toggleButtonText: {
    color: '#FFFFFF', // white color for the text
    fontWeight: 'bold',
  },
  disabledTimePicker: {
    backgroundColor: '#FFF', // Light grey background
  },
  disabledText: {
    color: '#CCC', // Grey text color
  },
});

export default SetAvailabilityScreen;
