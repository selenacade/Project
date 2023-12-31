import { StyleSheet } from 'react-native';
import React, { useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarkScreen from './screens/MarkScreen';
import FindScreen from './screens/FindScreen';

export default function App() {
  const navigationRef = useRef();
  const routeNameRef = useRef();

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MarkScreen' component={MarkScreen} />
        <Stack.Screen name='FindScreen' component={FindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
