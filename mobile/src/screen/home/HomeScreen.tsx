import { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import ShiftItem from './ShiftItem';
import { AppStatusBar } from '../../theme/StatusBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = () => {
    const username = 'Khang Tring'
    const [shifts, setShifts] = useState([
        {
            id: 1,
            start: 1707163200,
            end: 1707192000,
            position: 'Cooker',
        },
        {
            id: 2,
            start: 1707242400,
            end: 1707271200,
            position: 'Server',
        },
        {
            id: 3,
            start: 1707339600,
            end: 1707357600,
            position: 'Cleaner',
        },
        {
            id: 4,
            start: 1707418800,
            end: 1707433200,
            position: 'Kitchen Helper',
        },
        {
            id: 5,
            start: 1707163200,
            end: 1707192000,
            position: 'Server',
        },
        {
            id: 6,
            start: 1707163200,
            end: 1707192000,
            position: 'Cashier, Server',
        }
    ])

    return (
        <View style={{ flex: 1 }}>
            <AppStatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon name="menu" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Home</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text>Upcoming Shift for {username}</Text>
                <FlatList
                    data={shifts}
                    renderItem={({ item }) => <ShiftItem shift={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
        </View>
    )
}

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
        left: 10,
    },
});

export default HomeScreen;