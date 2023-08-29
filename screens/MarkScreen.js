import { Button, Input } from '@rneui/themed';
import { Keyboard, Platform, StyleSheet,Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import React, { useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";

const MarkScreen = (navigation) => {
    const [mark, setMark] = useState([]); 

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <Feather
                        style={{ marginLeft: 2 }}
                        name="chevron-left"
                        size={20}
                        color="#fff"
                    />
                    <Text style={styles.headerButton}>Home Screen</Text> 
                </TouchableOpacity>
            ),
        });
    });

};

export default MarkScreen;