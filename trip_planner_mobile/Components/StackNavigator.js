import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigators from './TabNavigators';
import Login from './Login';
import Signup from './Signup';
import TripsList from './TripsList';
import TripAddUpdate from './TripAddUpdate';

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
function Trips() {
  return (
      <View style={styles.layout}>
        <Text style={styles.title}>Trips</Text>
      </View>
    );
};


function Error() {
    return (
        <View style={styles.layout}>
          <Text style={styles.title}>Server Error</Text>
        </View>
      );
};
////////////////////////////////////////////////////////////////////////////////////////

export default function StackNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{ headerStyle: { backgroundColor: '#faf5ff' } }}>
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Signup" component={Signup} />
           <Stack.Screen name="Error" component={Error} />
           <Stack.Screen name="Trips" component={TripsList} options={{  
                                                                title: 'The Trip Planner',
                                                                headerTitleAlign: 'center',
                                                                headerTitleStyle: {
                                                                    fontWeight: '600'
                                                                }}}/>
          <Stack.Screen name="AddTrip" component={TripAddUpdate} />
        </Stack.Navigator>
      );
};

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: '#faf5ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16
    }
});
