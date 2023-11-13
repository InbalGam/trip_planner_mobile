import React, {useEffect, useState} from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getTrips, insertTrip} from '../Api';
import TripCard from './TripCard';
import * as Progress from 'react-native-progress';
import { Icon } from 'react-native-elements';


export default function TripsList() {
    const [trips, setTrips] = useState([{
        id: 1,
        country: 'France',
        city: 'Paris',
        start_date: 'November 25, 2023',
        end_date: 'November 30, 2023',
        emails: 'emails',
        photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxGcmFuY2UlMkMlMjBQYXJpc3xlbnwwfHx8fDE2OTk3OTY0MjR8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        id: 2,
        country: 'England',
        city: 'London',
        start_date: 'December 10, 2023',
        end_date: 'December 20, 2023',
        emails: 'emails',
        photo: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxFbmdsYW5kJTJDJTIwTG9uZG9ufGVufDB8fHx8MTY5OTg2MjI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" 
    },
    {
        id: 3,
        country: 'Italy',
        city: 'Rome',
        start_date: 'November 25, 2023',
        end_date: 'November 30, 2023',
        emails: 'emails',
        photo: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxJdGFseSUyQyUyMFJvbWV8ZW58MHx8fHwxNjk5ODY1MjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 4,
        country: 'Greece',
        city: 'Athens',
        start_date: 'December 10, 2023',
        end_date: 'December 20, 2023',
        emails: 'emails',
        photo: "https://images.unsplash.com/photo-1613766215634-86f88de21c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxHcmVlY2UlMkMlMjBBdGhlbnN8ZW58MHx8fHwxNjk5ODY1MzA1fDA&ixlib=rb-4.0.3&q=80&w=1080"
    }]);
    const [showForm, setShowForm] = useState(false);
    const [insertFailed, setInsertFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const nav = useNavigation();

    // useEffect(() => {
    //     getUserTrips();
    // }, []);

    async function getUserTrips() {
        console.log('here')
        try {
            setIsLoading(true);
            const result = await getTrips();
            console.log(result)
            if (result.status === 401) {
                nav.navigate('Login')
            } else {
                const jsonData = await result.json();
                console.log(jsonData)
                setTrips(jsonData);
                setIsLoading(false);
            }
        } catch (e) {
            nav.navigate('Error');
            setIsLoading(false);
        }
    };



    return (
        <SafeAreaView style={styles.tripsLayout}>
            {isLoading ? <Progress.CircleSnail spinDuration={0} /> :
                <View style={styles.trips}>
                    <View style={styles.addTripContainer}>
                        <Icon name='add' onPress={() => console.log('pressed add')} />
                    </View>
                    <FlatList
                        data={trips}
                        renderItem={({ item }) => <TripCard trip={item} getUserTrips={getUserTrips} setShowForm={setShowForm} setIsLoading={setIsLoading}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
            }
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    tripsLayout: {
        flex: 1,
        backgroundColor: '#faf5ff'
    },
    trips: {
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20
    },
    addTripContainer: {
        
    }
});
