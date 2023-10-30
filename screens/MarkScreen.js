import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { Feather } from "@expo/vector-icons";
import { Card } from '@rneui/base';

export default function MarkScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
      <View>
            <Card>
                    <Card.Image source={{uri: "https://www.findlaw.com/static/c/images/image/upload/v1678207336/aemwp-prod/Parking-Garage-Cars.jpg"}} /> 
            </Card>
            <Text style={styles.header}>Here is the longitude, latitude, and other useful information about where your parked car is located.</Text>
          <Text style={styles.paragraph}>{text}</Text>
        </View>
  );
};
const Example = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                    <Feather
                        style={{ marginLeft: 2 }}
                        name="chevron-left"
                        size={20}
                        color="#fff"
                    />
                    <Text>Home Screen</Text> 
                </TouchableOpacity>
            )
        });
    });
  }
   

const styles = StyleSheet.create({
  
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 25,
    margin: 30,
    fontWeight: 'bold'
  }
});