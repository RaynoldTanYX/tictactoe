import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Game = (props) => {

    const onGameOver = () => {
        props.onGameOver(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ID: {props.gameId}</Text>
            <Text style={styles.text}>Password: {props.gamePassword}</Text>
            <View style={styles.separator} />
            <Text style={styles.text}>Waiting for someone to join...</Text>
            {/* <Button title='Return' onPress={onPressReturn}/> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: '50%',
        //justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 23,
        textAlign: 'center'
    },
    textinput: {
        marginTop: 5,
        backgroundColor: '#EEEEEE',
        width: '80%',
        color: '#000000',
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 10,
    },
    separator: {
        marginVertical: 18,
        borderBottomColor: '#FF0000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Game;