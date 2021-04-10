import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Menu = (props) => {

    const [gameId, setGameId] = React.useState("");
    const [gamePassword, setGamePassword] = React.useState("");

    const onPressJoin = () => {
        console.log("User has pressed join: " + gameId);
        props.onGameIdSet(gameId);
        props.onGamePasswordSet(gamePassword);
    }

    const onPressCreate = () => {
        console.log("User has pressed create: " + gameId);
        fetch('https://o63yi7inyg.execute-api.ap-southeast-1.amazonaws.com/default/tictactoe-creategame', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player1Name: props.username,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                props.onGameIdSet(json.gameId);
                props.onGamePasswordSet(json.gamePassword);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {props.username}</Text>
            <View style={styles.separator} />
            <TextInput style={styles.textinput} onChangeText={setGameId} placeholder="Game ID">{gameId}</TextInput>
            <TextInput style={styles.textinput} onChangeText={setGamePassword} placeholder="Password">{gamePassword}</TextInput>
            <Button title='Join A Game' onPress={onPressJoin} />
            <View style={styles.separator} />
            <Button title='Create A Game' onPress={onPressCreate} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: '35%',
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

export default Menu;