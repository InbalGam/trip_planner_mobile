import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Components/StackNavigator';
import TabNavigators from './Components/TabNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
    marginTop: 10
  },
});
