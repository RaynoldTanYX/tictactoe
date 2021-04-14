import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { requestCreateGame, requestJoinGame } from './Database';
const Menu = (props) => {

    const [gameId, setGameId] = React.useState("");
    const [gamePassword, setGamePassword] = React.useState("");

    const onPressJoin = () => {
        console.log("User has pressed join: " + gameId);
        requestJoinGame(props.username, gameId, gamePassword).then((response) => {
            if (response.err === null) {
                props.onGameDataSet(response.data);
            }
            else {
                //TODO: let user know of error
                console.error(response.err);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const onPressCreate = () => {
        console.log("User has pressed create");
        requestCreateGame(props.username).then((response) => {
            if (response.err === null) {
                props.onGameDataSet(response.data);
            }
            else {
                //TODO: let user know of error
                console.error(response.err);
            }
        }).catch((error) => {
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