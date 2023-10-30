import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarkScreen from './screens/MarkScreen';
import FindScreen from './screens/FindScreen';
//import * as Analytics from "expo-firebase-analytics";
import analytics from "@react-native-firebase/analytics";


export default function App() {
  const navigationRef = useRef();
  const routeNameRef = useRef();

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={ async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          await analytics().logEvent("screen_view", {
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
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
