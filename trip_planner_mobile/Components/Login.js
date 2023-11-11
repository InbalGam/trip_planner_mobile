import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Pressable, Image, Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {login} from '../Api';
import { Formik } from 'formik';
import * as Progress from 'react-native-progress';
import googleIconImageSrc from "../assets/google-icon.png";
import { baseURL } from '../appInfo';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);
    const nav = useNavigation();

    const ifAuthFailed = () => {
        Alert.alert('Authentication failed', 'Username or Password are incorrect, try again', [
            {text: 'OK', onPress: () => setAuthFailed(false)},
          ]);
    };


    function SubmitButton(props) {
        const { onPress, title = '', disabled } = props;
        return (
          <Pressable style={styles.loginButton} onPress={onPress} disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>
        );
    };


    function GoogleLoginButton(props) {
        const { onPress } = props;
        return (
          <Pressable style={styles.googleButton} onPress={onPress} >
            <Image source={googleIconImageSrc}/>
          </Pressable>
        );
    };


    return (
        <View style={styles.layout}>
            {isLoading ? <Progress.CircleSnail spinDuration={0} /> :
                <View>
                    <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={async (values) => {
                        setIsLoading(true);
                        try {
                            const result = await login(values.username, values.password);
                            if (result === true) {
                                nav.navigate('Main');
                                setIsLoading(false);
                            } else {
                                setAuthFailed(true);
                                setIsLoading(false);
                            }
                        } catch (e) {
                            nav.navigate('Error');
                            setIsLoading(false);
                        }
                      }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, isSubmitting, values }) => (
                            <View >
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Username'
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry={true}
                                    value={values.password}
                                />
                                <SubmitButton onPress={handleSubmit}  title='Login' disabled={isSubmitting} />
                            </View>
                        )}
                    </Formik>
                    <Text style={styles.text}>OR</Text>
                    <GoogleLoginButton onPress={() => Linking.openURL(`${baseURL}/login/google`)} />
                    <Text style={styles.text} onPress={() => nav.navigate('Signup')}>Dont have an account? Sign Up</Text>
                </View>}
            {authFailed ? ifAuthFailed() : ''}
        </View>
    )
};

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: '#faf5ff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    text: {
      fontSize: 16,
      marginTop: 50,
      marginBottom: 40,
      textAlign: 'center'
    },
    input: {
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: 'rgb(192 199 203)',
        marginBottom: 24,
        borderRadius: 12,
        padding: 8,
        paddingHorizontal: '10%',
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: '#dbc0f5',
        borderRadius: 12,
        padding: 8
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center'
    },
    googleButton: {
        backgroundColor: 'transperant',
        alignSelf: 'center'
    },
    link: {}
});

