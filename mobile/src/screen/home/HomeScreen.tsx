import { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import ShiftItem from './ShiftItem';
import { AppStatusBar } from '../../theme/StatusBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getSchedule } from '../../services/ScheduleService';

type Shift = {
    id: number;
    start: number;
    end: number;
    position: string;
}

const HomeScreen = () => {
    const username = 'Khang Tring'
    const [refreshing, setRefreshing] = useState(false);
    const [shifts, setShifts] = useState<Shift[]>([])

    const fetchSchedule = async () => {
        const result = await getSchedule()
        const list: Shift[] = result.map((item) => ({
            id: item.id,
            start: Date.parse(item.start) / 1000,
            end: Date.parse(item.end) / 1000,
            position: item.title,
        }));

        setShifts(list)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchSchedule();
        setRefreshing(false);
    }, []);

    useEffect(() => {
        fetchSchedule();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <AppStatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon name="menu" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Welcome {username}</Text>
            </View>
            <ScrollView
                contentContainerStyle={{ flex: 1, margin: 20 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Upcoming Shift</Text>
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
        left: 20,
    },
});

export default HomeScreen;