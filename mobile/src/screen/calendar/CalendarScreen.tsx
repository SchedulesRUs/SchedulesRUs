import { useCallback, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import AgendaItem from './AgendaItem';
import { MarkedDates } from 'react-native-calendars/src/types';
import { format } from 'date-fns';
import { AgendaList, CalendarProvider, WeekCalendar } from 'react-native-calendars';

export const agendaItems = [
    {
        title: '2024-03-16', // Assume this is a Monday
        data: [
            { hour: '9am', duration: '8h', title: 'Server Morning Shift' },
            { hour: '9am', duration: '8h', title: 'Cook Morning Shift' }
        ]
    },
    {
        title: '2024-03-17', // Tuesday
        data: [
            { hour: '9am', duration: '8h', title: 'Host Morning Shift' },
            { hour: '4pm', duration: '6h', title: 'Server Evening Shift' }
        ]
    },
    {
        title: '2024-03-18', // Wednesday
        data: [
            { hour: '10am', duration: '6h', title: 'Cook Day Shift' },
            { hour: '5pm', duration: '6h', title: 'Bartender Shift' }
        ]
    },
    // ... continue for other dates
    {
        title: '2024-03-22', // Sunday
        data: [
            { hour: '8am', duration: '5h', title: 'Brunch Server Shift' },
            { hour: '8am', duration: '5h', title: 'Brunch Cook Shift' },
            { hour: '6pm', duration: '5h', title: 'Dinner Host Shift' }
        ]
    },
];

export function getMarkedDates() {
    const marked: MarkedDates = {};

    agendaItems.forEach(item => {
        // NOTE: only mark dates with data
        if (item.data && item.data.length > 0) {
            marked[item.title] = { marked: true };
        } else {
            marked[item.title] = { disabled: true };
        }
    });
    return marked;
}

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const list = [
        { role: 'Manager', name: 'Alice', time: '08:00 - 16:00' },
        { role: 'Cashier', name: 'Bob', time: '09:00 - 17:00' },
        { role: 'Cook', name: 'Charlie', time: '10:00 - 18:00' },
        { role: 'Waiter', name: 'David', time: '11:00 - 19:00' },
        { role: 'Janitor', name: 'Eve', time: '12:00 - 20:00' }
    ]

    const marked = useRef(getMarkedDates());

    const renderItem = useCallback(({ item }: any) => {
        return <AgendaItem item={item} />;
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CalendarProvider
                style={{ backgroundColor: 'white' }}
                date={selectedDate}
            >
                <WeekCalendar
                    firstDay={1}
                    markedDates={marked.current}
                />
                <AgendaList
                    sections={agendaItems}
                    renderItem={renderItem}
                    // scrollToNextEvent
                    sectionStyle={styles.section}
                // dayFormat={'yyyy-MM-d'}
                />
            </CalendarProvider>
        </SafeAreaView >
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
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
        backgroundColor: 'lightgrey'
    },
    section: {
        backgroundColor: 'white',
        color: 'grey',
        textTransform: 'capitalize'
    }
});
