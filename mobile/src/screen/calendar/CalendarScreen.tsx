import {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import AgendaItem from './AgendaItem';
import {MarkedDates} from 'react-native-calendars/src/types';
import {format} from 'date-fns';
import {
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import {AppStatusBar} from '../../theme/StatusBar';
import {getSchedule} from '../../remote/ScheduleService';
import {Shift} from '../../model/Shift';
import {ScheduleResponse} from '../../model/response/ScheduleResponse';

// export const agendaItems = [
//     {
//         title: '2024-03-16', // Assume this is a Monday
//         data: [
//             { hour: '9am', duration: '8h', title: 'Server Morning Shift' },
//             { hour: '9am', duration: '8h', title: 'Cook Morning Shift' }
//         ]
//     },
//     {
//         title: '2024-03-17', // Tuesday
//         data: [
//             { hour: '9am', duration: '8h', title: 'Host Morning Shift' },
//             { hour: '4pm', duration: '6h', title: 'Server Evening Shift' }
//         ]
//     },
//     {
//         title: '2024-03-18', // Wednesday
//         data: [
//             { hour: '10am', duration: '6h', title: 'Cook Day Shift' },
//             { hour: '5pm', duration: '6h', title: 'Bartender Shift' }
//         ]
//     },
//     // ... continue for other dates
//     {
//         title: '2024-03-22', // Sunday
//         data: [
//             { hour: '8am', duration: '5h', title: 'Brunch Server Shift' },
//             { hour: '8am', duration: '5h', title: 'Brunch Cook Shift' },
//             { hour: '6pm', duration: '5h', title: 'Dinner Host Shift' }
//         ]
//     },
// ];

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const [shifts, setShifts] = useState<ShiftsByDate[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const marked = useRef(getMarkedDates());

  interface ShiftsByDate {
    title: string;
    data: Shift[];
  }

  interface Shift {
    hour: string;
    duration: string;
    title: string;
  }

  const groupShiftsByDate = (data: ScheduleResponse[]): ShiftsByDate[] => {
    const grouped = data.reduce((acc: Record<string, ShiftsByDate>, item) => {
      const dateKey = new Date(item.start).toISOString().split('T')[0];
      if (!acc[dateKey]) {
        acc[dateKey] = {title: dateKey, data: []};
      }
      acc[dateKey].data.push({
        hour: 'Total',
        duration: calculateDuration(item.start, item.end),
        title:
          item.title +
          `\nFrom ${formatHour(item.start)} - ${formatHour(item.end)}`,
      });
      return acc;
    }, {});

    return Object.values(grouped);
  };

  const formatHour = (dateString: string): string => {
    return new Date(dateString)
      .toLocaleTimeString('en-US', {hour: 'numeric', hour12: true})
      .toLowerCase();
  };

  const calculateDuration = (start: string, end: string): string => {
    const duration =
      (new Date(end).getTime() - new Date(start).getTime()) / 3600000;
    return `${duration}h`;
  };

  function getMarkedDates() {
    const marked: MarkedDates = {};

    shifts.forEach(item => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0) {
        marked[item.title] = {marked: true};
      } else {
        marked[item.title] = {disabled: true};
      }
    });
    return marked;
  }

  const fetchSchedule = async () => {
    const result = await getSchedule();
    const groupedShifts = groupShiftsByDate(result);
    setShifts(groupedShifts);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSchedule();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppStatusBar />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <CalendarProvider
          style={{backgroundColor: 'white'}}
          date={selectedDate}>
          <WeekCalendar firstDay={1} markedDates={marked.current} />
          <AgendaList
            sections={shifts}
            renderItem={renderItem}
            // scrollToNextEvent
            sectionStyle={styles.section}
            // dayFormat={'yyyy-MM-d'}
          />
        </CalendarProvider>
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000FF',
    paddingVertical: 15,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  section: {
    backgroundColor: 'white',
    color: 'grey',
    textTransform: 'capitalize',
  },
});
