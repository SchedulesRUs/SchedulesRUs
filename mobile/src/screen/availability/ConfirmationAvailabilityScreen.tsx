import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type AvailabilityStackParamList = {
  CreateNewAvailability: undefined;
  AvailabilityList: undefined;
  ConfirmationAvailability: undefined;
};

type ConfirmationAvailabilityScreenNavigationProp = StackNavigationProp<
  AvailabilityStackParamList,
  'ConfirmationAvailability'
>;

const ConfirmationAvailabilityScreen: React.FC = () => {
  const navigation =
    useNavigation<ConfirmationAvailabilityScreenNavigationProp>();

  const handleEdit = () => {
    navigation.navigate('CreateNewAvailability');
  };

  const handleConfirm = () => {
    navigation.navigate('AvailabilityList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>
        Your Request has been submitted
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
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
