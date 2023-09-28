import { Button } from '@rneui/themed';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import React, { useState } from "react";
import { Card } from '@rneui/base';


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Image source={{uri: "https://www.findlaw.com/injury/car-accidents/someone-hit-my-parked-car-and-left-what-do-i-do/_jcr_content/pg/articleHeading/imageInLine.coreimg.jpeg/1553539860162.jpeg"}} /> 
                <Text style={styles.title}> Welcome to Find Your Parked Car! </Text>
            </Card>
            <Button
                style={styles.buttons}
                title="Mark my Location"
                onPress= {() => navigation.navigate('MarkScreen')}
            />
            <Button
                style={styles.buttons}
                title="Find my Location"
                onPress= {() => navigation.navigate('FindScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#E8EAF6",
      flex: 1,
    },
    
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
    },

    buttons: {
        borderRadius: 25,
        padding: 25,
        margin: 10,
    },
});

export default HomeScreen;
