import { Button } from '@rneui/themed';
import { StyleSheet, Text, View,} from "react-native";
import React, { useEffect} from "react";
import { Card } from '@rneui/base';
import { initHistoryDB } from '../helpers/fb-history';

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        try {
            initHistoryDB();
        } catch (err) {
            console.log(err);
        }
    }, []);
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
      backgroundColor: "#FAF0E6",
      flex: 1,
    },
    
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
        textAlign: 'center',
    },

    buttons: {
        padding: 25,
        margin: 30,
    },
});

export default HomeScreen;
