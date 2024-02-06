import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';

import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import ShiftItem from './ShiftItem';


const HomeStack = () => {
    const {
        layout,
    } = useTheme();

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
        <SafeScreen>
            <View style={[
                layout.itemsCenter,
                layout.justifyCenter,
                layout.fullWidth,
                { height: 80, backgroundColor: '#0D1282' }
            ]}>
                <Text style={[
                    { color: 'white', fontWeight: 'bold', fontSize: 18 }]
                }>Home</Text>
            </View>
            <ScrollView
                contentContainerStyle={[layout.flex_1]}
            >
                <Text>Upcoming Shift for {username}</Text>
                <FlatList
                    data={shifts}
                    renderItem={({ item }) => <ShiftItem shift={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
        </SafeScreen>
    )
}

export default HomeStack;