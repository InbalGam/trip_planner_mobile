import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


////////////////////////////////////////////////////////////////////////////////////////
// Temporary components, just to check the navigation
function Trips() {
    return (
        <View style={styles.layout}>
          <Text style={styles.title}>Trips</Text>
        </View>
      );
};

function Logout(props) {
    return (
        <View style={styles.layout}>
          <Text style={styles.title}>Logout</Text>
          <Button title='Login' onPress={() => props.navigation.navigate('Login')}/>
        </View>
      );
};

function Profile() {
  return (
      <View style={styles.layout}>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
};
////////////////////////////////////////////////////////////////////////////////////////

export default function TabNavigators() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Trips" component={Trips} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Logout" component={Logout} />
      </Tab.Navigator>
    );
}


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

