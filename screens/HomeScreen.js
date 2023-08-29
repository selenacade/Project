import { Button } from '@rneui/themed';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import React, { useState } from "react";
import { Card } from '@rneui/base';


const HomeScreen = ({navigation}) => {
   const {imageURL, setImageURL} = useState (
        "https://i.pcmag.com/imagery/articles/05m7JVroFXcCobC0Vbo3wQJ-49.fit_lim.size_1600x900.v1675976887.jpg"
    ); 

    return (
        <View style={styles.container}>
            <Card>
                <Card.Image source={{uri: imageURL}} /> 
                <Text style={styles.title}> Welcome to Find Your Parked Car! </Text>
            </Card>
            <Button
                style={styles.buttons}
                title = "Mark my Location"
                onPress= {() => navigation.navigate('MarkScreen')}
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
