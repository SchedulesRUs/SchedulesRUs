import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import bookOffService from '../../remote/BookOffService';
import { useAuthContext } from '../../context/AuthContext';
import { errorToast, successToast } from '../../component/Toast';

type BookOffRequestState = {
  date: Date;
  startTime: Date;
  endTime: Date;
  reason: string;
};

type BookOffStackParamList = {
  BookOffRequest: undefined;
  BookOffList: undefined;
  Confirmation: { request: BookOffRequestState };
};

type ConfirmationScreenNavigationProp = StackNavigationProp<
  BookOffStackParamList,
  'Confirmation'
>;

const ConfirmationScreen: React.FC = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();
  const route = useRoute<RouteProp<BookOffStackParamList, 'Confirmation'>>();
  const [sending, setSending] = useState(false);

  if (user == null) return <></>;

  // Extract the request data from the navigation parameters
  const { request } = route.params;

  // Format the date and time to strings
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  };

  const formatTime = (date: Date) => {
    return `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
  };

  const handleEdit = () => {
    navigation.navigate('BookOffRequest');
  };

  const handleConfirm = async () => {
    const result = await bookOffService.requestBookOff(
      user.id,
      request.startTime.getTime().toString(),
      request.endTime.getTime().toString(),
      request.reason
    )

    if (result) {
      successToast('Successfully request day off')
      navigation.goBack()
    } else {
      errorToast('Fail to request day off. Please try again')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>Your request</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Your Request Date:</Text>
        <Text style={styles.detail}>{formatDate(request.date)}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Your Request Start Time:</Text>
        <Text style={styles.detail}>{formatTime(request.startTime)}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Your Request End Time:</Text>
        <Text style={styles.detail}>{formatTime(request.endTime)}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Your Reason:</Text>
        <Text style={styles.detail}>{request.reason}</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  detailContainer: {
    width: '100%',
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    marginTop: 5,
  },
  confirmButton: {
    backgroundColor: '#0D1282',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;
