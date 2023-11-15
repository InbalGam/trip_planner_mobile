import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import { Formik, useFormikContext } from 'formik';


export default function TripAddUpdate() {
    const [selectedCountry, setSelectedCountry] = useState('');


    const onSelect = (country) => {
        console.log(country.name);
        setSelectedCountry(country.name);
    }
    
    function SubmitButton(props) {
        const { onPress, title = '', disabled } = props;
        return (
          <Pressable //style={styles.loginButton} 
          onPress={onPress} disabled={disabled}>
            <Text //style={styles.buttonText}
            >{title}</Text>
          </Pressable>
        );
    };


    return (
        <View>
            <Text>
                {selectedCountry ? selectedCountry : 
                <CountryPicker
                    {...{
                        selectedCountry,
                        onSelect
                    }}
                />}
            </Text>
            <Formik
                    enableReinitialize
                    initialValues={{ country: selectedCountry, city: '', check: '' }}
                    onSubmit={async (values) => {
                        console.log(values);
                        // setIsLoading(true);
                        // try {
                        //     const result = await login(values.username, values.password);
                        //     if (result === true) {
                        //         nav.navigate('Trips');
                        //         setIsLoading(false);
                        //     } else {
                        //         setAuthFailed(true);
                        //         setIsLoading(false);
                        //     }
                        // } catch (e) {
                        //     nav.navigate('Error');
                        //     setIsLoading(false);
                        // }
                      }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, isSubmitting, values }) => (
                            <View>
                                <TextInput 
                                    //style={styles.input}
                                    placeholder='City'
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                />
                                <TextInput
                                    //style={styles.input}
                                    placeholder='Check'
                                    onChangeText={handleChange('check')}
                                    onBlur={handleBlur('check')}
                                    value={values.check}
                                />
                                <SubmitButton onPress={handleSubmit}  title='Submit' disabled={isSubmitting} />
                            </View>
                        )}
                    </Formik>
        </View>
    )
};