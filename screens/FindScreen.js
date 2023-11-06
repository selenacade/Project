import { Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from '@rneui/base';
import { setUpHistoryListener, storeHistoryItem } from "../helpers/fb-history";
import { Feather } from "@expo/vector-icons";
import { showLocation } from 'react-native-map-link';
import * as Location from 'expo-location';


const FindScreen = ({navigation}) => {
    const [find, setFind] = useState(""); 

    showLocation({
      latitude: "42.90706",
      longitude: "85.76301",
      title: 'Grand Valley State University', 
      googleForceLatLon: false, 
      alwaysIncludeGoogle: true, 
      dialogTitle: 'This is the dialog Title', 
      dialogMessage: 'This is the amazing dialog Message', 
      cancelText: 'This is the cancel button text', 
      appsWhiteList: ['google-maps'], 
      naverCallerName: 'com.example.myapp', 
      directionsMode: 'car', // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
    });

    return (
        <View style={styles.container}>
             <Card>
                <Card.Image source={{uri: "https://as1.ftcdn.net/v2/jpg/02/61/34/34/1000_F_261343474_JL8KQzVDlU74xpgOGgLGvSS4DjQReqqn.jpg"}} /> 
             </Card>
        </View>
    );
}

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
      };

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF0E6",
        flex: 1,
    },
 });

export default FindScreen;