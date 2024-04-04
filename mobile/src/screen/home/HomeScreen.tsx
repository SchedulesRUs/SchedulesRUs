import {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import ShiftItem from './ShiftItem';
import {AppStatusBar} from '../../theme/StatusBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSchedule} from '../../remote/ScheduleService';
import {useAuthContext} from '../../context/AuthContext';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {infoToast} from '../../component/Toast';

type Shift = {
  id: number;
  start: number;
  end: number;
  position: string;
};

const HomeScreen = () => {
  const {user} = useAuthContext();
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [shifts, setShifts] = useState<Shift[] | null>(null);

  if (user == null) return <></>;

  const fetchSchedule = async () => {
    const result = await getSchedule();
    const list: Shift[] = result
      .filter(item =>
        item.title.toLowerCase().includes(user.username.toLowerCase()),
      )
      .map(item => ({
        id: item.id,
        start: Date.parse(item.start) / 1000,
        end: Date.parse(item.end) / 1000,
        position: user.role,
      }))
      .sort((a, b) => a.start - b.start);

    setShifts(list);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSchedule();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppStatusBar />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Welcome {user.username}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{flex: 1, margin: 20}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Your Upcoming Shift
        </Text>
        {shifts && shifts.length > 0 ? (
          <FlatList
            data={shifts}
            renderItem={({item}) => <ShiftItem shift={item} />}
            keyExtractor={item => item.id.toString()}
          />
        ) : shifts && shifts.length === 0 ? (
          <View style={styles.centeredView}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              You haven't been assigned any shifts yet.
            </Text>
          </View>
        ) : (
          <View style={styles.centeredView}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#0D1282',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
