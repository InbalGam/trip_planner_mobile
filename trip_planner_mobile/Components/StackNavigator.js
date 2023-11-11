import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigators from './TabNavigators';
import Login from './Login';

const Stack = createStackNavigator();


////////////////////////////////////////////////////////////////////////////////////////
// Temporary components, just to check the navigation

// function Login(props) {
//     return (
//         <View style={styles.layout}>
//           <Text style={styles.title}>Login</Text>
//           <Button title='Main' onPress={() => props.navigation.navigate('Main')}/>
//         </View>
//       );
// };

////////////////////////////////////////////////////////////////////////////////////////

export default function StackNavigator() {
    return (
        <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Main" component={TabNavigators} options={{ 
                                                                headerLeft: () => <></>, 
                                                                title: 'The Trip Planner',
                                                                headerTitleAlign: 'center',
                                                                headerTitleStyle: {
                                                                    fontWeight: '600'
                                                                }}}/> 
           {/* The headerLeft removes the back button */}
        </Stack.Navigator>
      );
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
