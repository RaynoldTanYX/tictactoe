import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Game = (props) => {

    const [gameId, setGameId] = React.useState("");

    const onPressJoin = () => {

    }
    
    const onPressReturn = () => {
        props.gameOver(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Game ID: {props.gameId}</Text>
            <Button title='Return' onPress={onPressReturn}/>
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
});

export default Game;