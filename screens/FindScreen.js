import { Button, Input } from '@rneui/themed';
import { Keyboard, Platform, StyleSheet,Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import React, { useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";
import {showLocation} from 'react-native-map-link';
import MapView from 'react-native-maps';

const FindScreen = ({navigation}) => {
    const [find, setFind] = useState(""); 
    const [description, setDescription] = useState("");

    showLocation({
        latitude: "",
        longitude: "",
        googleForceLatLon: false,
    })

    return (
        <View>
            <Input
                placeholder="Enter reminder notes about location"
                value={description}
                onChangeText={setDescription}
            />
        </View>
    );
};

export default FindScreen;