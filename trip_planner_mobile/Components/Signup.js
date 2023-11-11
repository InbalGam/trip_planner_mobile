import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Pressable, Image, Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {register} from '../Api';
import { Formik } from 'formik';
import * as Progress from 'react-native-progress';
import googleIconImageSrc from "../assets/google-icon.png";
import { baseURL } from '../appInfo';
import {validateEmail} from '../utils';

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const [registerAuth, setRegisterAuth] = useState(false);
    const nav = useNavigation();

    const ifAuthFailed = () => {
        Alert.alert('Authentication failed', 'Username or Password are incorrect, try again', [
            {text: 'OK', onPress: () => setRegisterAuth(false)},
          ]);
    };

    const checkUsername = (text) => {
        console.log(text);
        if (!validateEmail(text)) {
            Alert.alert('Username is not valid', 'Username should be a valid email', [
                {text: 'OK', onPress: () => ''},
              ]);
            return false;
        } else {
            return true;
        }
    };


    const checkPassword = (text) => {
        console.log(text);
        if (text.length < 8) {
            Alert.alert('Password is not valid', 'Password should be at least 8 characters', [
                {text: 'OK', onPress: () => ''},
              ]);
            return false;
        } else {
            return true;
        }
    };


    const checkNickname = (text) => {
        console.log(text);
        if (text.length < 3) {
            Alert.alert('Nickname is not valid', 'Nickname should be at least 3 characters', [
                {text: 'OK', onPress: () => ''},
              ]);
            return false;
        } else {
            return true;
        }
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
                    initialValues={{ username: '', password: '', nickname: '' }}
                    onSubmit={async (values) => {
                        if (checkUsername(values.username) && checkPassword(values.password) && checkNickname(values.nickname)) {
                            try {
                                setIsLoading(true);
                                const result = await register(values.username, values.password, values.nickname);
                                if (result.status === 201) {
                                    nav.navigate('Login');
                                    setIsLoading(false);
                                } else {
                                    setRegisterAuth(true);
                                    setIsLoading(false);
                                }
                            } catch (e) {
                                nav.navigate('Error');
                                setIsLoading(false);
                            }
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
                                    keyboardType='email-address'
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry={true}
                                    value={values.password}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Nickname'
                                    onChangeText={handleChange('nickname')}
                                    onBlur={handleBlur('nickname')}
                                    value={values.nickname}
                                />
                                <SubmitButton onPress={handleSubmit} title='Sign up' disabled={isSubmitting} />
                            </View>
                        )}
                    </Formik>
                    <Text style={styles.text}>OR</Text>
                    <GoogleLoginButton onPress={() => Linking.openURL(`${baseURL}/login/google`)} />
                    <Text style={styles.text} onPress={() => nav.navigate('Login')}>Already have an account? Login</Text>
                </View>}
            {registerAuth ? ifAuthFailed() : ''}
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
      marginTop: 30,
      marginBottom: 20,
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

