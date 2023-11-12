import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'


const {width} = Dimensions.get('screen');


const exampleTrip = {
    country: 'France',
    city: 'Paris',
    start_date: 'November 25, 2023',
    end_date: 'November 30, 2023',
    emails: 'emails',
    photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxGcmFuY2UlMkMlMjBQYXJpc3xlbnwwfHx8fDE2OTk3OTY0MjR8MA&ixlib=rb-4.0.3&q=80&w=1080'
    //photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixid=M3w1MjcxOTZ8MHwxfHNlYXJjaHwxfHxGcmFuY2UlMkMlMjBQYXJpc3xlbnwwfHx8fDE2OTk3OTY0MjR8MA&ixlib=rb-4.0.3'
};

export default function TripCard() {
    // const [showForm, setShowForm] = useState(false);
    // const [deleteFailed, setDeleteFailed] = useState(false);
    // const [updateFailed, setUpdateFailed] = useState(false);
    const nav = useNavigation();
    


    return (
        <TouchableOpacity activeOpacity={0.8} >
            <View style={styles.imageLayout}>
                <ImageBackground source={{ uri: exampleTrip.photo }} style={styles.cardImage}>
                    <View style={styles.cardContent}>
                        <View style={styles.tripPlace}>
                            <Text style={styles.countryText}>{exampleTrip.country} </Text>
                            <Text style={styles.cityText}>{exampleTrip.city}</Text>
                        </View>
                        <View style={styles.dateLayout}>
                            <Text style={styles.dateText}>{exampleTrip.start_date} - {exampleTrip.end_date}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    imageLayout: {
        alignSelf: 'flex-start'
    },
    cardImage: {
        height: 220,
        width: width / 1.25,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
        opacity: 0.8
    },
    cardContent: {
        flex: 1
    },
    tripPlace: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    countryText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    },
    cityText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '400'
    },
    dateLayout: {
        flex: 0,
        marginTop: '45%'
    },
    dateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }
});
