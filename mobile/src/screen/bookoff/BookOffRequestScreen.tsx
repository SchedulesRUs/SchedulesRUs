import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

type BookOffRequestState = {
  date: Date;
  startTime: Date;
  endTime: Date;
  reason: string;
};

const BookOffRequestScreen: React.FC = () => {
  const navigation = useNavigation();
  const [request, setRequest] = useState<BookOffRequestState>({
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    reason: '',
  });

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: request.date,
      onChange: (event, date) => {
        if (date) {
          setRequest({ ...request, date });
        }
      },
      mode: 'date',
    });
  };

  const showStartTimePicker = () => {
    DateTimePickerAndroid.open({
      value: request.startTime,
      onChange: (event, date) => {
        if (date) {
          setRequest({ ...request, startTime: date });
        }
      },
      mode: 'time',
    });
  };

  const showEndTimePicker = () => {
    DateTimePickerAndroid.open({
      value: request.endTime,
      onChange: (event, date) => {
        if (date) {
          setRequest({ ...request, endTime: date });
        }
      },
      mode: 'time',
    });
  };

  const handleReasonChange = (text: string) => {
    setRequest({ ...request, reason: text });
  };

  const handleSubmit = () => {
    console.log('Book Off Request:', request);
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  };

  const formatTime = (date: Date) => {
    return `${('0' + date.getHours()).slice(-2)}:${(
      '0' + date.getMinutes()
    ).slice(-2)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios-new" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request Book Off</Text>
        <Icon name="" size={24} color="transparent" />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>New Request</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Choose Date To Request:</Text>
          <TouchableOpacity style={styles.inputField} onPress={showDatePicker}>
            <Text style={styles.input}>{formatDate(request.date)}</Text>
            <MaterialCommunityIcon name="calendar" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Start Time:</Text>
          <TouchableOpacity
            style={styles.inputField}
            onPress={showStartTimePicker}>
            <Text style={styles.input}>{formatTime(request.startTime)}</Text>
            <MaterialCommunityIcon name="clock" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>End Time:</Text>
          <TouchableOpacity
            style={styles.inputField}
            onPress={showEndTimePicker}>
            <Text style={styles.input}>{formatTime(request.endTime)}</Text>
            <MaterialCommunityIcon name="clock" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.reasonInput}
            onChangeText={handleReasonChange}
            value={request.reason}
            placeholder="Reason"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit BookOff Request</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  input: {
    fontSize: 16,
  },
  reasonInput: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#0D1282',
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookOffRequestScreen;
