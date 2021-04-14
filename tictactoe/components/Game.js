import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Game = (props) => {

    const onGameOver = () => {
        props.onGameOver(true);
    }

    //TODO: receive info when someone joins my game

    //TODO: gameplay
    
    //TODO: send move info

    //TODO: receive move info

    return (
        props.gameData.player1Name == "" || props.gameData.player2Name == "" ?
            <View style={styles.container}>
                <Text style={styles.text}>ID: {props.gameData.gameId}</Text>
                <Text style={styles.text}>Password: {props.gameData.gamePassword}</Text>
                <View style={styles.separator} />
                <Text style={styles.text}>Waiting for someone to join...</Text>
            </View>
            :
            <View style={styles.container}>
                <View style={styles.separator} />
                <Text style={styles.text}>ID: {props.gameData.gameId}</Text>
                <Text style={styles.text}>Password: {props.gameData.gamePassword}</Text>
                <View style={styles.separator} />
                <Text style={styles.text}>{props.gameData.player1Name}</Text>
                <Text style={styles.text}>vs</Text>
                <Text style={styles.text}>{props.gameData.player2Name}</Text>
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