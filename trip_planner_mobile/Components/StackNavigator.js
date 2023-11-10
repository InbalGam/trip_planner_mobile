import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigators from './TabNavigators';

const Stack = createStackNavigator();


////////////////////////////////////////////////////////////////////////////////////////
// Temporary components, just to check the navigation
function Login(props) {
    return (
        <View style={styles.layout}>
          <Text style={styles.title}>Login</Text>
          <Button title='Main' onPress={() => props.navigation.navigate('The Trip Planner')}/>
        </View>
      );
};

////////////////////////////////////////////////////////////////////////////////////////

export default function StackNavigator() {
    return (
        <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="The Trip Planner" component={TabNavigators} options={{ headerLeft: () => <></> }}/> 
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
