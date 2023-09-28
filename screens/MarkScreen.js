import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { Feather } from "@expo/vector-icons";
import { initHistoryDB, setUpHistoryListener, storeHistoryItem } from "../helpers/fb-history";

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
    <View style={styles.container}>
        <Text style={styles.header}>View the latitude and longitude to show where you parked your car.</Text>
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

    useEffect(() => {
        try {
            initHistoryDB();
        } catch (err) {
            console.log(err);
        }
        setUpHistoryListener((items) => {
            console.log("setting state with: ", items);
            setHistory(items);
        });
      }, []);
    
      useEffect(() => {
        if (route.params?.text) {
            storeHistoryItem(route.params);
        }
      },  [route.params?.text]);
    }
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 25,
    margin: 30,
  }
});
