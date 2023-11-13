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
                <ImageBackground source={{ uri: props.photo }} style={styles.cardImage}>
                    <View style={styles.cardContent}>
                        <View style={styles.tripPlace}>
                            <Text style={styles.countryText}>{props.country} </Text>
                            <Text style={styles.cityText}>{props.city}</Text>
                        </View>
                        <View style={styles.dateLayout}>
                            <Text style={styles.dateText}>{props.start_date} - {props.end_date}</Text>
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
