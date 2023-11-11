import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {login} from '../Api';
import * as Progress from 'react-native-progress';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);
    const nav = useNavigation();

    const ifAuthFailed = () => {
        Alert.alert('Authentication failed', 'Username or Password are incorrect, try again', [
            {text: 'OK', onPress: () => console.log('OK Pressed')}, // TODO: remove username & password inputs + setAuthFailed(false)
          ]);
    };


    return (
        <View style={styles.layout}>
            {isLoading ? <Progress.CircleSnail spinDuration={0}/> : <Button title='Main' onPress={() => nav.navigate('Main')}/>}
            {authFailed ? ifAuthFailed() : <Text>All OK</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16
    }
});

