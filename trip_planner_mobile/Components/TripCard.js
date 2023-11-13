import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


const {width} = Dimensions.get('screen');


export default function TripCard(props) {
    // const [showForm, setShowForm] = useState(false);
    // const [deleteFailed, setDeleteFailed] = useState(false);
    // const [updateFailed, setUpdateFailed] = useState(false);
    const nav = useNavigation();
    


    return (
        <TouchableOpacity activeOpacity={0.8} >
            <View style={styles.imageLayout}>
                <ImageBackground source={{ uri: props.trip.photo }} style={styles.cardImage}>
                    <View style={styles.cardContent}>
                        <View style={styles.tripPlace}>
                            <Text style={styles.countryText}>{props.trip.country} </Text>
                            <Text style={styles.cityText}>{props.trip.city}</Text>
                        </View>
                        <View style={styles.dateLayout}>
                            <Text style={styles.dateText}>{props.trip.start_date} - {props.trip.end_date}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    imageLayout: {
        marginVertical: 20
    },
    cardImage: {
        height: 220,
        width: width / 1.25,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: 'white',
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
        color: 'black',
        fontSize: 24,
        fontWeight: '600'
    },
    cityText: {
        color: 'black',
        fontSize: 24,
        fontWeight: '400'
    },
    dateLayout: {
        flex: 0,
        marginTop: '45%'
    },
    dateText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    }
});
