import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { Feather } from "@expo/vector-icons";
import { Card } from '@rneui/base';
import { storeHistoryItem } from '../helpers/fb-history';

export default function MarkScreen(route) {
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
      storeHistoryItem(location); 
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
       // <FlatList
      //      data={location}
      //      renderItem={({location})=> {
       //       return (
                <View style={styles.container}>
                  <Card>
                    <Card.Image source={{uri: "https://www.findlaw.com/static/c/images/image/upload/v1678207336/aemwp-prod/Parking-Garage-Cars.jpg"}} /> 
                  </Card>
                  <Text style={styles.header}>Here is useful information about where your parked car is located:</Text>
                  <Text style={styles.paragraph}>{text}</Text>
                  <Text style={styles.text}>Use the longitude and latitude on this page to find your car on the following page. Make sure to copy your coordinates into Google Maps.</Text>
               </View>
              );
         //   }}
        //  />
 // );
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
  container: {
    backgroundColor: "#FAF0E6",
    flex: 1,
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    padding: 15,
    margin: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});