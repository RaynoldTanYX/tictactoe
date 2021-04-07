import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Menu = (props) => {

    const [gameId, setGameId] = React.useState("");

    const onPressJoin = () => {
        console.log("User has pressed join: " + gameId);
        props.onGameIdSet(gameId);
    }
    
    const onPressCreate = () => {
        console.log("User has pressed create: " + gameId);
        props.onGameIdSet(gameId);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Game ID</Text>
            <TextInput style={styles.textinput} onChangeText={setGameId}>{gameId}</TextInput>
            <Button title='Join A Game' onPress={onPressJoin}/>
            <View style={styles.separator} />
            <Button title='Create A Game' onPress={onPressCreate}/>
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

export default Menu;