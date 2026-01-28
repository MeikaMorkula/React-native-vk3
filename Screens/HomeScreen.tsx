import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function HomeScreen() 
{
    return(
        <View style={styles.container}>
            <Text>This is the Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfb4b4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});