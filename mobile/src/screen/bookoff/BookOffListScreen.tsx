import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BookOffStackNavigationProp } from '../../../App';
import { useAuthContext } from '../../context/AuthContext';
import bookOffService, { BookOffResponse } from '../../remote/BookOffService';

const BookOffListScreen = () => {
    const navigation = useNavigation<BookOffStackNavigationProp>();

    const { user } = useAuthContext();

    const [refreshing, setRefreshing] = useState(false);
    const [bookOffs, setBookOffs] = useState<BookOffResponse[] | null>(null);

    if (user == null) return (<></>)

    const fetchBookOffs = async () => {
        const result = await bookOffService.getBookOffs()
        if (result == null) return setBookOffs([])

        const list: BookOffResponse[] = result
            .filter(item => item.user_id == user.id)

        setBookOffs(list);
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchBookOffs();
        setRefreshing(false);
    }, []);

    useEffect(() => {
        fetchBookOffs();
    }, []);

    // Dummy data for the list of BookOff requests
    const bookOffData = [
        { date: 'July 25, 2024', day: 'Thursday', status: 'Approved' },
        { date: 'July 24, 2024', day: 'Wednesday', status: 'Denied' },
        // ... add the rest of your data here
    ];

    // Function to return the icon based on status
    const getStatusIcon = (status: string) => {
        const iconName = status === 'Approved' ? 'check' : 'close';
        const iconColor = status === 'Approved' ? 'green' : 'red';
        return <Icon name={iconName} size={20} color={iconColor} />;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios-new" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your Book Off</Text>
                <Icon name="" size={24} color="transparent" />
            </View>

            <View style={styles.subHeader}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('BookOffRequest')}>
                    <Text style={styles.addButtonText}>+ Add New Book Off</Text>
                </TouchableOpacity>
            </View>

            {bookOffData.map((item, index) => (
                <View key={index} style={styles.bookOffItem}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dayText}>{item.day}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        {getStatusIcon(item.status)}
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    subHeader: {
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    subHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    bookOffItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    dateContainer: {
        flexDirection: 'column',
    },
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 16,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default BookOffListScreen;